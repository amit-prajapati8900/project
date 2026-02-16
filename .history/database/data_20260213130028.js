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
            url:String,
            filename:String
         },
         owner:{
           type: mongoose.Schema.Types.ObjectId,
            ref:"User",
         }
})
const Data =  mongoose.model("Data",dataSchema);
module.exports = Data;