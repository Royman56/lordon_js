import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from "joi";
import {
    Row,
    Col,
    Form,
    Button,
    Label,
} from "reactstrap";

const schema = Joi.object({
    img_url: Joi.string().required()
        .alphanum()
        .min(3)
        .messages({
            'string.base': `Debe ser de tipo texto`,
            'string.empty': 'La imagen es un campo obligatorio',
            'string.min': `Debe tener un minimo de {#limit} letras`,
            'any.required': 'La imagen es un campo obligatorio'
        })
});

const ImgProduct = () => {
   


    return (
        <Row>
            <Col sm="12">

            </Col>
        </Row>
    )

}
export default ImgProduct