import React, { useState } from "react";
import HeaderOne from "../../../../../components/headers/header-one";
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "reactstrap";
import CommonLayout from "../../../../../components/shop/common-layout";
import Helmet from "react-helmet";
import favicon from "../../../../../assets/images/favicon/1.png";
import MasterFooter from "../../../../../components/footers/common/MasterFooter";
import { useTranslation } from "react-i18next";
import { Table } from "reactstrap";

//import 'bootstrap/dist/css/bootstrap.min.css';

const SearchProduct = () => {

    const [data, setData]=useState([]);
    const [t, i18n] = useTranslation("global");

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
            <div className="col-md-6" key={idx}>
            <Link to={`/collections/${item.subcategory.slug}/${item.id}`}>
           
              <div className="collection-banner">
              <Container className="col-md-6">
                      <Row>
                <img src={`http://localhost:8000/${item.image1}`} className="image-fluid  img-round" alt={item.name_product} />
                </Row>
                    </Container>
                </div>
                <div className="blog-details">
                <div style={{ color: '#000' }} >

                  <h4>{item.name_product}</h4>
                  </div>

                  <h5 className="text-product">
                    {item.price_product}
                  </h5>
                </div>

              {/*</div>*/}
              
              </Link>
              </div>


          )
        });

  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href={favicon ? favicon : ""} />
      </Helmet>
      
      <CommonLayout parent={t("header-one.menu1")} title={t("header-one.menu5")}>
      <div className="col-sm-6 offset-sm-3 button-tp">
          <input type="text" onChange={(e)=> search(e.target.value)} className="form-control btn-search-new" placeholder={t("header-one.menu5")}></input>
          </div>

          <Container className="col-md-12 button-mrg button-tp">
          <Row>
             
              {showProductList}
             
              </Row>
          </Container>


          </CommonLayout>
    </>
  );
};

export default SearchProduct;