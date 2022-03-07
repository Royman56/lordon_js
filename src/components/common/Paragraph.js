import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Paragraph = ({title, inner, line ,hrClass}) => {
    return (
        <>
            <div className={title}>
                <h4>Ofertas Especiales</h4>
                <h2 className={inner}>PRODUCTOS DESTACADOS</h2>
               
            </div>
            <Container>
                <Row>
                    <Col lg="6" className="m-auto">
                        <div className="product-para">
                            <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s,</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Paragraph;