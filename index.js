const express=require("express")
const{connection}=require("./configs/db")
const{userRouter}=require("./routes/User.route")
const{postRouter}=require("./routes/Post.route")
const{authenticate}=require("./middlewares/Authenticate.middleware")
const app=express()

app.use(express.json())
app.use("/users",userRouter)
app.use(authenticate)
app.use("/posts",postRouter)




app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("connected to db")
    } catch (err) {
        console.log("Touble connecting")
    }
    console.log(`server is running at port ${process.env.port}`)
})