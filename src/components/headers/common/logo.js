import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const LogoImage = ({ logo }) => {
    return (
        <Fragment>
            <Link to='/' >
               
                    <img src={`/assets/images/icon/${logo?logo:'logo.png'}`} alt="" className="img-fluid" />
                
            </Link>
        </Fragment>
    )
}

export default LogoImage;