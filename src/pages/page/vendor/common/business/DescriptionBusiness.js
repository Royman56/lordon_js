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
                            <div className="text-center">
                                <h1 className="text-red">{t("business.business2")}</h1>

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
                                        <h1 className="text-red ">{t("business.business4")}</h1>
                                        <p className="text-blue">
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
                                        <h1 className="text-red">{t("business.business7")}</h1>
                                        <p className="text-blue">
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
                                        <h1 className="text-red">{t("business.business9")}</h1>
                                        <p className="text-blue">
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
                <br></br>
            </section>
        </Fragment>



    );
};

export default DescriptionBusiness;
