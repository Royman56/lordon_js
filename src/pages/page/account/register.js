import React, { useState } from 'react';
import CommonLayout from '../../../components/shop/common-layout';
import { Input, Container, Row, Form, Label, Col, Button } from 'reactstrap';
import swal from 'sweetalert';
import { useHistory } from 'react-router';
import axios from 'axios';

const Register = () => {
    const history = useHistory();

    const [registerInput, setRegister] = useState({
        name: '',
        email: '',
        password: '',
        error_list: [],

    });

    const handleInput = (e) => {
        e.persist();
        setRegister({...registerInput, [e.target.name]: e.target.value});

    }

    const registerSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: registerInput.name,
            email: registerInput.email,
            password: registerInput.password,
            
  
    }
    axios.get('/sanctum/csrf-cookie').then(response => {
    axios.post(`/api/register`, data).then(res=> {

    if (res.data.status === 200) {
        localStorage.setItem('auth_token', res.data.token);
        localStorage.setItem('auth_name', res.data.username);
        swal("Registro Exitoso","","success");
        history.push('/login')

    } else{
        setRegister({...registerInput, error_list: res.data.validation_errors})
    }

    });
});

}

    return (
        <CommonLayout parent="home" title="register">
            <section className="register-page section-b-space">
                <Container>
                    <Row>
                        <Col lg="12">
                            <h3>CREAR CUENTA</h3>
                            <div className="theme-card">
                                <Form onSubmit={registerSubmit} className="theme-form">
                                    <Row>
                                        <Col md="6">
                                            <Label for="name">Nombre</Label>
                                                        <div className="input-group">
                                                    <input className="form-control"
                                                        name="name"
                                                        type="text"
                                                        placeholder="Ingrese nombre"
                                                        aria-describedby="basic-addon" 
                                                        onChange={handleInput}
                                                        value={registerInput.name}/>
                                                </div>
                                            <small className="text-danger">{registerInput.error_list.name}</small>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="6">
                                            <Label for="email">E-Mail</Label>
                                            <input className="form-control"
                                                        name="email"
                                                        type="email"
                                                        placeholder="Ingrese email"
                                                        aria-describedby="basic-addon" 
                                                        onChange={handleInput}
                                                        value={registerInput.email}/>
                                            <small className="text-danger">{registerInput.error_list.email}</small>
                                        </Col>
                                        <Col md="6">
                                            <Label for="review">Contraseña</Label>
                                            <input className="form-control"
                                                        name="password"
                                                        type="password"
                                                        placeholder="Ingrese contraseña"
                                                        aria-describedby="basic-addon" 
                                                        onChange={handleInput}
                                                        value={registerInput.password}/>
                                        <small className="text-danger">{registerInput.error_list.password}</small>
                                        </Col>
                                        
                                    </Row>
                                    <br />
                                        <div className="offset-xl-5 offset-sm-4">
                                            <Button className="input-bordered" type="submit" color="primary"
                                            >
                                                Registrarse
                                            </Button>

                                        </div>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </CommonLayout>
    )
}

export default Register