import React, { Fragment, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Container, Row } from "reactstrap";
import axios from 'axios';
import CommonLayout from "../../../../../components/shop/common-layout";
import ReactGa from 'react-ga';
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_es from "../../../../../pages/lang/es/global.json";
import global_en from "../../../../../pages/lang/en/global.json";

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

const ViewSubCategory = () => {
  const [loading, setLoading] = useState(true);
  const [subcategory, setSubCategory] = useState([]);
  const ClickHandler = () => {
    ReactGa.event({
      category: 'Categoria',
      action: 'Click'
    })
  }
  useEffect(() => {
    let isMountered = true;

    axios.get(`/api/getSubCategory`).then(res => {
      if (isMountered) {

        if (res.data.status === 200) {
          setSubCategory(res.data.subcategory);
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
      <Row><h4 className="button-center">Cargando Sub Categorias...</h4>
      </Row>
    </Container>

  } else {
    var showSubCategoryList = '';
    showSubCategoryList =
      subcategory.map((item, idx) => {
        return (

          <div className="col-md-6 button-tp button-mrg" key={idx}>
            <Link to={`/collections/${item.slug}`}>
           
                <div className="collection-banner">
                  <Container className="col-md-6">
                    <Row>
                      <img src={`http://localhost:8000/${item.image}`} className="image-fluid img-round" alt={item.image} />
                    </Row>
                  </Container>
                  <div className="blog-details" onClick={ClickHandler}>

                    <h4>{item.name}</h4>

                  </div>

                </div>

             
            </Link>
          </div>


        )
      });
  }

  return (
    <I18nextProvider i18n={i18next}>
    <CommonLayout parent="collections" title="sub categorias">
      <Fragment >
        {/*collection banner*/}

        <Container className="col-md-12">
          <Row>

            {showSubCategoryList}

          </Row>
        </Container>


        {/*collection banner end*/}
      </Fragment>
    </CommonLayout>
    </I18nextProvider>
  );
};

export default ViewSubCategory;