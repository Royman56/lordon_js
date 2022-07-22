import React, { Fragment, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from "reactstrap";
import Slider from "react-slick";
import { Slider2 } from "../../../../../services/script";
import axios from 'axios';
import ReactGa from 'react-ga';
import { useTranslation } from "react-i18next";

const ViewCategory = ({ sectionClass, title, inner, hrClass }) => {
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState([]);
  const [t, i18n] = useTranslation("global");
  const ClickHandler = () => {
    ReactGa.event({
      category: 'Categoria',
      action: 'Click'
    })
  }
  useEffect(() => {
    let isMountered = true;

    axios.get(`/api/getCategory`).then(res => {
      if (isMountered) {

        if (res.data.status === 200) {
          setCategory(res.data.category);
          setLoading(false);
        }
      }
    });
    return () => {
      isMountered = false;
    }
  },[]);

  if (loading) {

    return <Container className="col-md-2">
      <Row><h4 className="button-center h4-search">{t("view-category.category0")} </h4>
      </Row>
    </Container>

  } else {
    var showCategoryList = '';
    showCategoryList =
      category.map((item, idx) => {
        return (

          <div className="col-md-6" key={idx}>
            <Link to={`/viewfullcategory/${item.slug}`}>

              <div className="collection-banner">
                <img src={`https://desolate-bayou-69148.herokuapp.com/${item.image}`} className="image-fluid img-round" style={{ maxWidth: '30rem' }} alt={item.image} />
                <br></br>
                <div className="blog-details" onClick={ClickHandler}>

                  <h3 className="h3-definity text-blue-three">{item.name}</h3>
                  <br></br>

                </div>

              </div>


            </Link>
          </div>


        )
      });
  }
  return (
    <Fragment>
      <section className="bg-body">
        <Container>
          <Row>
            <Col md="12">
              <div className={title}>
                <h2 className="text-center text-blue-three">{t("view-category.category2")}</h2>
                {hrClass ? (
                  <hr role="tournament6"></hr>
                ) : (
                  <div className="line">
                    <span></span>
                  </div>
                )}
              </div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <Slider {...Slider2} className="slide-2 slick-arrow text-center">
                {showCategoryList}
              </Slider>

            </Col>
          </Row>
          <br></br>
          <Row>
            <Col lg="6" className="m-auto">
              <div className="product-para">
                <Link to='/viewfullcategory/'>
                  <Button className="btn btn-solid button-center" type="submit"
                  >
                    {t("view-category.category4")}
                  </Button>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col md="12">
              <div className={title}>
                <h2 className="text-center text-red-second">{t("view-category.category5")}</h2>
                <h2 className="text-center text-red-second">{t("view-category.category55")}</h2>

                {hrClass ? (
                  <hr role="tournament6"></hr>
                ) : (
                  <div className="line">
                    <span></span>
                  </div>
                )}
              </div>
              <br></br>
              <Row>
                <Col lg="12" className="m-auto">
                  <div className="product-para">
                    <p className="text-center">
                      <span className="text-blue">{t("view-category.category6")}</span>
                      <span className="text-blue">{t("view-category.category66")}</span>
                      <span className="text-blue">{t("view-category.category667")}</span></p>
                    <p className="text-center">
                      <span className="text-blue">{t("view-category.category7")}</span>
                      <span className="text-blue">{t("view-category.category77")}</span>
                      <span className="text-blue">{t("view-category.category777")}</span>
                      <span className="text-blue">{t("view-category.category7777")}</span>
                      <span className="text-blue">{t("view-category.category77777")}</span>
                      <span className="text-center text-blue">{t("view-category.category78")}</span></p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

        </Container>
        <br/>
        <br/>
      </section>
    </Fragment>



  );
};

export default ViewCategory;
