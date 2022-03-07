import React, { Fragment, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "reactstrap";
import axios from 'axios';
import swal from 'sweetalert';
import { useHistory } from 'react-router';
import CommonLayout from "../../../../../components/shop/common-layout";
import Sad from "../../../../../assets/images/sad.png";
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

const LinkFullCategory = (props) => {
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubCategory] = useState([]);
  const subcategoryCount = subcategory.length;
  const history = useHistory();
  
  const ClickHandler = () =>{
    ReactGa.event({
      category: 'Producto',
      action: 'Click'
    })
  }
  useEffect(() => {
    let isMounted = true;
    const subcategory_slug = props.match.params.slug;

    axios.get(`/api/fetchcategory/${subcategory_slug}`).then(res => {
      if (isMounted) {

        if (res.data.status === 200) {
          setSubCategory(res.data.subcategory_data.subcategory);
          setCategory(res.data.subcategory_data.category);
          setLoading(false);

        } else if (res.data.status === 400) {

          swal("Error", res.data.message, "");

        }
        else if (res.data.status === 404) {

          history.push('/collections');
          swal("Error", "", "error");

        }
      }
    });
    return () => {
      isMounted = false;
    }
  }, [props.match.params.slug, history]);

  if (loading) {

    return <Container className="col-md-2">
    <Row><h4 className="button-center">Cargando Sub Categorias...</h4>
    </Row>
          </Container>

  } else {
    var showSubCategoryList = "";
    if (subcategoryCount) {


      showSubCategoryList =
        subcategory.map((item, idx) => {
          return (
            <Link to={`/collections/${item.slug}`}>
           
             {/* <div className="col-md-4" key={idx}>*/}
              <Row key={idx} className="button-tp button-mrg">
              <Col xs={12} md={12}>
              
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
              
              </Col>
              </Row>
             
            </Link>


          )
        });
    }
    else {
      showSubCategoryList =
      <Container className="col-md-4">
          <Row>
      <h4 className="button-center">Ningúna Sub Categoria Para Mostrar En {category.name}</h4>
          <img className="button-center" src={Sad} alt="sad"/>
          </Row>
          </Container>   
          
    
    }
  }
  return (
    <I18nextProvider i18n={i18next}>
    <CommonLayout parent="collections" title={category.name}>
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

export default LinkFullCategory;