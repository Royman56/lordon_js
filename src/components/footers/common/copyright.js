import React, { Fragment } from 'react';
import { Container ,Row ,Col ,Media} from 'reactstrap';


const CopyRight = ({layout, fluid}) => {
    return (
        <Fragment>
            <div className={`sub-footer ${layout}`}>
                <Container fluid={fluid}>
                  
                </Container>
            </div>
        </Fragment>
    )
}

export default CopyRight;