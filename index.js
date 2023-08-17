const express = require("express");


const app = express();
const fileupload = require("express-fileupload")

require('dotenv').config()
PORT = process.env.PORT

app.use(express.json())

app.use(fileupload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}))
const db = require('./Config/database.js')
db()

const cloudinary = require('./Config/cloudinary');
cloudinary.cloudinaryConnect();

const Upload = require('./routes/FileUpload')
app.use('/api/v1/upload', Upload)


app.listen(process.env.PORT,()=>{
    console.log("The server running at port "+PORT)
})