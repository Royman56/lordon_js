import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import {
    Row,
    Col,
    Form,
    Card,
    CardBody,
    Input,
    Button,
    Label,
} from "reactstrap";


const UserProfile = () => {

    const [quantity, setQuantity] = useState(1);
    const { register, handleSubmit } = useForm();

    /*const onSubmit = async (data, e) => {
        e.target.reset();
        const requestOptions = {
            method: 'POST',
            headers: HEADERS_BASE,
            body: JSON.stringify(data)

        };

        const response = await fetch(API_URL + '/products/create', requestOptions);
        const jsonData = await response.json();

        console.log(jsonData);
    }*/


    const IncrementItem = () => {
        if (quantity < 9) {
            setQuantity(quantity + 1);
        } else {
            return null;
        }
    };
    const DecreaseItem = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        } else {
            return null;
        }
    };

    const handleChange = (event) => {
        setQuantity(event.target.value);
    };


    return (
        <div>
            <Row>
                <Col sm="12">
                    <Card className="dashboard-table mt-0">
                        <CardBody>
                            <div className="top-sec">
                                <h3>Perfil Vendedor</h3>
                            </div>
                        </CardBody>

                        <CardBody>
                            <Form>
                                <Row>
                                    <Col>
                                        <Label >
                                            Nombre
                                        </Label>
                                        <Input
                                            className="form-control input-bordered"
                                            name="market_name"
                                            id="validationCustom01"
                                            type="text"
                                            required
                                        />
                                    </Col>

                                    <Col>
                                        <Label >
                                            Apellido
                                        </Label>
                                        <Input
                                            className="form-control input-bordered"
                                            name="market_description"
                                            id="validationCustom01"
                                            type="text"
                                            required
                                        />
                                    </Col>
                                </Row>
                                <br></br>
                                <Row>
                                    <Col>
                                        <Label >
                                            Telefono
                                        </Label>
                                        <Input
                                            className="form-control input-bordered"
                                            name="market_information"
                                            id="validationCustom01"
                                            type="text"
                                            required
                                        />
                                    </Col>

                                    <Col>
                                        <Label >
                                            Email
                                        </Label>
                                        <Input
                                            className="form-control input-bordered"
                                            name="market_address"
                                            id="validationCustom01"
                                            type="text"
                                            required
                                        />
                                    </Col>
                                </Row>
                                <br></br>
                                <Row>
                                    <Col>
                                        <Label >
                                            URL Imagen
                                        </Label>
                                        <Input
                                            className="form-control input-bordered"
                                            name="product_img"
                                            id="validationCustom01"
                                            type="text"
                                            required
                                        />
                                    </Col>

                                    <Col>
                                        <Label >
                                            Contraseña
                                        </Label>
                                        <Input
                                            className="form-control input-bordered"
                                            name="product_img"
                                            id="validationCustom01"
                                            type="text"


                                        />
                                    </Col>
                                </Row>
                                <br></br>
                                <Row>
                                    <Col>
                                        <Label >
                                            Token
                                        </Label>
                                        <Input
                                            className="form-control input-bordered"
                                            name="market_longitude"
                                            id="validationCustom02"
                                            type="number"
                                            required
                                        />
                                    </Col>

                                    <Col>
                                        <Label >
                                            Perfil Creado
                                        </Label>
                                        <Input
                                            className="form-control input-bordered"
                                            name="market_mobile"
                                            id="validationCustom02"
                                            type="number"
                                            required
                                        />
                                    </Col>
                                </Row>
                                <br></br>
                                <Row>
                                    <Col>
                                        <Label >
                                            Perfil Actualizado
                                        </Label>
                                        <Input
                                            className="form-control input-bordered"
                                            name="market_phone"
                                            id="validationCustom02"
                                            type="number"
                                            required
                                        />
                                    </Col>

                                    <Col>
                                        <Label >
                                            Ultimo Registro
                                        </Label>
                                        <Input
                                            className="form-control input-bordered"
                                            name="market_comission"
                                            id="validationCustom02"
                                            type="number"
                                            required
                                        />
                                    </Col>
                                </Row>
                                <br></br>

                                <div className="offset-xl-5 offset-sm-4">
                                    <Button className="input-bordered" type="submit" color="primary"
                                    >
                                        Añadir
                                    </Button>

                                </div>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )

}

export default UserProfile