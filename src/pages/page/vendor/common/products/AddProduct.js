import React, { useEffect, useState } from 'react';
import NumberFormat from "react-number-format";
//import 'font-awesome/css/font-awesome.min.css';
import HeaderTwo from '../../../../../components/headers/header-two';
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
import swal from 'sweetalert';
import seventeen from "../../../../../assets/images/logos/17.png";
import { useHistory } from 'react-router';

const AddProduct = () => {

    const [activeTab, setActiveTab] = useState("1");
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  }
  const history = useHistory();

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

    const [pricture, setPicture] = useState([]);
    const [pricture2, setPicture2] = useState([]);
    const [pricture3, setPicture3] = useState([]);
    const [pricture4, setPicture4] = useState([]);
    const [errorlist, setError] = useState([]);

    const handleInput = (e) => {
        e.persist();
        setProduct({...productInput, [e.target.name]: e.target.value});

    }

    const handleImage = (e) => {
        e.persist();
        setPicture({image1: e.target.files[0] });
      
  

    }

    const handleImage2 = (e) => {
        e.persist();
        setPicture2({image2: e.target.files[0] });

  

    }

    const handleImage3 = (e) => {
        e.persist();
        setPicture3({image3: e.target.files[0] });

  

    }

    const handleImage4 = (e) => {
        e.persist();
        setPicture4({image4: e.target.files[0] });
  

    }




    useEffect(() => {
        axios.get(`/api/all-category`).then(res => {
            if(res.status === 200)
            {
                setCategorylist(res.data.category);
            }
        });
        
    }, []);

    const submitProduct = (e) => {
        e.preventDefault();

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
         

        axios.post(`/api/store-product`, formData).then(res=> {

            if(res.data.status === 200)
            {
                swal("Producto Creado","","success");
                history.push('/dashboard')
                setProduct({...productInput,
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
                setError([]);
            }
            else if(res.data.status === 422)
            {
                
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
                    Agregar Producto
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
                            <h3>Añadir Producto</h3>
                        </div>
                    </CardBody>
                    <CardBody>

                                    <Form onSubmit={submitProduct} encType="multipart/form-data">
                                        <Row>
                                            <Col md="6" lg="6" sm="12">
                                                <Label >
                                                    Nombre
                                                </Label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="basic-addon">
                                                            <i className="fa fa-user prefix"></i>
                                                        </span>
                                                    </div>
                                                    <input className="form-control"
                                                        name="name_product"
                                                        type="text"
                                                        placeholder=" Ingrese nombre"
                                                        aria-describedby="basic-addon" 
                                                        onChange={handleInput}
                                                        value={productInput.name_product}/>
                                                </div>
                                                <small className="text-danger">{errorlist.name_product}</small>
                                               

                                            </Col>

                                            <Col md="6" lg="6" sm="12">
                                                <Label >
                                                    Categoria
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

                                        <Row>
                                        <Col md="6" lg="6" sm="12">
                                                <Label >
                                                    Precio
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
                                                    Descripcion Del Producto
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
                                                Título
                                                </Label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="basic-addon">
                                                            <i className="fa fa-user prefix"></i>
                                                        </span>
                                                    </div>
                                                    <input className="form-control"
                                                        name="meta_title"
                                                        type="text"
                                                        placeholder=" Ingrese título"
                                                        aria-describedby="basic-addon"
                                                        onChange={handleInput}
                                                        value={productInput.meta_title} />
                                                </div>
                                                <small className="text-danger">{errorlist.meta_title}</small>
                                       

                                            </Col>

                                            <Col md="6" lg="6" sm="12">
                                                <Label >
                                                    Palabras Claves
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
                                    <small className="text-danger">{errorlist.image4}</small>
                                </Col>


                            </Row>
                            

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
                                                Añadir
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

export default AddProduct