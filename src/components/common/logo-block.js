import React from "react";
import Slider from "react-slick";
import { Slider6 } from "../../services/script";
import { Container, Row, Media, Col } from "reactstrap";
import { useTranslation } from "react-i18next";
import logo1 from '../../assets/images/logos/1.png';
import logo2 from '../../assets/images/logos/2.png';
import logo3 from '../../assets/images/logos/3.png';
import logo4 from '../../assets/images/logos/4.png';
import logo5 from '../../assets/images/logos/5.png';
import logo6 from '../../assets/images/logos/6.png';
import logo7 from '../../assets/images/logos/7.png';
import logo8 from '../../assets/images/logos/8.png';

const LogoBlock = ({ designClass }) => {
  const [t, i18n] = useTranslation("global");
  const imgData = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
  ];
  return (
    <section className={designClass}>
      <Container>
        <Row>
          <Col md="12">
          <h4 className="text-red text-center">{t("clients.clients1")}</h4>
          <h2 className="title-borderless">{t("clients.clients2")}</h2>
            <Slider {...Slider6} className="slide-6 no-arrow autoplay">
              {imgData.map((imgSrc, i) => {
                return (
                  <div key={i}>
                    <div className="logo-block">
                      <a href={null}>
                        <Media src={imgSrc} alt="" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LogoBlock;
