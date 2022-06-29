import React, { Fragment, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "reactstrap";
import axios from 'axios';
import swal from 'sweetalert';
import { useHistory } from 'react-router';
import CommonLayout from "../../../../../components/shop/common-layout";
import ReactGa from 'react-ga';
import { useTranslation } from "react-i18next";
import HeaderOne from "../../../../../components/headers/header-one";
import Banner from "../../../../layouts/Fashion/Components/Banner";
import Helmet from "react-helmet";
import favicon from "../../../../../assets/images/favicon/1.png";
import TopCollection from "../../../../../components/common/Collections/Collection3";
import MasterFooter from "../../../../../components/footers/common/MasterFooter";

const ViewFullCategory = ({ sectionClass, title, inner, hrClass }) => {
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
      <Row><h4 className="button-center">{t("view-category.category0")}</h4>
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
                <Container className="col-md-6">
                  <Row>
                    <img src={`https://desolate-bayou-69148.herokuapp.com/${item.image}`} className="image-fluid img-round" alt={item.image} />
                  </Row>
                </Container>
                <br></br>
                <div className="blog-details" onClick={ClickHandler}>

                  <h3 className="h3-definity">{item.name}</h3>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>

                </div>

              </div>


            </Link>
          </div>


        )
      });
  }

  return (
    <>

      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href={favicon ? favicon : ""} />
      </Helmet>

      <HeaderOne logoName={"logo.png"} topClass="top-header"></HeaderOne>

      <Banner></Banner>
        <Fragment >
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

            </Col>
          </Row>
          
        </Container>
      
      <br></br>
      <br></br>
      <br></br>
      <br></br>
          {/*collection banner*/}

          <Container className="col-md-12">
            <Row>

              {showCategoryList}

            </Row>
          </Container>


          {/*collection banner end*/}
          </section>
        </Fragment>

        <MasterFooter footerClass={`footer-light`}
        footerLayOut={"light-layout upper-footer"}
        footerSection={"small-section border-section border-top-0"}
        belowSection={"section-b-space light-layout"}
        newLatter={true}
        logoName={"logo.png"}></MasterFooter>
   
    </>
  );
};

export default ViewFullCategory;