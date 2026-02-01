const ExpressError = require("./ExpressError");
const userSchma = require("./joi");
function validedata(req,res,next){
    const {error} = userSchma.validate(req.body);
    if(error){
        let ermsg = error.details.map((el)=>el.message.join(","));
        throw new ExpressError(400,ermsg);
   }else{
    next();
   }

}
module.exports = validedata;