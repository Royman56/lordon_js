import React, { Fragment, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from "reactstrap";
import Slider from "react-slick";
import { Slider2 } from "../../../../../services/script";
import axios from 'axios';
import ReactGa from 'react-ga';

/*const Data = [
  {
    img: banner1,
    about: "hombre",
    offer: "10% off",
    link: "/product-details/right_sidebar",
    class: "p-right text-center",
  },
  {
    img: banner2,
    about: "mujer",
    offer: "10% off",
    link: "product-details/right_sidebar",
    class: "p-right text-center",
  },
];

const MasterCollectionBanner = ({ img, about, offer, link, classes }) => {
  return (
    <Col md="6">
      <Link href={link}>
        <a>
          <div className={`collection-banner ${classes}`}>
            <Media src={img} className="img-fluid" alt="" />
            <div className="contain-banner">
              <div>
                <h4>{offer}</h4>
                <h2>{about}</h2>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </Col>
  );
}

<Container>
          <Row className="partition2">
            {Data.map((data, i) => {
              return (
                <MasterCollectionBanner
                  key={i}
                  img={data.img}
                  about={data.about}
                  link={data.link}
                  offer={data.offer}
                  classes={data.class}
                />
              );
            })}
          </Row>
        </Container>;*/

const ViewCategory = ({ sectionClass, title, inner, hrClass }) => {
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
                  <img src={`http://localhost:8000/${item.image}`} className="image-fluid img-round" style={{ maxWidth: '30rem' }} alt={item.image} />
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
    <Fragment>
      <section className={sectionClass}>
        <Container>
          <Row>
            <Col md="12">
              <div className={title}>
                <h4 className="text-center text-red">variedad y calidad</h4>
                <h2 className="text-center">CATEGORIAS</h2>
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
              <Slider {...Slider2} className="slide-2 slick-arrow text-center">
                {showCategoryList}
              </Slider>

            </Col>
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row>
                <Col lg="6" className="m-auto">
                  <div className="product-para">
                  <Link to='/viewfullcategory/'>
          <Button className="btn btn-solid button-center" type="submit"
          >
            Ver Catálogo
          </Button>
          </Link>
                  </div>
                </Col>
              </Row>
        </Container>
      </section>
    </Fragment>



  );
};

export default ViewCategory;
