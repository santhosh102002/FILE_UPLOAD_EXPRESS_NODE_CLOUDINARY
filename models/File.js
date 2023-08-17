const mongoose = require("mongoose");
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

// fileSchema.post("save", async (doc)=>{
// try{
// console.log("DOC",doc)
// }
// catch(err){
//     console.log(err)
// }
// })


 const File = mongoose.model('File',fileSchema)
 module.exports = File