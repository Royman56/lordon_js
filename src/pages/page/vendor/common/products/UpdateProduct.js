import React, { useEffect, useState } from 'react';
import NumberFormat from "react-number-format";
//import 'font-awesome/css/font-awesome.min.css';
import HeaderTwo from '../../../../../components/headers/header-two';
import FooterTwo from '../../../../../components/footers/footer-two';
import {
    Col,
    Form,
    Card,
    CardBody,
    Container,
    Label,
    Row,
    TabPane,
    Media,
    NavItem,
    NavLink,
    Nav,
    Button
} from "reactstrap";
import seventeen from "../../../../../assets/images/logos/17.png";
import axios from 'axios';
import swal from 'sweetalert';
import { useHistory } from 'react-router';

const UpdateProduct = (props) => {
    const [activeTab, setActiveTab] = useState("1");
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }

    const [categorylist, setCategorylist] = useState([]);
    const [productInput, setProduct] = useState({
        name_product: '',
        id_category: '',
        price_product: '',
        discount_price: '',
        description_product: '',
        meta_title: '',
        meta_keyword: '',
        meta_description: '',
        status: '',

    });
    const history = useHistory();
    const [pricture, setPicture] = useState([]);
    const [pricture2, setPicture2] = useState([]);
    const [pricture3, setPicture3] = useState([]);
    const [pricture4, setPicture4] = useState([]);
    const [errorlist, setError] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleInput = (e) => {
        e.persist();
        setProduct({ ...productInput, [e.target.name]: e.target.value });

    }

    const handleImage = (e) => {
        e.persist();
        setPicture({ image1: e.target.files[0] });

    }

    const handleImage2 = (e) => {
        e.persist();
        setPicture2({ image2: e.target.files[0] });



    }

    const handleImage3 = (e) => {
        e.persist();
        setPicture3({ image3: e.target.files[0] });



    }

    const handleImage4 = (e) => {
        e.persist();
        setPicture4({ image4: e.target.files[0] });


    }


    useEffect(() => {
        axios.get(`/api/all-category`).then(res => {
            if (res.status === 200) {
                setCategorylist(res.data.category);
            }
        });

        const product_id = props.match.params.id;
        axios.get(`/api/edit-product/${product_id}`).then(res => {
            if (res.data.status === 200) {
                setProduct(res.data.product);

            }
            else if (res.data.status === 404) {
                swal("Error", res.data.message, "error");
                history.push('/page/vendor/common/dashboard');
            }

            setLoading(false);

        });

    }, [props.match.params.id, history]);

    const updateProduct = (e) => {
        e.preventDefault();

        const product_id = props.match.params.id;

        const formData = new FormData();
        formData.append('image1', pricture.image1);
        formData.append('image2', pricture2.image2);
        formData.append('image3', pricture3.image3);
        formData.append('image4', pricture4.image4);
        formData.append('name_product', productInput.name_product);
        formData.append('id_category', productInput.id_category);
        formData.append('price_product', productInput.price_product);
        formData.append('discount_price', productInput.discount_price);
        formData.append('description_product', productInput.description_product);
        formData.append('meta_title', productInput.meta_title);
        formData.append('meta_keyword', productInput.meta_keyword);
        formData.append('meta_description', productInput.meta_description);
        formData.append('status', productInput.status);


        axios.post(`/api/update-product/${product_id}`, formData).then(res => {

            if (res.data.status === 200) {
                swal("Producto Editado", "", "success");
                history.push('/dashboard')

            } else if (res.data.status === 422) {
                swal("Todos Los Campos Son Obligatorios", "", "error");
                setError(res.data.errors);
            } else if (res.data.status === 404) {
                swal("Error", res.data.message, "error");
                history.push('/product/ProductList')
            }

        });

    }

    if (loading) {

        return <Container className="col-md-2">
            <Row>
                <h4 className='button-center'>Cargando Producto...</h4>
            </Row>
        </Container>
    }


    return (
        <section className="dashboard-section">
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
                                        Editar Producto
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
                                        <h3>Editar Producto</h3>
                                    </div>
                                </CardBody>
                                <CardBody>

                                    <Form onSubmit={updateProduct} encType="multipart/form-data">
                                        <Row>
                                            <Col md="6" lg="6" sm="12">
                                                <Label >
                                                    Nombre Del Producto
                                                </Label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="basic-addon">
                                                            <i className="fa fa-tag prefix"></i>
                                                        </span>
                                                    </div>
                                                    <input className="form-control"
                                                        name="name_product"
                                                        type="text"
                                                        placeholder=" Ingrese nombre del producto"
                                                        aria-describedby="basic-addon"
                                                        onChange={handleInput}
                                                        value={productInput.name_product} />
                                                </div>
                                                <small className="text-danger">{errorlist.name_product}</small>


                                            </Col>

                                            <Col md="6" lg="6" sm="12">
                                                <Label >
                                                    Categoria Del Producto
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
                                                        value={productInput.id_category}>
                                                        <option key={1} value="true">Select Category</option>
                                                        {
                                                            categorylist.map((item) => {
                                                                return (
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

                                        <Row>
                                            <Col md="6" lg="6" sm="12">
                                                <Label >
                                                    Precio Del Producto
                                                </Label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="basic-addon">
                                                            <i className="fa fa-money prefix"></i>
                                                        </span>
                                                    </div>

                                                    <NumberFormat
                                                        thousandsGroupStyle="thousand"
                                                        className="form-control"
                                                        name="price_product"
                                                        placeholder="Ingrese precio"
                                                        prefix="$"
                                                        decimalSeparator="."
                                                        displayType="input"
                                                        type="text"
                                                        maxLength="16"
                                                        thousandSeparator={true}
                                                        allowNegative={true}
                                                        decimalScale={2}
                                                        fixedDecimalScale={true}
                                                        onChange={handleInput}
                                                        value={productInput.price_product}

                                                    />
                                                </div>
                                                <small className="text-danger">{errorlist.price_product}</small>


                                            </Col>
                                            <Col md="6" lg="6" sm="12">
                                                <Label >
                                                    Precio de Descuento
                                                </Label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="basic-addon">
                                                            <i className="fa fa-percent prefix"></i>
                                                        </span>
                                                    </div>

                                                    <NumberFormat
                                                        thousandsGroupStyle="thousand"
                                                        className="form-control"
                                                        name="discount_price"
                                                        placeholder="Ingrese descuento"
                                                        prefix="$"
                                                        decimalSeparator="."
                                                        displayType="input"
                                                        type="text"
                                                        thousandSeparator={true}
                                                        maxLength="16"
                                                        allowNegative={true}
                                                        decimalScale={2}
                                                        fixedDecimalScale={true}
                                                        onChange={handleInput}
                                                        value={productInput.discount_price} />
                                                </div>
                                                <small className="text-danger">{errorlist.discount_price}</small>
                                            </Col>

                                        </Row>

                                        <br />

                                        <Row>

                                            <Col md="12" lg="12" sm="12">
                                                <Label >
                                                    Descripción Del Producto
                                                </Label>
                                                <textarea
                                                    className="form-control input-bordered"
                                                    name="description_product"
                                                    type="textarea"
                                                    rows="3"
                                                    cols="3"
                                                    maxLength="512"
                                                    placeholder="Ingrese descripcion"
                                                    onChange={handleInput}
                                                    value={productInput.description_product}
                                                ></textarea>

                                                <small className="text-danger">{errorlist.description_product}</small>

                                            </Col>

                                        </Row>
                                        <br />
                                        <Row>
                                            <Col md="6" lg="6" sm="12">
                                                <Label >
                                                    Titulo Del Producto
                                                </Label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="basic-addon">
                                                            <i className="fa fa-pencil-square-o prefix"></i>
                                                        </span>
                                                    </div>
                                                    <input className="form-control"
                                                        name="meta_title"
                                                        type="text"
                                                        placeholder=" Ingrese nombre"
                                                        aria-describedby="basic-addon"
                                                        onChange={handleInput}
                                                        value={productInput.meta_title} />
                                                </div>
                                                <small className="text-danger">{errorlist.meta_title}</small>


                                            </Col>

                                            <Col md="6" lg="6" sm="12">
                                                <Label >
                                                    Palabras Claves Del Producto
                                                </Label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="basic-addon">
                                                            <i className="fa fa-key prefix"></i>
                                                        </span>
                                                    </div>
                                                    <input className="form-control"
                                                        name="meta_keyword"
                                                        type="text"
                                                        placeholder=" Ingrese palabras"
                                                        aria-describedby="basic-addon"
                                                        onChange={handleInput}
                                                        value={productInput.meta_keyword} />
                                                </div>
                                                <small className="text-danger">{errorlist.meta_keyword}</small>


                                            </Col>

                                        </Row>

                                        <br></br>

                                        <Row>
                                            <Col md="6" lg="6" sm="12">
                                                <Label >
                                                    Imagen Principal Del Producto
                                                </Label>
                                                <input
                                                    className="form-control center input-bordered"
                                                    name="image1"
                                                    id="validationCustom01"
                                                    type="file"
                                                    onChange={handleImage}
                                                ></input>
                                                <div className="card-body text-right">
                                                    <img src={`https://desolate-bayou-69148.herokuapp.com/${productInput.image1}`} width="100px" alt={productInput.name_product} />
                                                </div>
                                                <small className="text-danger">{errorlist.image1}</small>
                                            </Col>

                                            <Col md="6" lg="6" sm="12">
                                                <Label >
                                                    Imagen Del Producto
                                                </Label>
                                                <input
                                                    className="form-control center input-bordered"
                                                    name="image2"
                                                    id="validationCustom01"
                                                    type="file"
                                                    onChange={handleImage2}
                                                ></input>
                                                <div className="card-body text-right">
                                                    <img src={`https://desolate-bayou-69148.herokuapp.com/${productInput.image2}`} width="100px" alt={productInput.name_product} />
                                                </div>
                                                <small className="text-danger">{errorlist.image2}</small>
                                            </Col>


                                        </Row>
                                        <br></br>
                                        <Row>

                                            <Col md="6" lg="6" sm="12">
                                                <Label >
                                                    Imagen Del Producto
                                                </Label>
                                                <input
                                                    className="form-control center input-bordered"
                                                    name="image3"
                                                    id="validationCustom01"
                                                    type="file"
                                                    onChange={handleImage3}
                                                ></input>
                                                <div className="card-body text-right">
                                                    <img src={`https://desolate-bayou-69148.herokuapp.com/${productInput.image3}`} width="100px" alt={productInput.name_product} />
                                                </div>
                                                <small className="text-danger">{errorlist.image3}</small>
                                            </Col>

                                            <Col md="6" lg="6" sm="12">
                                                <Label >
                                                    Imagen Del Producto
                                                </Label>
                                                <input
                                                    className="form-control center input-bordered"
                                                    name="image4"
                                                    id="validationCustom01"
                                                    type="file"
                                                    onChange={handleImage4}
                                                ></input>
                                                <div className="card-body text-right">
                                                    <img src={`https://desolate-bayou-69148.herokuapp.com/${productInput.image4}`} width="100px" alt={productInput.name_product} />
                                                </div>
                                                <small className="text-danger">{errorlist.image4}</small>

                                            </Col>


                                        </Row>
                                        <br></br>

                                        <br></br>

                                        <Row>

                                            <Col md="12" lg="12" sm="12">
                                                <Label >
                                                    Detalles Del Producto
                                                </Label>
                                                <textarea
                                                    className="form-control input-bordered"
                                                    name="meta_description"
                                                    type="textarea"
                                                    rows="3"
                                                    maxLength="50"
                                                    placeholder="Ingrese descripcion"
                                                    onChange={handleInput}
                                                    value={productInput.meta_description}
                                                ></textarea>
                                                <small className="text-danger">{errorlist.meta_description}</small>


                                            </Col>

                                        </Row>

                                        <br />

                                        <br />
                                        <div className="offset-xl-5 offset-sm-4">
                                            <Button className="btn btn-solid" type="submit"
                                            >
                                                Actualizar
                                            </Button>

                                        </div>
                                    </Form>
                                </CardBody>
                            </Card>

                        </Col>
                    </TabPane>
                </Col>
            </Row >
        </section>
    )
}

export default UpdateProduct;