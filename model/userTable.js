const mongoose=require('mongoose')


const UserSchema=new mongoose.Schema({
    fullName:{type:String,required:true},
    userName:{type:String,required:true},
    mobileNo:{type:String,required:true},
    bloodGroup:{type:String,rquired:true},
    dob:{type:Date ,required:true},
    /* city:{type:String,required:true},
   apTime:{type:TimeRanges,required:true}*/

})
module.exports=mongoose.model('Users',UserSchema)