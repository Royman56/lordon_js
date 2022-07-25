import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import { useTranslation } from "react-i18next";

const MasterParallaxBanner = ({
  parallaxSectionClass,
  bg,
  parallaxClass,
  title,
  subTitle1,
  subTitle2,
}) => {
  const [t, i18n] = useTranslation("global");
  return (
    <Fragment>
      <section className={`p-0 ${parallaxSectionClass}`}>
        <div className={`full-banner ${bg} parallax ${parallaxClass}`}>
        <h1 className="parallax-img-txt">{t("header-one.parallax")}</h1>
        <h1 className="parallax-img-txt1">{t("header-one.parallax1")}</h1>
        <h1 className="parallax-img-txt2">{t("header-one.parallax2")}</h1>
        <h1 className="parallax-img-txt3">{t("header-one.parallax3")}</h1>
          <Container>
            <Row>
              <Col>
                <div>
                  <h2>{title}</h2>
                  <h3>{subTitle1}</h3>
                  <h4>{subTitle2}</h4>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </Fragment>
  );
};

export default MasterParallaxBanner;
