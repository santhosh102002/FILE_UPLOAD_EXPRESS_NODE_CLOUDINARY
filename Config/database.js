const mongoose = require("mongoose");
require("dotenv").config()

const dbConnect  = ()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then((conn)=>{
        console.log(`Connected to DB at ${conn.connection.host}`)
    })
    .catch((err)=>{
        console.log("Failed to connect to db")
    })
}

module.exports = dbConnect;