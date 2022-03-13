import React, { useState } from "react";
import AddProduct from '../common/products/AddProduct';
import {
  Row,
  Col,
  Media,
  Card,
  CardBody,
  NavItem,
  NavLink,
  TabContent,
  Nav,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  TabPane,
  Button,
} from "reactstrap";
import seventeen from "../../../../assets/images/logos/17.png";
import ProductList from "./products/ProductList";
import CategoryList from "./category/CategoryList";
import SubCategoryList from "./sub-category/SubCategoryList";
import DashboardDetails from "./dashboard/DashboardDetails";
import UserProfile from "./profile/UserProfile";
import SettingProfile from "./setting/SettingProfile";
import { GlobalLogout } from '../../../../helpers/sesion/localSesionStore'
import { useRouter } from "next/router"
import swal from 'sweetalert';
import { useHistory } from 'react-router';
import axios from 'axios';

const Dashboard = () => {
  const history = useHistory();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("1");
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  }

  const logoutSubmit = (e) => {
    e.preventDefault();

axios.post(`/api/logout`).then(res=> {

if (res.data.status === 200) {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_name');
    swal("Has Cerrado Sesión","","success");
    history.push('/home/')

} else if(res.data.status === 401){
    swal("Alerta","","warning");
}

/*else{
    setLogin({...loginInput, error_list: res.data.validation_errors})
}*/

});

}

  return (
    <section className="dashboard-section section-d-space">
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
                    Dashboard
                  </NavLink>
                </NavItem>
                <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                  <NavLink
                    className={activeTab === "2" ? "active" : ""}
                    onClick={() => setActiveTab("2")}
                  >
                    Productos
                  </NavLink>
                </NavItem>
                <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                  <NavLink
                    className={activeTab === "3" ? "active" : ""}
                    onClick={() => setActiveTab("3")}
                  >
                    Categorias
                  </NavLink>
                </NavItem>
                <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                  <NavLink
                    className={activeTab === "9" ? "active" : ""}
                    onClick={() => setActiveTab("9")}
                  >
                    Sub Categorias
                  </NavLink>
                </NavItem>
                <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                  <NavLink
                    className={activeTab === "6" ? "active" : ""}
                    onClick={toggle}
                  >
                    Salir
                  </NavLink>
                </NavItem>


              </Nav>
            </div>
          </div>
        </Col>
        <Col lg="9">
          <div className="faq-content">
            <TabContent activeTab={activeTab} >
              <TabPane tabId="1">
                <DashboardDetails />
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col sm="12">
                    <Card className="dashboard-table mt-0" id="results">
                      <CardBody>
                        <div className="top-sec">
                          <h3>Productos de la Tienda</h3>
                    
                          <a href="/addproduct" className="btn btn-sm btn-solid">
                            Agregar Producto
                          </a>
                       

                        </div>
                        <div className="clearfix"></div>
                        <div id="basicScenario" className="product-physical">
                          <ProductList />
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="3">
                <Row>
                  <Col sm="12">
                    <Card className="dashboard-table mt-0">
                      <CardBody>
                        <div className="top-sec">
                          <h3>Categorias De La Tienda</h3>
                          <a href="/addcategory/" className="btn btn-sm btn-solid">
                            Agregar Categoria
                          </a>
                        </div>
                        <CategoryList />
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="9">
                <Row>
                  <Col sm="12">
                    <Card className="dashboard-table mt-0">
                      <CardBody>
                        <div className="top-sec">
                          <h3>Sub Categorias De La Tienda</h3>
                          <a href="/addsubcategory/" className="btn btn-sm btn-solid">
                            Agregar Sub Categoria
                          </a>
                        </div>
                        <SubCategoryList />
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="4">
                <UserProfile />
              </TabPane>
              <TabPane tabId="5">
                <SettingProfile />
              </TabPane>
              <TabPane tabId="8">
                <AddProduct />
              </TabPane>
            </TabContent>

            <Modal isOpen={modal} toggle={toggle} centered>
              <ModalHeader toggle={toggle}>Cerrar</ModalHeader>
              <ModalBody className="p-4">¿Quieres salir?</ModalBody>
              <ModalFooter>
                <Button
                  className="btn-solid btn-custom"
                  color="secondary"
                  onClick={logoutSubmit}
                >
                  Si
                </Button>
                <Button
                  className="btn-solid btn-custom"
                  color="secondary"
                  onClick={toggle}
                >
                  No
                </Button>
              </ModalFooter>
            </Modal>

          </div>
        </Col>
      </Row>

    </section>
  );
};


export default Dashboard;
