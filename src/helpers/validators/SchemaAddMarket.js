import Joi from "joi";

export const SCHEMA_ADD_MARKET = Joi.object({
    name: Joi.string().required()
        .alphanum()
        .min(3)
        .max(30)
        .messages({
            'string.base': `Debe ser de tipo texto`,
            'string.empty': 'El nombre es un campo obligatorio',
            'string.min': `Debe tener un minimo de {#limit} letras`,
            'any.required': 'El nombre es un campo obligatorio'
        }),
    information: Joi.string().required()
        .alphanum()
        .min(3)
        .max(512)
        .messages({
            'string.base': `Debe ser de tipo texto`,
            'string.empty': 'La información es un campo obligatorio',
            'string.min': `Debe tener un minimo de  {#limit} letras`,
            'any.required': 'La información es un campo obligatorio'
        }),
    description: Joi.string().required()
        .alphanum()
        .min(3)
        .max(512)
        .messages({
            'string.base': `Debe ser de tipo texto`,
            'string.empty': 'La descripción es un campo obligatorio',
            'string.min': `Debe tener un minimo de  {#limit} letras`,
            'any.required': 'La descripción es un campo obligatorio'
        }),
    address: Joi.string().required()
        .alphanum()
        .min(3)
        .messages({
            'string.base': `Debe ser de tipo texto`,
            'string.empty': 'La dirección es un campo obligatorio',
            'string.min': `Debe tener un minimo de  {#limit} letras`,
            'any.required': 'La dirección es un campo obligatorio'
        }),
    img_url: Joi.string().required()
        .alphanum()
        .min(3)
        .messages({
            'string.base': `Debe ser de tipo texto`,
            'string.empty': 'La imagen es un campo obligatorio',
            'string.min': `Debe tener un minimo de  {#limit} letras`,
            'any.required': 'La imagen es un campo obligatorio'
        }),
});