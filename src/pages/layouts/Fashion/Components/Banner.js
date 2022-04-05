import React, { Fragment } from "react";
import Slider from "react-slick";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import MasterBanner from "./MasterBanner";
import "../../../../assets/scss/app.scss";

const Data = [
  {
    img: "home1",
    /*title: "bienvenidos",
    desc: "la mejor moda para hombre y mujer",*/
    link: "product-details/right_sidebar",
  },
  {
    img: "home2",
    /*title: "bienvenidos",
    desc: "la mejor moda para hombre y mujer",*/
    link: "product-details/right_sidebar",
  },
  {
    img: "home3",
    /*title: "bienvenidos",
    desc: "la mejor moda para hombre y mujer",*/
    link: "product-details/right_sidebar",
  },
  {
    img: "home4",
    /*title: "bienvenidos",
    desc: "la mejor moda para hombre y mujer",*/
    link: "product-details/right_sidebar",
  },
  {
    img: "home5",
    /*title: "bienvenidos",
    desc: "la mejor moda para hombre y mujer",*/
    link: "product-details/right_sidebar",
  },
];

const Banner = () => {
  return (
    <Fragment>
      <section className="p-0">
        <Slider className="slide-1 home-slider" autoplay={5000}>
          {Data.map((data, i) => {
            return (
              <MasterBanner
                key={i}
                img={data.img}
                /*desc={data.desc}
                title={data.title}*/
                link={data.link}
              />
            );
          })}
        </Slider>
      </section>
    </Fragment>
  );
};

export default Banner;