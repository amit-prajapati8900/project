const mongoose = require("mongoose");
const dataSchema = new  mongoose.Schema({
    name:{
        type:String,
        require:true,
         },
         class:{
            type:String,
         },
         age:{
            type:Number
         },
})
const Chat =  mongoose.model("Chat",dataSchema);
module.exports=Chat;