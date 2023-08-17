const file = require('../models/File');
const cloudinary = require('cloudinary').v2;

const isFileTypeSame = (type,supportedTypes)=>{
    return supportedTypes.include(type);
    
}
const uploadFileToCloudinary = async (file,folder)=>{
    const options = {folder};
    return await cloudinary.uploader.upload(file.tempFilePath,options);
}

exports.localFileUpload = async(req,res)=>{
    try{
        const file = req.files.imageFile;
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

exports.imageUpload = async (req,res)=>{
    try{
    const {name,tags,email} = req.body;
    const file = req.files.imgaeFile;

    // File type validation
    const supportedTypes = ['jpg','jpeg','png']
    const fileType = file.name.split('.')[1].toLowerCase();
    if(!isFileTypeSame(fileType,supportedTypes)){
        return res.status(400).json({
            success: false,
            message: "File format not supported"
        })

    }
    const response = await uploadFileToCloudinary(file,"santhosh");
    console.log(response)
    
    // Entry in db
    // const 
    res.status(200).json({
        success: true,
        message: "Successfully uploaded to cloudinary"
    })


    }
    catch(err){
        console.log(err);
        res.status(400).json({
            success: false,
            message: "Failed to upload to cloudinary"
        })
    }


}