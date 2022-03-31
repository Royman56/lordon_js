import React, { useState } from 'react';
import CommonLayout from '../../../components/shop/common-layout';
import { Container, Row, Form, Label, Input, Col, Button } from 'reactstrap';
import { toast } from 'react-toastify';
import { useRouter } from "next/router";
import Link from "next/link";
import swal from 'sweetalert';
import { useHistory } from 'react-router';
import axios from 'axios';
import { useTranslation } from "react-i18next";

const Login = () => {
    const history = useHistory();
    const [t, i18n] = useTranslation("global");

    const [loginInput, setLogin] = useState({
        email: '',
        password: '',
        error_list: [],

    });

    const handleInput = (e) => {
        e.persist();
        setLogin({...loginInput, [e.target.name]: e.target.value});

    }

    const loginSubmit = (e) => {
        e.preventDefault();

        const data = {
            email: loginInput.email,
            password: loginInput.password,
            
  
    }
    axios.get('/sanctum/csrf-cookie').then(response => {
    axios.post(`/api/login`, data).then(res=> {

    if (res.data.status === 200) {
        localStorage.setItem('auth_token', res.data.token);
        localStorage.setItem('auth_name', res.data.username);
        swal("Has Iniciado Sesión","","success");
        history.push('/dashboard')

    } else if(res.data.status === 401){
        swal("Alerta","","warning");
    }

    else{
        setLogin({...loginInput, error_list: res.data.validation_errors})
    }

    });
});

}

    return (
        <CommonLayout parent={t("header-one.menu1")} title={t("header-one.menu6")}>
            <section className="login-page section-b-space">
                <Container>
                    <Row className="justify-content-md-center">
                        <Col lg="8">
                            <h3>{t("header-one.menu6")}</h3>
                            <div className="theme-card">
                                <Form onSubmit={loginSubmit} className="theme-form">
                                    <div className="form-group">
                                        <Label for="email">Email</Label>
                                        <input className="form-control"
                                                        name="email"
                                                        type="email"
                                                        placeholder={t("header-one.menu8")}
                                                        aria-describedby="basic-addon" 
                                                        onChange={handleInput}
                                                        value={loginInput.email}/>
                                            <small className="text-danger">{loginInput.error_list.email}</small>
                                    </div>
                                    <div className="form-group">
                                        <Label for="review">{t("header-one.menu7")}</Label>
                                        <input className="form-control"
                                                        name="password"
                                                        type="password"
                                                        placeholder={t("header-one.menu9")}
                                                        aria-describedby="basic-addon" 
                                                        onChange={handleInput}
                                                        value={loginInput.password}/>
                                            <small className="text-danger">{loginInput.error_list.password}</small>
                                    </div>
                                    <div className="offset-xl-8 offset-sm-8">
                                            <Button className="btn btn-solid" type="submit"
                                            >
                                                {t("header-one.menu6")}
                                            </Button>

                                        </div>
                                   {/* <Link href="/dashboard/">
                                    <a className="btn btn-solid">Iniciar Sesión</a>
                                    </Link>
                                    <Link href="/register/">
                                    <a className="btn btn-solid">Registrarse</a>
                                     </Link>*/}
                                </Form>
                            </div>
                        </Col>
                 
                    </Row>
                </Container>
            </section>
        </CommonLayout>
    )

}

export default Login;