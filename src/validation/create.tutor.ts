import Joi from "joi";

export const createdTutor = Joi.object({
  body: Joi.object({
    name: Joi.string().min(4),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    phone: Joi.number().min(4),
    password: Joi.string().min(3),
    date_of_birth: Joi.date(),
    zip_code: Joi.number().min(4),
  })
})
