import React, { Fragment, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "reactstrap";
import axios from 'axios';
import swal from 'sweetalert';
import { useHistory } from 'react-router';
import CommonLayout from "../../../../../components/shop/common-layout";
import Sad from "../../../../../assets/images/sad.png";
import ReactGa from 'react-ga';

const ViewProduct = (props) => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const [subcategory, setSubCategory] = useState([]);
  const productCount = product.length;
  const history = useHistory();
  
  const ClickHandler = () =>{
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
    <Row><h4 className="button-center">Cargando Productos...</h4>
    </Row>
          </Container>

  } else {
    var showProductList = "";
    if (productCount) {


      showProductList =
        product.map((item, idx) => {
          return (
            <Link to={`/collections/${item.subcategory.slug}/${item.id}`}>
           
             {/* <div className="col-md-4" key={idx}>*/}
              <Row key={idx} className="button-tp button-mrg">
              <Col xs={12} md={12}>
              
              <div className="collection-banner">
                <img src={`http://localhost:8000/${item.image1}`} className="image-fluid img-round" alt={item.name_product} />
                </div>
                <div className="card-body">
                <div style={{ color: '#000' }}  onClick={ClickHandler}>

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
    }
    else {
      showProductList =
      <Container className="col-md-4">
          <Row>
      <h4 className="button-center">Ningún Producto Para Mostrar En {subcategory.name}</h4>
          <img className="button-center" src={Sad} alt="sad"/>
          </Row>
          </Container>   
          
    
    }
  }
  return (
    <CommonLayout parent="collections" title={subcategory.name}>
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