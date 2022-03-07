import React, { useState } from "react";
import HeaderOne from "../../../../../components/headers/header-one";
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "reactstrap";
import CommonLayout from "../../../../../components/shop/common-layout";
import Helmet from "react-helmet";
import favicon from "../../../../../assets/images/favicon/1.png";
import MasterFooter from "../../../../../components/footers/common/MasterFooter";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_es from "../../../../../pages/lang/es/global.json";
import global_en from "../../../../../pages/lang/en/global.json";
import { Table } from "reactstrap";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    }
  }
});

//import 'bootstrap/dist/css/bootstrap.min.css';

const SearchProduct = () => {

    const [data, setData]=useState([])

    async function search(key){
        console.warn(key)

        let result = await fetch("http://localhost:8000/api/search/"+key);
        result=await result.json();
        setData(result)
    }

    var showProductList = "";

      showProductList =
        data.map((item, idx) => {
          return (
            <Link to={`/collections/${item.subcategory.slug}/${item.id}`}>
           
             {/* <div className="col-md-4" key={idx}>*/}
              <Row key={idx}>
              <Col xs={12} md={12}>
              
              <div className="collection-banner">
                <img src={`http://localhost:8000/${item.image1}`} className="image-fluid" alt={item.name_product} />
                </div>
                <div className="card-body">
                <div style={{ color: '#000' }} >

                  <h4>{item.name_product}</h4>
                  </div>

                  <h5 className="text-product">
                    {item.price_product}
                  </h5>
                </div>

              {/*</div>*/}
              
              </Col>
              </Row>
             
            </Link>


          )
        });

  return (
    <>
    <I18nextProvider i18n={i18next}>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href={favicon ? favicon : ""} />
      </Helmet>
      
      <CommonLayout parent="Inicio" title="Buscar">
      <div className="col-sm-6 offset-sm-3 button-tp">
          <input type="text" onChange={(e)=> search(e.target.value)} className="form-control btn-search-new" placeholder="Buscar"></input>
          </div>

          <Container className="col-md-12 button-mrg button-tp">
          <Row>
             
              {showProductList}
             
              </Row>
          </Container>


          </CommonLayout>
      </I18nextProvider>
    </>
  );
};

export default SearchProduct;