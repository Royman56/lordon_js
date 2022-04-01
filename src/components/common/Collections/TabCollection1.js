import React, { useEffect, useState, Fragment } from "react";
import Slider from "react-slick";
import { Slider2 } from "../../../services/script";
import { Media, Container, Row, Col } from "reactstrap";
import axios from 'axios';
import Link from "next/link";

/*const TabContent = ({
  data,
  loading,
  startIndex,
  endIndex,
  cartClass,
  backImage,
}) => {
  const context = useContext(CartContext);
  const wishListContext = useContext(WishlistContext);
  const compareContext = useContext(CompareContext);
  const curContext = useContext(CurrencyContext);
  const currency = curContext.state;


  return (
    <Row className="no-slider">
      {!data ||
        !data.body ||
        data.body.length === 0 ||
        loading ? (
        data &&
          data.body &&
          data.body.length === 0 ? (
          <Col xs="12">
            <div>
              <div className="col-sm-12 empty-cart-cls text-center">
                <Media
                  src={emptySearch}
                  className="img-fluid mb-4 mx-auto"
                  alt=""
                />
                <h3>
                  <strong>Your Cart is Empty</strong>
                </h3>
                <h4>Explore more shortlist some items.</h4>
              </div>
            </div>
          </Col>
        ) : (
          <div className="row mx-0 margin-default">
            <div className="col-xl-3 col-lg-4 col-6">
              <PostLoader />
            </div>
            <div className="col-xl-3 col-lg-4 col-6">
              <PostLoader />
            </div>
            <div className="col-xl-3 col-lg-4 col-6">
              <PostLoader />
            </div>
            <div className="col-xl-3 col-lg-4 col-6">
              <PostLoader />
            </div>
          </div>
        )
      ) : (
        data &&
        data.body.slice(startIndex, endIndex)
          .map((product, i) => (
            <ProductItem
              key={i}
              product={product}
              symbol={currency.symbol}
              addCompare={() => compareContext.addToCompare(product)}
              addCart={() => context.addToCart(product)}
              addWishlist={() => wishListContext.addToWish(product)}
              cartClass={cartClass}
              backImage={backImage}
            />
          ))
      )}
    </Row>
  );
};*/

const SpecialProducts = ({ sectionClass, title, inner, hrClass }) => {

  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    let isMountered = true;

    axios.get(`/api/getProduct`).then(res => {
      if (isMountered) {
        
        if(res.data.status === 200)
        {
           setProduct(res.data.product);
            setLoading(false);
        }
      }
    });
    return() => {
      isMountered=false;
    }
  });
  
  if (loading) {

    return <Container className="col-md-2">
      <Row><h4 className="button-center">Cargando Productos...</h4>
      </Row>
          </Container>
    
}else{
  var showProductList = '';
    showProductList =
    product.map( (item, idx) => {
        return(

                <div className="col-md-6" key={idx}>
                  
               
                  <div className="collection-banner">
                  <Link href={`/collections/${item.category.slug}/${item.id}`}>
                  <a>
                  <img src={`https://desolate-bayou-69148.herokuapp.com/${item.image1}`} className="image-fluid" alt={item.image1}/>
                  </a>
                  </Link>
                  <div className="blog-details">
              
                    <h4>{item.name_product}</h4>
                    <h4>
                          <del>
                            {item.discount_price}
                          </del>
                        </h4>
                    <p className="style1">{item.price_product} </p>
                  
                    </div>
                  </div>
                
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
                <h4>nuestra colección</h4>
                <h2 className={inner}>PRODUCTOS</h2>
                {hrClass ? (
                  <hr role="tournament6"></hr>
                ) : (
                  <div className="line">
                    <span></span>
                  </div>
                )}
              </div>
                <Row>
                    <Col lg="6" className="m-auto">
                        <div className="product-para">
                            <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s,</p>
                        </div>
                    </Col>
                </Row>
              <Slider {...Slider2} className="slide-2 no-arrow text-center">
              {showProductList}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default SpecialProducts;
