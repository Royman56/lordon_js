import React, { useState, useEffect } from 'react';
import { SCHEMA_ADD_MARKET } from '../../../../../helpers/validators/SchemaAddMarket'
import HeaderTwo from '../../../../../components/headers/header-two';
import swal from 'sweetalert';
import {
    Col,
    Form,
    Card,
    CardBody,
    Label,
    Container,
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
import { useHistory } from 'react-router';


const UpdateCategory = (props) => {

    const [activeTab, setActiveTab] = useState("1");
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  }

    const [loading, setLoading] = useState(true);

    const [pricture, setPicture] = useState([]);

    const history = useHistory();
    const [categoryInput, setCategory] = useState([]);
    const [error, setError] = useState([]);

    const handleImage = (e) => {
        e.persist();
        setPicture({image: e.target.files[0] });

    }
       

        useEffect(() => {
            const category_id = props.match.params.id;
            axios.get(`/api/edit-category/${category_id}`).then(res => {

                if(res.data.status === 200)
                {
                    setCategory(res.data.category);
                }
                else if(res.data.status === 404)
                {
                    swal("Error",res.data.message,"error");
                    history.push('/dashboard')
                }

                setLoading(false);

            });

        }, [props.match.params.id, history]);

        const handleInput = (e) => {
            e.persist();
            setCategory({...categoryInput, [e.target.name]: e.target.value})

        }

        const updateCategory = (e) => {
            e.preventDefault();
            const category_id = props.match.params.id;
            const formData = new FormData(); 
                formData.append('image', pricture.image);
                formData.append('slug', categoryInput.slug);
                formData.append('name', categoryInput.name);
                formData.append('description', categoryInput.description);
                formData.append('status', categoryInput.status);
            
      
            axios.post(`/api/update-category/${category_id}`, formData).then(res => {
                if(res.data.status === 200)
                {
                    swal("Categoria Editada","","success");
                    history.push('/dashboard')
                }else if (res.data.status === 422) {
                    swal("Todos Los Campos Son Obligatorios","","error");
                    setError(res.data.errors);
                }else if(res.data.status === 404) {
                    swal("Error",res.data.message,"error");
                    history.push('category/CategoryList')
                }
    
            });

        }

        if (loading) {

            return <Container className="col-md-2">
            <Row><h4 className='button-center'>Cargando Categoría...</h4>
            </Row>
    </Container>
       
            
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
                    Editar Categoria
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
                            <h3>Editar Categoria</h3>
                        </div>
                    </CardBody>
                    <CardBody>

                        <Form onSubmit={updateCategory} encType="multipart/form-data">
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
                                            placeholder="Ingrese nombre"
                                        ></input>
                                    </div>

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
                   
                                </Col>


                            </Row>
                            <br />
                            <Row>

                            <Col md="6" lg="6" sm="12">
                                    <Label >
                                        Imagen De La Categoría 
                                    </Label>
                                    <input
                                        className="form-control center input-bordered"
                                        name="image"
                                        id="validationCustom01"
                                        type="file"
                                        onChange={handleImage}
                                    ></input>
                                    <div className="card-body text-right">
                                    <img src={`http://localhost:8000/${categoryInput.image}`} width="100px" alt={categoryInput.name}/>
                                    </div>
                                
                                </Col>

                                <Col md="6" lg="6" sm="12">
                                    <Label >
                                        Descripción De La Categoría
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
                                </Col>

                            </Row>
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
        </Row>
        </section>
    )

}

export default UpdateCategory;