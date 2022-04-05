import React, { useRef, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import {
  Row, Col, Container, Media, TabContent,
  TabPane, Nav,
  NavItem,
  NavLink,
  Button
} from "reactstrap";
import axios from 'axios';
import swal from 'sweetalert';
import { useHistory } from 'react-router';
import MasterSocial from "../../../../product-details/common/master_social";
import ImageZoom from "../../../../product-details/common/image-zoom";
import Service from "../../../../product-details/common/service";
import CommonLayout from "../../../../../components/shop/common-layout";
import Slider from "react-slick";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useTranslation } from "react-i18next";

const DetailProduct = (props) => {
  const [state, setState] = useState({ nav1: null, nav2: null });
  const slider1 = useRef();
  const slider2 = useRef();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const history = useHistory();
  const [activeTab, setActiveTab] = useState("1");
  const [t, i18n] = useTranslation("global");
  var products = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    fade: true,
  };
  var productsnav = {
    slidesToShow: 3,
    swipeToSlide: true,
    arrows: false,
    dots: false,
    focusOnSelect: true,
  };
  const { nav1, nav2 } = state;
  useEffect(() => {
    setState({
      nav1: slider1.current,
      nav2: slider2.current,
    });
    let isMounted = true;
    const category_slug = props.match.params.category;
    const product_slug = props.match.params.product;

    axios.get(`/api/viewproductdetail/${category_slug}/${product_slug}`).then(res => {
      if (isMounted) {

        if (res.data.status === 200) {
          setProduct(res.data.product);
          setLoading(false);

        } else if (res.data.status === 400) {

          swal("Error", res.data.message, "");

        }
        else if (res.data.status === 404) {

          history.push('/collections');
          swal("Alerta", res.data.message, "error");

        }
      }
    });
    return () => {
      isMounted = false;
    }
  }, [props.match.params.category, props.match.params.product, history]);

  if (loading) {

    return <Container className="col-md-2">
      <Row><h4 className="button-center">{t("view-category.category10")}</h4>
      </Row>
    </Container>

  } else {

  }
  return (
    <CommonLayout parent={t("view-category.category9")} title={product.name_product}>
      <>
        <div className="collection-wrapper">
          <Container>
            <Row>
              <Col lg="9" sm="12" xs="12">
                <div className="container-fluid">
                  <Row>
                    <Col xl="12">
                    </Col>
                  </Row>

                  <Row>
                    <Col lg="6" className="product-thumbnail">
                      <Carousel >
                        <div className="image">
                          <img src={`https://desolate-bayou-69148.herokuapp.com/${product.image1}`} className="image-fluid" style={{ maxWidth: '30rem' }} alt={product.name_product} />
                        </div>

                        <div className="image">
                          <img src={`https://desolate-bayou-69148.herokuapp.com/${product.image2}`} className="image-fluid" style={{ maxWidth: '30rem' }} alt={product.name_product} />
                        </div>

                        <div className="image">
                          <img src={`https://desolate-bayou-69148.herokuapp.com/${product.image3}`} className="image-fluid" style={{ maxWidth: '30rem' }} alt={product.name_product} />
                        </div>

                        <div className="image">
                          <img src={`https://desolate-bayou-69148.herokuapp.com/${product.image4}`} className="image-fluid" style={{ maxWidth: '30rem' }} alt={product.name_product} />
                        </div>

                      </Carousel>
                    </Col>
                    <Col lg="6" className="rtl-text">
                      <div className={`product-right`}>
                        <h2> {product.name_product} </h2>
                        <h4>
                          <del>
                            {product.discount_price}


                          </del>
                        </h4>
                        <h3>
                          {product.price_product}
                        </h3>



                        <div className="border-product">
                          <h6 className="product-title">{t("business.business12")}</h6>
                          <p>{product.meta_description}</p>
                        </div>

                        <div className="border-product">
                          <Link to='/contact/'>
                            <Button className="btn btn-solid text-center" type="submit"
                            >
                              {t("business.business11")} 
                            </Button>
                          </Link>
                        </div>

                      </div>
                    </Col>
                  </Row>

                </div>
                <section className="tab-product m-0">
                  <Container>
                    <Row>
                      <Col sm="12" lg="12">
                        <Row className="product-page-main m-0">
                          <Nav tabs className="nav-material">
                            <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                              <NavLink
                                className={activeTab === "1" ? "active" : ""}
                                onClick={() => setActiveTab("1")}
                              >
                                {t("business.business13")} 
                              </NavLink>
                            </NavItem>

                          </Nav>
                          <TabContent activeTab={activeTab} className="nav-material">
                            <TabPane tabId="1">
                            
                                  <h5 className="parrafo space-btm">

                                    {product.description_product}

                                  </h5>

                            </TabPane>

                          </TabContent>
                        </Row>
                      </Col>
                    </Row>
                  </Container>
                </section>

              </Col>

              <Col sm="3" className="collection-filter">
                <Service />

              </Col>
            </Row>
          </Container>
        </div>

      </>
    </CommonLayout>


  );
};

export default DetailProduct;