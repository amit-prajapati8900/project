const mongoose = require("mongoose");
const dataSchema = new  mongoose.Schema({
    name:{
        type:String,
        required:true,
         },
         deg:{
            type:String,
            required:true,
         },
         age:{
            type:Number,
            required:true,
         },
         img:{
            type:String,
         },
})
const Data =  mongoose.model("Data",dataSchema);
module.exports = Data;