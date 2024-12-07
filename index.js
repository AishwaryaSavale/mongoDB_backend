const express=require('express')
const cors=require('cors')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')


const server=express()
server.use(cors())
server.use(bodyParser.json())


mongoose.connect('mongodb+srv://Aishwarya:JXeWINMUQUar1C5Q@test.qadp0.mongodb.net/',{
    useNewURLParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("BD connected")
}).catch((error)=>{
    console.log("error",error.message)
})

 const userRoutes=require('./routes/userRoute')
 server.use('/api',userRoutes)
 const ntRoutes=require('./routes/ntRoute')
 server.use('/',ntRoutes)

server.listen(3333,()=>{
    console.log("server started on 3333 ")
})