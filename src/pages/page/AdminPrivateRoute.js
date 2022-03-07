import React, { useState, useEffect } from 'react';
import { Container, Row, Form, Label, Input, Col, Button } from 'reactstrap';
import { Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import MasterBanner from '../layouts/Fashion/Components/MasterBanner';
import swal from 'sweetalert';
import { useHistory } from 'react-router';

const AdminPrivateRoute = ({...rest}) => {
    const [loading, setLoading] = useState(true);
    const [Authenticated, setAuthenticated] = useState(false);
    const history = useHistory();

    useEffect(() => {
        axios.get(`/api/checkingAuthenticated`).then(res => {
            if(res.status === 200)
            {
                setAuthenticated(true);
            }
            setLoading(false);
        });

        return ()=>{
            setAuthenticated(false);
        };
        
    }, []);

    axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
        if (err.response.status === 401) {
            swal("No Has Iniciado Sesión","","warning");
            history.push('/home');
        }
        return Promise.reject(err);
    });

    if (loading) {
        return <Container className="col-md-2">
            <Row><h2 className='button-center'>Cargando...</h2>
            </Row>
          </Container>
    }

    return (
        <><Route {...rest}
            render={({ props, location }) => Authenticated ?
                (<MasterBanner {...props} />) :
                (<Redirect to={{ pathname: "/login", state: { from: location } }} />)} /><h2 className='button-center'></h2></>
    )

}

export default AdminPrivateRoute;