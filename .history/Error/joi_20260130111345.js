const Joi = require("joi");

const userSchma = Joi.object({
    name:Joi.string().min(2).max(10).required(),
    deg:Joi.string().min(2).max(20).required(),
    age:Joi.number().min(0).max(90).required(),
    img:Joi.string().min(0).max(400).required(),
})
module.exports = userSchma;