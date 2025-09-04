const express = require("express")
const connectDB = require("./dbConnection")
const cors = require("cors")
const UserRoute = require("./routes/UserRoute");
const PostRoute = require("./routes/PostRoute");
const LikeRoute = require("./routes/LikeRoute");
require("dotenv").config();
// const {imageUpload} = require("./controler/uploadControl");
const PORT = 3001

// const multer = require('multer');
// const upload = multer();

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

connectDB()

app.get("/",(req,res)=>{
    res.send("<h1>home</h1>")
})

app.use("/user",UserRoute)
// app.post("/upload",upload.single('image'),imageUpload)

app.use("/post",PostRoute)

app.use("/postLike",LikeRoute)

app.listen(PORT,()=>{
    console.log("server start")
    console.log(`http://localhost:${PORT}`)
})