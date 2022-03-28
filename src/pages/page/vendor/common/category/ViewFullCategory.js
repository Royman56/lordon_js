import React, { Fragment, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "reactstrap";
import axios from 'axios';
import swal from 'sweetalert';
import { useHistory } from 'react-router';
import CommonLayout from "../../../../../components/shop/common-layout";
import ReactGa from 'react-ga';

const ViewFullCategory = () => {
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState([]);
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
    <CommonLayout parent="collections" title="categorias">
      <Fragment >
        {/*collection banner*/}

        <Container className="col-md-12">
          <Row>

            {showCategoryList}

          </Row>
        </Container>


        {/*collection banner end*/}
      </Fragment>
    </CommonLayout>
  );
};

export default ViewFullCategory;