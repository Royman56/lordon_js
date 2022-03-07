import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { Container, Row, Col, Media, Button } from "reactstrap";
import mision from '../../../../../assets/images/mision.png';
import vision from '../../../../../assets/images/vision.png';
import quesomos from '../../../../../assets/images/quesomos.png';
import quienessomos from '../../../../../assets/images/quienessomos.png';
import user1 from '../../../../../assets/images/comments/user1.png';
import user2 from '../../../../../assets/images/comments/user2.png';
import Slider from "react-slick";
import { Slider2 } from "../../../../../services/script";
import { useTranslation } from "react-i18next";

const DescriptionBusiness = ({ sectionClass, title, inner, hrClass }) => {
    const [t, i18n] = useTranslation("global");
    const imgData = [
        user1,
        user2,
    ];
    return (
        <Fragment>
            <section className={sectionClass}>
                <Container>
                    <Row>
                        <Col md="12">
                            <div className="description-business">
                                <div className="left-content-business">
                                    <div className="left-text-container">
                                    <h4 className="text-red">{t("business.business1")}</h4>
                                        <h1>{t("business.business2")}</h1>
                                        <p className="white-text">
                                        {t("business.business3")}
                                        </p>

                                    </div>
                                </div>


                                <div className="right-content">
                                    <img src={quienessomos} alt="" className="phone" />
                                </div>
                            </div>

                        </Col>
                    </Row>


                </Container>
                <Container>
                    <Row>
                        <Col md="12">
                            <div className="description-business">
                                <div className="left-content-business">
                                    <div className="left-text-container">
                                        <h1>{t("business.business4")}</h1>
                                        <p className="white-text">
                                        {t("business.business5")}
                                        </p>

                                    </div>
                                </div>


                                <div className="right-content">
                                    <img src={quesomos} alt="" className="phone" />
                                </div>
                            </div>

                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col md="12">
                            <div className="description-business">
                                <div className="left-content-business">
                                    <div className="left-text-container">
                                    <h4 className="text-red">{t("business.business6")}</h4>
                                        <h1>{t("business.business7")}</h1>
                                        <p className="white-text">
                                        {t("business.business8")}
                                        </p>

                                    </div>
                                </div>


                                <div className="right-content">
                                    <img src={mision} alt="" className="phone" />
                                </div>
                            </div>

                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col md="12">
                            <div className="description-business">
                                <div className="left-content-business">
                                    <div className="left-text-container">
                                        <h1>{t("business.business9")}</h1>
                                        <p className="white-text">
                                        {t("business.business10")}
                                        </p>

                                    </div>
                                </div>


                                <div className="right-content">
                                    <img src={vision} alt="" className="phone" />
                                </div>
                            </div>

                        </Col>
                    </Row>
                </Container>

                <Container>
        <Row>
          <Col md="12">
          <h4 className="text-red text-center">{t("business.business11")}</h4>
          <h2 className="title-borderless">{t("business.business12")}</h2>
            <Slider {...Slider2} className="slide-2 no-arrow">
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
        </Fragment>



    );
};

export default DescriptionBusiness;
