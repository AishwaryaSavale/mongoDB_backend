const express=require('express')
const router=express.Router();
const nt=require('../model/ntUser')


router.get('/getnt',async(req,res)=>{
    try{
        const users=await nt.find()
        res.send({status:true,message:users})
    }catch(error){
       res.send({status:false,message:error.message})   
    }
})
router.get('/getntId/:id',async(req,res)=>{
    try{
        const id=req.params.id
        const users=await nt.findById(id)
        if(!users){
            res.send({status:true,message:users})
        }else{
            res.send({status:true,message:users})
        }
    }catch(error){
       res.send({status:false,message:error.message})   
    }
})

router.post('/addnt',async(req,res)=>{
    try{
        const user=new nt(req.body)
        await user.save()
        res.send({status:true,message:"Added Successfully !!"})
    }catch(error){
       res.send({status:false,message:error.message})   
    }
})

router.put('/updatent/:id',async(req,res)=>{
    try{
        const id=req.params.id
        const users=await nt.findByIdAndUpdate(id,req.body,{new:true})
        res.send({status:true,message:"Updated Successfully !!"})
    }catch(error){
       res.send({status:false,message:error.message})   
    }
})

router.delete('/deletent/:id',async(req,res)=>{
    try{
        const id=req.params.id
        const users=await nt.findByIdAndDelete(id)
        res.send({status:true,message:"Deleted Successfully !!"})
    }catch(error){
       res.send({status:false,message:error.message})   
    }
})

module.exports=router;