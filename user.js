const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    age:Number,
    favoriteFoods:[String]
})
module.exports=mongoose.model("User",userSchema)