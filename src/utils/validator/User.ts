import Joi from "joi"
import { AppDataSource } from "../../data-source"
import { User } from "../../entity/User"

export const UserValidator = Joi.object({
    fullname: Joi.string().required(),
    address: Joi.string().required(),
    gender: Joi.string().required(),
    username: Joi.string().min(3).max(30).required(),
    password: Joi.string().min(8).required(),
    is_admin: Joi.boolean()
})