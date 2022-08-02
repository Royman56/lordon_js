import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
  Collapse,
} from "reactstrap";
import face from "../../../assets/images/face.jpg";
import insta from "../../../assets/images/instagram.png";
import tweet from "../../../assets/images/tweet.png";
import CopyRight from "./copyright";
import { useTranslation } from "react-i18next";
import logo from "../../../assets/images/icon/logo1.png";

const MasterFooter = ({
  containerFluid,
  logoName,
  layoutClass,
  footerClass,
  footerLayOut,
  footerSection,
  belowSection,
  belowContainerFluid,
  copyRightFluid,
  newLatter,
}) => {
  const [t, i18n] = useTranslation("global");
  const [isOpen, setIsOpen] = useState();
  const [collapse, setCollapse] = useState(0);
  const width = window.innerWidth < 750;
  useEffect(() => {
    const changeCollapse = () => {
      if (window.innerWidth < 750) {
        setCollapse(0);
        setIsOpen(false);
      } else setIsOpen(true);
    };

    window.addEventListener("resize", changeCollapse);

    return () => {
      window.removeEventListener('resize', changeCollapse)
    }

  }, []);
  return (
    <div>
      <footer className={footerClass}>

        <section className={belowSection}>
          <Container fluid={belowContainerFluid ? belowContainerFluid : ""}>
            <Row className="footer-theme partition-f button-tp">
              <Col lg="4" md="6">
                <div
                  className={`footer-title ${isOpen && collapse == 1 ? "active" : ""
                    } footer-mobile-title`}
                >
                  <div className="sub-title">
                  <h4
                    onClick={() => {
                      setCollapse(1);
                      setIsOpen(!isOpen);
                    }}
                    className="h4-search"
                  >
                    {t("footer.footer0")}
                    <span className="according-menu"></span>
                  </h4>
                  </div>
                </div>
                <Collapse
                  isOpen={width ? (collapse === 1 ? isOpen : false) : true}
                >
                  <div className="footer-contant">
                    <div className="footer-logo">
                    <Link to='/'>
                      <img src={logo} alt="" className="phone img-fluid"/>
                      </Link>
                    </div>
                    
                    <div className="footer-social">
                      <ul>
                      <li>
                          <a href="https://api.whatsapp.com/send?phone=52123456789&text=Hola%20me%20gustaria%20saber%20mas%20informacion%20..." target="_blank">
                          <img
                            src={face} width="48" className="phone img-fluid"/>
                          </a>
                        </li>

                        <li>
                          <a href="https://www.facebook.com" target="_blank">
                          <img
                            src={insta} width="48" className="phone img-fluid"/>
                          </a>
                        </li>
              
                        <li>
                          <a href="https://www.instagram.com" target="_blank">
                          <img
                            src={tweet} width="48" className="phone img-fluid"/>
                          </a>
                        </li>

                      </ul>

                    </div>
              
                      {/*<h2 className="text-red">Síguenos</h2>*/}
                  </div>
                </Collapse>
              </Col>
              <Col>
                <div className="sub-title">
                  <div
                    className={`footer-title ${isOpen && collapse == 3 ? "active" : ""
                      } `}
                  >
                    <h4
                      onClick={() => {
                        if (width) {
                          setIsOpen(!isOpen);
                          setCollapse(3);
                        } else setIsOpen(true);
                      }}
                      className="h4-search"
                    >
                      {t("footer.footer1")}
                      <span className="according-menu"></span>
                    </h4>
                  </div>
                  <div className="sub-title">
                    <Collapse
                      isOpen={width ? (collapse === 3 ? isOpen : false) : true}
                    >
                      <div className="footer-contant">
                        <ul className="contact-list">
                        <a href="/">
                        <li>
                        
                            <i className="fa fa-share"></i>
                            <i></i>{t("footer.back-text")}
                       
                          </li>
                          </a>
                          <li>
                            <i className="fa fa-phone"></i>{t("footer.phone")} :{" "}
                            <i></i>5525982376
                          </li>
                          <li>
                            <i className="fa fa-envelope-o"></i>{t("footer.email")} :{" "}
                            <a href="#">info@lordon.com.mx</a>
                          </li>
                          <li>
                            <i className="fa fa-plus"></i>{t("footer.hour")} :{" "}
                            <i></i>{t("footer.hour-text")}
                          </li>

                        </ul>
                      </div>
                    </Collapse>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="sub-title">
                  <div
                    className={`footer-title ${isOpen && collapse == 4 ? "active" : ""
                      } `}
                  >
                    <h4
                      onClick={() => {
                        if (width) {
                          setIsOpen(!isOpen);
                          setCollapse(4);
                        } else setIsOpen(true);
                      }}
                      className="h4-search"
                    >
                      {t("footer.footer2")}
                      <span className="according-menu"></span>
                    </h4>
                  </div>
                  <Collapse
                    isOpen={width ? (collapse === 4 ? isOpen : false) : true}
                  >
                    <div className="footer-contant">
                      <ul className="contact-list">
                        <li>
                          <i className="fa fa-map-marker"></i>Calle 9 No 118, Col. Ignacio Zaragoza, Venustiano Carranza, CP.15000, Ciudad de
                          México, México
                        </li>
                      </ul>
                    </div>
                    <br></br>
                    <br></br>
                <div className="sub-title">
                  <div
                    className={`footer-title ${isOpen && collapse == 4 ? "active" : ""
                      } `}
                  >
                    <h4
                      onClick={() => {
                        if (width) {
                          setIsOpen(!isOpen);
                          setCollapse(4);
                        } else setIsOpen(true);
                      }}
                      className="h4-search"
                    >
                      {t("footer.footer3")}
                      <span className="according-menu"></span>
                    </h4>
                  </div>
                    <div className="footer-contant">
                      <ul className="contact-list">
                      <li>
                            <i className="fa fa-random"></i>
                            <a href="https://www.sic.gov.co/ley-de-proteccion-de-datos">https://avisodeprivacidad</a>
                          </li>
                      </ul>
                    </div>
                </div>
    
                  </Collapse>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <CopyRight
          layout={layoutClass}
          fluid={copyRightFluid ? copyRightFluid : ""}
        />
      </footer>
    </div>
  );
};
export default MasterFooter;
