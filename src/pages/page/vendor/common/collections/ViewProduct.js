import React, { Fragment, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "reactstrap";
import axios from 'axios';
import swal from 'sweetalert';
import { useHistory } from 'react-router';
import CommonLayout from "../../../../../components/shop/common-layout";
import Sad from "../../../../../assets/images/sad.png";
import ReactGa from 'react-ga';
import { useTranslation } from "react-i18next";

const ViewProduct = (props) => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const [subcategory, setSubCategory] = useState([]);
  const productCount = product.length;
  const history = useHistory();
  const [t, i18n] = useTranslation("global");

  const ClickHandler = () => {
    ReactGa.event({
      category: 'Producto',
      action: 'Click'
    })
  }
  useEffect(() => {
    let isMounted = true;
    const product_slug = props.match.params.slug;

    axios.get(`/api/fetchproduct/${product_slug}`).then(res => {
      if (isMounted) {

        if (res.data.status === 200) {
          setProduct(res.data.product_data.product);
          setSubCategory(res.data.product_data.subcategory);
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
      <Row><h4 className="button-center h4-search">{t("view-category.category10")} </h4>
      </Row>
    </Container>

  } else {
    var showProductList = "";
    if (productCount) {


      showProductList =
        product.map((item, idx) => {
          return (
            <div className="col-12 col-sm-6 col-md-4" key={idx}>
              <Link to={`/collections/${item.subcategory.slug}/${item.id}`}>

                {/* <div className="col-md-4" key={idx}>*/}

                <div className="collection-banner">
                  <Container className="col-12 col-md-10">
                    <Row>
                      <img src={`https://desolate-bayou-69148.herokuapp.com/${item.image1}`} className="image-fluid img-round" alt={item.name_product} />
                    </Row>
                  </Container>
                  <br></br>
                  <div className="blog-details">
                    <div style={{ color: '#000' }} onClick={ClickHandler}>

                      <h3 className="h3-definity">{item.name_product}</h3>
                    </div>

                    <h5 className="text-product">
                      {item.price_product}
                    </h5>
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
    else {
      showProductList =
        <Container className="col-md-4">
          <Row>
            <h4 className="button-center h4-search">{t("view-category.category13")} {subcategory.name}</h4>
            <img className="button-center" src={Sad} alt="sad" />
          </Row>
        </Container>


    }
  }
  return (
    <CommonLayout parent={t("view-category.category8")}  title={t("view-category.category9")}>
      <Fragment >
        {/*collection banner*/}

        <Container className="col-md-12">
          <Row>

            {showProductList}

          </Row>
        </Container>


        {/*collection banner end*/}
      </Fragment>
    </CommonLayout>
  );
};

export default ViewProduct;