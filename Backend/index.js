const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const path = require('path');
const port = 4000;

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/e-commerce")
.then(()=>{
    console.log("Db is connected");
})
.catch(()=>{
    console.log("Db error");
})

const storage = multer.diskStorage({
    destination : './upload/images',
    filename:(req,file,cb)=>{
        return(cb(null,`${file.fieldname}_${Date.now}_${path.extname(file.originalname)}`))
    }
})

app.use('/images',express.static("upload/images"));
app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success : 1,
        image_url : `http://localhost:${port}/images/${req.file.filename}`
    })
})
app.listen(4000,()=>{
    console.log(`App is running on port : ${port}`);
})
