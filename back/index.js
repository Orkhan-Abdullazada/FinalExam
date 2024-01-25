const express = require("express")
const app = express()
const mongoose=require("mongoose")
const BlogRouter = require("./routes/blog.routes")
const cors = require("cors")

app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://orxan:salam123@cluster0.alor0hy.mongodb.net/").then(res=>{
    console.log("actived mongoose")
})
app.use("/blog", BlogRouter)
app.listen(8080, ()=>{
    console.log("actived")
})