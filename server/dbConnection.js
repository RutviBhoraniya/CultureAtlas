const mongoose = require("mongoose")
// const MONGO_URI = "mongodb://127.0.0.1:27017/cultureAtlas"
const connectDB = ()=>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("DB connection establish")
    }).catch((err)=>{
        console.log("err",err)
    })
}
module.exports = connectDB