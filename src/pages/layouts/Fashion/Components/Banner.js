import React, { Fragment } from "react";
import Slider from "react-slick";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import MasterBanner from "./MasterBanner";
import "../../../../assets/scss/app.scss";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const [t, i18n] = useTranslation("global");
  const Data = [
    {
      img: "home1",
      titleone: `${t("header-one.banner")}`,
      title: `${t("header-one.bannerb")}`,
      desc: `${t("header-one.banner1")}`,
      link: "product-details/right_sidebar",
    },
    {
      img: "home2",
      titleone: `${t("header-one.banner2")}`,
      title: `${t("header-one.banner2b")}`,
      desc: `${t("header-one.banner2c")}`,
      link: "product-details/right_sidebar",
    },
    {
      img: "home3",
      titleone: `${t("header-one.banner3")}`,
      title: `${t("header-one.banner3b")}`,
      desc: `${t("header-one.banner3c")}`,
      link: "product-details/right_sidebar",
    },
    {
      img: "home4",
      link: "product-details/right_sidebar",
    },
  ];
  return (
    <Fragment>
      <section className="p-0">
        <Slider className="slide-1 home-slider">
          {Data.map((data, i) => {
            return (
              <MasterBanner
                key={i}
                img={data.img}
                //desc={data.desc}
                title={data.title}
                titleone={data.titleone}
                /*link={data.link}*/
              />
            );
          })}
        </Slider>
      </section>
    </Fragment>
  );
};

export default Banner;