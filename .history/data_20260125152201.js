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
const data =  mongoose.model("data",dataSchema);
module.exports=data;