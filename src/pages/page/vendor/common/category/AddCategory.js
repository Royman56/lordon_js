import React, { useState } from 'react';
import HeaderTwo from '../../../../../components/headers/header-two';
import swal from 'sweetalert';
import {
    Col,
    Form,
    Card,
    CardBody,
    Label,
    Row,
    TabPane,
    Media,
    NavItem,
    NavLink,
    Nav,
    Button
} from "reactstrap";
import axios from 'axios';
import seventeen from "../../../../../assets/images/logos/17.png";
import { useHistory } from 'react-router';

const AddCategory = () => {

    const [activeTab, setActiveTab] = useState("1");
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }
    const [errorlist, setError] = useState([]);

    const [categoryInput, setCategory] = useState({
        slug: '',
        name: '',
        description: '',
        status: '',
    });
    const history = useHistory();
    const [pricture, setPicture] = useState([]);


    const handleInput = (e) => {
        e.persist();
        setCategory({ ...categoryInput, [e.target.name]: e.target.value })

    }

    const handleImage = (e) => {
        e.persist();
        setPicture({ image: e.target.files[0] });

    }

    const submitCategory = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', pricture.image);
        formData.append('slug', categoryInput.slug);
        formData.append('name', categoryInput.name);
        formData.append('description', categoryInput.description);
        formData.append('status', categoryInput.status);



        axios.post(`/api/store-category`, formData).then(res => {

            if (res.data.status === 200) {
                swal("La Categoria Fue Creada", "", "success");

                history.push('/dashboard')
                setCategory({
                    ...categoryInput,
                    slug: '',
                    name: '',
                    description: '',

                });
                setError([]);
            }
            else if (res.data.status === 400) {
                setError(res.data.errors);
            }

        });

    }


    return (
        <section className="dashboard-section section-b-space">
            <Row>
                <Col lg="3">
                    <div className="dashboard-sidebar">
                        <div className="profile-top">
                            <div className="profile-image">
                                <Media src={seventeen} alt="" className="img-fluid" />
                            </div>
                            <div className="profile-detail">
                                <a href="/">
                                    <h5>Lordon</h5>
                                </a>

                                <br /><br />
                                <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                                </NavItem>

                            </div>
                        </div>
                        <div className="faq-tab">
                            <Nav tabs className="border-tab-primary">
                                <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                                    <NavLink
                                        className={activeTab === "1" ? "active" : ""}
                                        onClick={() => setActiveTab("1")}
                                    >
                                        Agregar Categoria
                                    </NavLink>
                                </NavItem>

                                <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                                    <NavLink
                                        href="/dashboard/"
                                    >
                                        Volver
                                    </NavLink>
                                </NavItem>

                            </Nav>
                        </div>
                    </div>
                </Col>
                <Col lg="9">
                    <TabPane tabId="3">
                        <Col sm="12">
                            <Card className="dashboard-table mt-0">
                                <CardBody>
                                    <div className="top-sec">
                                        <h3>Agregar Categoria</h3>
                                    </div>
                                </CardBody>
                                <CardBody>

                                    <Form onSubmit={submitCategory} encType="multipart/form-data">
                                        <Row>
                                            <Col md="6" lg="6" sm="12">
                                                <Label>
                                                    Nombre De La Categoría
                                                </Label>

                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="basic-addon">
                                                            <i className="fa fa-bars prefix"></i>
                                                        </span>
                                                    </div>

                                                    <input
                                                        className="form-control"
                                                        name="name"
                                                        id="validationCustom01"
                                                        type="text"
                                                        onChange={handleInput}
                                                        value={categoryInput.name}
                                                        maxLength="30"
                                                        placeholder="Ingrese nombre de la categoria"
                                                    ></input>
                                                </div>
                                                <small className="text-danger">{errorlist.name}</small>

                                            </Col>

                                            <Col md="6" lg="6" sm="12">
                                                <Label >
                                                    Link De La Categoría
                                                </Label>

                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="basic-addon">
                                                            <i className="fa fa-random prefix"></i>
                                                        </span>
                                                    </div>


                                                    <input
                                                        className="form-control"
                                                        name="slug"
                                                        id="validationCustom01"
                                                        type="text"
                                                        onChange={handleInput}
                                                        value={categoryInput.slug.toLowerCase().trim()}
                                                        maxLength="10"
                                                        placeholder="Ingrese link de la categoria"
                                                    ></input>
                                                </div>
                                                <small className="text-danger">{errorlist.slug}</small>

                                            </Col>


                                        </Row>
                                        <br />
                                        <Row>
                                            <Col md="6" lg="6" sm="12">
                                                <Label >
                                                    Imagen De La Categoría
                                                </Label>
                                                <input

                                                    className="form-control  center input-bordered"
                                                    name="image1"
                                                    id="validationCustom01"
                                                    type="file"
                                                    onChange={handleImage}
                                                ></input>
                                                <small className="text-danger">{errorlist.image}</small>
                                            </Col>

                                            <Col md="6" lg="6" sm="12">
                                                <Label >
                                                    Descripcion De La Categoría
                                                </Label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="basic-addon">
                                                            <i className="fa fa-comments prefix"></i>
                                                        </span>
                                                    </div>
                                                    <textarea
                                                        className="form-control"
                                                        name="description"
                                                        id="validationCustom01"
                                                        type="textarea"
                                                        onChange={handleInput}
                                                        value={categoryInput.description}
                                                        maxLength="512"
                                                        rows="3"
                                                        placeholder="Ingrese descripcion de la categoria"

                                                    ></textarea>
                                                </div>
                                                <small className="text-danger">{errorlist.description}</small>
                                            </Col>

                                        </Row>
                                        <br />

                                        <div className="offset-xl-5 offset-sm-4">
                                            <Button className="btn btn-solid" type="submit"
                                            >
                                                Añadir
                                            </Button>
                                        </div>
                                    </Form>

                                </CardBody>
                            </Card>
                        </Col>
                    </TabPane>
                </Col>
            </Row>
        </section>
    )

}

export default AddCategory