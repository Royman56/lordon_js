import React from "react";
import LogoImage from "../headers/common/logo";
import { Container, Row, Col } from "reactstrap";
import CopyRight from "./common/copyright";

const FooterTwo = (props) => {
  return (
    <footer className="footer-light pet-layout-footer">
      <div className="white-layout">
        <Container>
          <section className="small-section">
            <Row className="footer-theme2">
              <Col>
                <div className="footer-link link-white">
                  <div className="footer-brand-logo">
                    <LogoImage logo={props.logoName} />
                  </div>
                  <div className="social-white">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com" target="_blank">
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://plus.google.com" target="_blank">
                          <i
                            className="fa fa-google-plus"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com" target="_blank">
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com" target="_blank">
                          <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://rss.com" target="_blank">
                          <i className="fa fa-rss" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                
                </div>
              </Col>
            </Row>
          </section>
        </Container>
      </div>
      <CopyRight layout={props.layoutClass} />
    </footer>
  );
};

export default FooterTwo;
