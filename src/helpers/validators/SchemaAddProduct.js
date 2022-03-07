import Joi from "joi";

export const SCHEMA_ADD_PRODUCT = Joi.object({
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
    unit: Joi.string().required()
        .messages({
            'string.base': `Debe ser de tipo numérico`,
            'string.empty': 'El precio es un campo obligatorio',
            'any.required': 'La unidad es un campo obligatorio'
        }),
});