import React from "react";
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Banner from "../src/pages/layouts/Fashion/Components/Banner";
import ViewCategory from "../src/pages/page/vendor/common/collections/ViewCategory";
import TopCollection from "../src/components/common/Collections/Collection3";
import Parallax from "../src/pages/layouts/Fashion/Components/Parallax";
//import SpecialProducts from "../components/common/Collections/TabCollection1";
//import ServiceLayout from "../components/common/Service/service1";
import LogoBlock from "../src/components/common/logo-block";
import HeaderOne from "../src/components/headers/header-one";
import { withApollo } from "../src/helpers/apollo/apollo";
//import { Product4 } from "../services/script";
import Helmet from "react-helmet";
import favicon from "../src/assets/images/favicon/1.png";
import MasterFooter from "../src/components/footers/common/MasterFooter";
import UpdateProduct from "../src/pages/page/vendor/common/products/UpdateProduct";
import UpdateCategory from "../src/pages/page/vendor/common/category/UpdateCategory";
import ViewProduct from "../src/pages/page/vendor/common/collections/ViewProduct";
import DetailProduct from "../src/pages/page/vendor/common/collections/DetailProduct";
import AddProduct from "../src/pages/page/vendor/common/products/AddProduct";
import AddCategory from "../src/pages/page/vendor/common/category/AddCategory";
import Dashboard from "../src/pages/page/vendor/common/dashboard";
import Login from "../src/pages/page/account/login";
import Register from "../src/pages/page/account/register";
import AdminPrivateRoute from "../src/pages/page/AdminPrivateRoute";
import ViewFullCategory from "../src/pages/page/vendor/common/category/ViewFullCategory";
import Business from "../src/pages/page/vendor/common/collections/Business";
import ContactUs from "../src/pages/page/vendor/common/collections/ContactUs";
import AddSubCategory from "../src/pages/page/vendor/common/sub-category/AddSubCategory";
import UpdateSubCategory from "../src/pages/page/vendor/common/sub-category/UpdateSubCategory";
import ViewSubCategory from "../src/pages/page/vendor/common/sub-category/ViewSubCategory";
import SearchProduct from "../src/pages/page/vendor/common/products/SearchProduct";
import LinkFullCategory from "../src/pages/page/vendor/common/category/LinkFullCategory";
import Home from "./App";
import Become from "./pages/page/vendor/common/become";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_es from "../src/pages/lang/es/global.json";
import global_en from "../src/pages/lang/en/global.json";


//import 'bootstrap/dist/css/bootstrap.min.css';

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    }
  }
});

ReactDOM.render(
  <React.StrictMode>

    <I18nextProvider i18n={i18next}>

    <Router>
        <Switch>
        <Route path="/lordon_js/" exact component={Home}></Route>
        <Route path="/lordon/" exact component={Home}></Route>
        <Route path="/" exact component={Home}></Route>
        <Route path="/home/" exact component={Home}></Route>
        <Route path="/business/" exact component={Business}></Route>
        <Route path="/contact/" exact component={ContactUs}></Route>
        <Route path="/search/" exact component={SearchProduct}></Route>
          <Route path="/updateproduct/:id" exact component={UpdateProduct}></Route>
          <Route path="/updatecategory/:id" exact component={UpdateCategory}></Route>
          <Route path="/updatesubcategory/:id" exact component={UpdateSubCategory}></Route>
          <Route path="/collections/:slug" exact component={ViewProduct}></Route>
          <Route path="/viewfullcategory/" exact component={ViewFullCategory}></Route>
          <Route path="/viewfullcategory/:slug" exact component={LinkFullCategory}></Route>
          <Route path="/viewsubcategory/" exact component={ViewSubCategory}></Route>
          <Route path="/collections/:category/:product" exact component={DetailProduct}></Route>
          <Route path="/addproduct/" exact component={AddProduct}></Route>
          <Route path="/addcategory/" exact component={AddCategory}></Route>
          <Route path="/addsubcategory/" exact component={AddSubCategory}></Route>
         {/*<Route path="/dashboard/" exact component={Dashboard}></Route>*/}
          <Route path="/login/">
            {localStorage.getItem('auth_token') ? <Redirect to='/dashboard/'/> : <Login/> }
          </Route>
          <Route path="/register/">
            {localStorage.getItem('auth_token') ? <Redirect to='/dashboard/'/> : <Register/> }
          </Route>
          {/*<Route path="/register/" exact component={Register}></Route>*/}
           <AdminPrivateRoute path="/dashboard/" exact component={Dashboard}/>
        </Switch>
    
    </Router>

    </I18nextProvider>

  </React.StrictMode>,
  document.getElementById('root')
);
