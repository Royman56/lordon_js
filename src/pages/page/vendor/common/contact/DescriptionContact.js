import React, { Fragment} from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { useTranslation } from "react-i18next";

const DescriptionContact = ({ sectionClass, title, inner, hrClass }) => {
  const [t, i18n] = useTranslation("global");
  return (
    <Fragment>
      <section className={sectionClass}>
        <Container>
          <Row>
            <Col md="12">
              <div className={title}>
              <h4 className="text-red text-center">{t("contact.contact1")}</h4>
                <h2 className="text-center text-red">{t("contact.contact2")}</h2>
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
                    <p className="text-center text-blue">{t("contact.contactd")}</p>
                  </div>
                </Col>
              </Row>

            </Col>
          </Row>
          <form>
         <iframe className="form" src="https://mrtips.formstack.com/forms/lordon_cws"></iframe>
            </form>   
  


        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col md="12">
              <div className={title}>
              <h4 className="text-red text-center">{t("contact.contact3")}</h4>
                <h2 className="text-center text-red">{t("contact.contact4")}</h2>
                {hrClass ? (
                  <hr role="tournament6"></hr>
                ) : (
                  <div className="line">
                    <span></span>
                  </div>
                )}
              </div>

            
              <div className="contact-social button-mrg">
                  <Button className="btn btn-contact button-center" type="submit"
                  >
                    <a href="https://www.facebook.com" target="_blank">
                      <i
                        className="fa fa-facebook"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </Button>

                
                  <Button className="btn btn-contact button-center" type="submit"
                  >
                    <a href="https://www.instagram.com" target="_blank">
                      <i
                        className="fa fa-instagram"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </Button>

                  <Button className="btn btn-contact button-center" type="submit"
                  >
                    <a href="https://api.whatsapp.com/send?phone=52123456789&text=Hola%20me%20gustaria%20saber%20mas%20informacion%20..." target="_blank">
                      <i className="fa fa-whatsapp" aria-hidden="true"></i>
                    </a>
                    
                  </Button>

                
              </div>
        

            </Col>
          </Row>


        </Container>
      </section>
    </Fragment>



  );
};

export default DescriptionContact;