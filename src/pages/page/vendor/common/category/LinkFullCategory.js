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

const LinkFullCategory = (props) => {
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubCategory] = useState([]);
  const subcategoryCount = subcategory.length;
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
      <Row><h4 className="button-center">{t("view-category.category11")} </h4>
      </Row>
    </Container>

  } else {
    var showSubCategoryList = "";
    if (subcategoryCount) {


      showSubCategoryList =
        subcategory.map((item, idx) => {
          return (
            <div className="col-md-6" key={idx}>
            <Link to={`/collections/${item.slug}`}>

              {/* <div className="col-md-4" key={idx}>*/}
                  <div className="collection-banner">
                    <Container className="col-md-6">
                      <Row>
                        <img src={`http://localhost:8000/${item.image}`} className="image-fluid img-round" alt={item.image} />
                      </Row>
                    </Container>
                    <div className="blog-details" onClick={ClickHandler}>

                      <h4>{item.name}</h4>
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
    else {
      showSubCategoryList =
        <Container className="col-md-4">
          <Row>
            <h4 className="button-center">{t("view-category.category12")} {category.name}</h4>
            <img className="button-center" src={Sad} alt="sad" />
          </Row>
        </Container>


    }
  }
  return (

      <CommonLayout parent={t("view-category.category2")} title={t("view-category.category8")}>
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

  );
};

export default LinkFullCategory;