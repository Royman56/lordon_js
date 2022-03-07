import React, { useState } from "react";
import {
    Card,
    CardBody,
    Container, 
    Row,
} from "reactstrap";
import Analytics from "../../../../../assets/images/analytics.png";
const DashboardDetails = () => {
    const [activeTab, setActiveTab] = useState("1");
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div>
            <Card className="dashboard-table">
                <CardBody>
                    <a href="https://analytics.google.com/analytics/web/?authuser=1#/realtime/rt-overview/a215687577w297361807p257456518/">
                        <i className="fas fa fa-share" aria-hidden="true"></i>
                        <h3>Para observar todos los datos haz click aquí!</h3>
                    </a>
                    

                </CardBody>

                <Container className="col-md-4">
                        <Row>
                            <img className="img-table button-center" src={Analytics} alt="analytics" />
                        </Row>
                    </Container>
            </Card>


        </div>
    );
};


export default DashboardDetails;
