const file = require('../models/File');

exports.localFileUpload = async(req,res)=>{
    try{
        const file = req.files.file;
        console.log("The File is "+file)
        let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`
        file.mv(path,(err)=>{
            console.log(err)
        })
        res.json({
            success:true,
            message:"Local File uploaded successfully"
        })
    }
    catch(err){
        console.log(err)
    }
}