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
  });

  if (loading) {

    return <Container className="col-md-2">
      <Row><h4 className="button-center">Cargando Categorias...</h4>
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
                <img src={`http://localhost:8000/${item.image}`} className="image-fluid img-round" style={{ maxWidth: '30rem' }} alt={item.image} />
                <div className="blog-details" onClick={ClickHandler}>

                  <h4>{item.name}</h4>
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
      <section className={sectionClass}>
        <Container>
          <Row>
            <Col md="12">
              <div className={title}>
                <h2 className="text-center text-red">{t("view-category.category5")}</h2>
                {hrClass ? (
                  <hr role="tournament6"></hr>
                ) : (
                  <div className="line">
                    <span></span>
                  </div>
                )}
              </div>
              <Row>
                <Col lg="12" className="m-auto">
                  <div className="product-para">
                    <p className="text-blue">{t("view-category.category6")}</p>
                    <p className="text-blue">{t("view-category.category7")}</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

        </Container>
        <Container>
          <Row>
            <Col md="12">
              <div className={title}>
                <h4 className="text-center text-red">{t("view-category.category1")}</h4>
                <h2 className="text-center text-red">{t("view-category.category2")}</h2>
                {hrClass ? (
                  <hr role="tournament6"></hr>
                ) : (
                  <div className="line">
                    <span></span>
                  </div>
                )}
              </div>
              <Slider {...Slider2} className="slide-2 slick-arrow text-center">
                {showCategoryList}
              </Slider>

            </Col>
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row>
            <Col lg="6" className="m-auto">
              <div className="product-para">
                <Link to='/viewfullcategory/'>
                  <Button className="btn btn-solid button-center" type="submit"
                  >
                    {t("view-category.category4")}
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>



  );
};

export default ViewCategory;
