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
const Data =  mongoose.model("Data",dataSchema);
module.exports = Data;