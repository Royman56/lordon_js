import React, { Fragment} from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { useTranslation } from "react-i18next";

const DescriptionContact = ({ sectionClass, title, inner, hrClass }) => {
  const [t, i18n] = useTranslation("global");
  return (
    <Fragment>
      <section className="bg-body">
        <Container>
          <Row>
            <Col md="12">
              <div className={title}>
                <h2 className="text-center  text-blue-three underline">{t("contact.contact2")}</h2>
                {hrClass ? (
                  <hr role="tournament6"></hr>
                ) : (
                  <div className="line">
                    <span></span>
                  </div>
                )}
              </div>
              <br></br>
              <Row>
                <Col lg="6" className="m-auto">
                  <div className="product-para">
                    <p className="text-center text-blue">{t("contact.contactd")}<span className="text-red">{t("contact.contactd1")}</span></p>
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
    </Fragment>



  );
};

export default DescriptionContact;