import React, { useEffect, useState } from 'react';
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

const AddSubCategory = () => {

    const [activeTab, setActiveTab] = useState("1");
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }
    const [errorlist, setError] = useState([]);

    const [categorylist, setCategorylist] = useState([]);

    const [subcategoryInput, setSubCategory] = useState({
        slug: '',
        name: '',
        id_category: '',
        status: '',
    });
    const history = useHistory();
    const [pricture, setPicture] = useState([]);


    const handleInput = (e) => {
        e.persist();
        setSubCategory({ ...subcategoryInput, [e.target.name]: e.target.value })

    }

    const handleImage = (e) => {
        e.persist();
        setPicture({ image: e.target.files[0] });

    }

    useEffect(() => {
        axios.get(`/api/all-category`).then(res => {
            if(res.status === 200)
            {
                setCategorylist(res.data.category);
            }
        });
        
    }, []);

    const submitCategory = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', pricture.image);
        formData.append('slug', subcategoryInput.slug);
        formData.append('name', subcategoryInput.name);
        formData.append('id_category', subcategoryInput.id_category);
        formData.append('status', subcategoryInput.status);



        axios.post(`/api/store-subcategory`, formData).then(res => {

            if (res.data.status === 200) {
                swal("La Sub Categoria Fue Creada", "", "success");

                history.push('/dashboard')
                setSubCategory({
                    ...subcategoryInput,
                    slug: '',
                    name: '',
                    id_category: '',

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
                                        Agregar Sub Categoria
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
                                        <h3>Agregar Sub Categoria</h3>
                                    </div>
                                </CardBody>
                                <CardBody>

                                    <Form onSubmit={submitCategory} encType="multipart/form-data">
                                        <Row>
                                            <Col md="6" lg="6" sm="12">
                                                <Label>
                                                    Nombre De La Sub Categoría
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
                                                        value={subcategoryInput.name}
                                                        maxLength="30"
                                                        placeholder="Ingrese nombre de la categoria"
                                                    ></input>
                                                </div>
                                                <small className="text-danger">{errorlist.name}</small>

                                            </Col>

                                            <Col md="6" lg="6" sm="12">
                                                <Label >
                                                    Link De La Sub Categoría
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
                                                        value={subcategoryInput.slug.toLowerCase().trim()}
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
                                                    Imagen De La Sub Categoría
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
                                                    Categoría
                                                </Label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="basic-addon">
                                                            <i className="fa fa-bars prefix"></i>
                                                        </span>
                                                    </div>
                                                    <select
                                                        className="form-control "
                                                        name="id_category"
                                                        id="exampleFormControlSelect1"
                                                        onChange={handleInput}
                                                        value={subcategoryInput.id_category}>
                                                        <option key={1} value="true">Selecciona Categoria</option>
                                                        {
                                                            categorylist.map( (item) => {
                                                                return(
                                                                    <option key={item.id} value={item.id}>{item.name}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                                <small className="text-danger">{errorlist.id_category}</small>
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

export default AddSubCategory;