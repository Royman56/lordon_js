import React from "react";
import Helmet from "react-helmet";
import HeaderOne from "../../../../../src/components/headers/header-one";
import Banner from "../../../../../src/pages/layouts/Fashion/Components/Banner";
import ViewCategory from "../../../../../src/pages/page/vendor/common/collections/ViewCategory";
import TopCollection from "../../../../../src/components/common/Collections/Collection3";
import Parallax from "../../../../../src/pages/layouts/Fashion/Components/Parallax";
import favicon from "../../../../../src/assets/images/favicon/1.png";
import MasterFooter from "../../../../../src/components/footers/common/MasterFooter";
import logo from "../../../../../src/assets/images/icon/logo.png";

//import 'bootstrap/dist/css/bootstrap.min.css';

const Become = () => {
  return (
    <>
     <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href={favicon ? favicon : ""} />
      </Helmet>

      <HeaderOne logoName={logo} topClass="top-header" />

      <Banner />

      <ViewCategory />

      <MasterFooter
        footerClass={`footer-light`}
        footerLayOut={"light-layout upper-footer"}
        footerSection={"small-section border-section border-top-0"}
        belowSection={"section-b-space light-layout"}
        newLatter={true}
        logoName={"logo.png"}
      />
    </>
  );
};


export default Become;
