import Joi from "joi";

export const createdPet = Joi.object({
  body: Joi.object({
    name: Joi.string().min(3),
    species: Joi.string().min(3),
    carry: Joi.string().max(3),
    weight: Joi.number(),
    date_of_birth: Joi.date(),
  })
})
