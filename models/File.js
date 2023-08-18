const mongoose = require("mongoose");
const transporter = require("../Config/nodemail")
// const nodemailer = require('nodemailer')

const fileSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true

    },
    imageUrl:{
        type:String,

    },
    tags:{
        type:String
    },
    email:{
        type:String
    }
})

fileSchema.post("save", async (doc)=>{
try{
console.log("DOC",doc)
let info = await transporter.sendMail({
    from:'Santhosh',
    to: doc.email,
    subject:"New File uploaded to cloudinary",
    html:`<h2>Hello Sir</h2> <p>File uploaded here: <a href = ${doc.imageUrl} >${doc.imageUrl}</a></p> `
})
console.log(info)

}
catch(err){
    console.log(err)
}
})



 const File = mongoose.model('File',fileSchema)
 module.exports = File