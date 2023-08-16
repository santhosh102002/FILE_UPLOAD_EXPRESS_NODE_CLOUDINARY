const express = require("express");


const app = express();
const fileupload = require("express-fileupload")

require('dotenv').config
PORT = process.env.PORT

app.use(express.json())

app.use(fileupload())
const db = require('./Config/database')
db.connect();

const cloudinary = require('./Config/cloudinary');
cloudinary.cloudinaryConnect();

const Upload = require('./routes/FileUpload')
app.use('api/v1/upload', Upload)


app.listen(PORT,()=>{
    console.log("The server running at port "+PORT)
})