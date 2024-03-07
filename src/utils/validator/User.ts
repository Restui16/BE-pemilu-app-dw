import Joi from "joi"
import { GenderType } from "../../entity/Users"
export const UserValidator = Joi.object({
    fullname: Joi.string().required(),
    address: Joi.string().required(),
    gender: Joi.string().valid(GenderType).required(),
    username: Joi.string().min(3).max(30).required(),
    password: Joi.string().min(8).required(),
    is_admin: Joi.boolean()
})