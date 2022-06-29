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
            <section className="bg-body">
                <Container>
                    <Row>
                        <Col md="12">
                            <div className="text-center">
                                <h2 className="text-blue-ford">{t("business.business2")}</h2>

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
                                        <h2 className="text-red box-p">{t("business.business4")}</h2>
                                        <div className="product-para">
                                        <p className="text-blue box-p2">
                                            {t("business.business5")}
                                            <span className="text-blue">{t("business.business55")}</span>
                                            <span className="text-blue">{t("business.business555")}</span>
                                        </p>
                                        </div>

                                    </div>
                                </div>


                                <div className="right-content">
                                    <img src={quesomos} alt="" className="phone image-fluid" />
                                </div>
                            </div>

                        </Col>
                    </Row>
                </Container>
                <br></br>
                <br></br>
                <Container>
                    <Row>
                        <Col md="12" className="only-pc">
                            <div className="description-business">
                                <div className="left-content-business">
                                <div className="right-content">
                                    <img src={mision} alt="" className="phone image-fluid" />
                                    </div>
                                </div>

                         
                                <div className="left-text-container">
                                        <h2 className="text-red box-p">{t("business.business7")}</h2>
                                        <div className="product-para">
                                        <p className="text-blue box-p2">
                                            {t("business.business8")}
                                        </p>
                                        </div>

                                 
                                </div>
                            </div>


                        </Col>
                        <Col md="12" className="only-phone">

                            <div className="description-business">
                                <div className="left-content-business">
                                    <div className="left-text-container">
                                    <h2 className="text-red box-p">{t("business.business7")}</h2>
                                    <div className="product-para">
                                        <p className="text-blue box-p2">
                                            {t("business.business8")}
                                        </p>
                                        </div>

                                    </div>
                                </div>


                                <div className="right-content">
                                <img src={mision} alt="" className="phone image-fluid" />
                                </div>
                            </div>


                        </Col>
                    </Row>
                </Container>
                <br></br>
                <br></br>
                <Container>
                    <Row>
                        <Col md="12">
                            <div className="description-business">
                                <div className="left-content-business">
                                    <div className="left-text-container">
                                        <h2 className="text-red box-p">{t("business.business9")}</h2>
                                        <div className="product-para">
                                        <p className="text-blue box-p2 ">
                                            {t("business.business10")}
                                        </p>
                                        </div>
                                    </div>
                                </div>


                                <div className="right-content">
                                    <img src={vision} alt="" className="phone image-fluid" />
                                </div>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>
        </Fragment>



    );
};

export default DescriptionBusiness;
