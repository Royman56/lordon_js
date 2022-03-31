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
      <br></br>
      <br></br>
      <br></br>
    </Fragment>



  );
};

export default DescriptionContact;