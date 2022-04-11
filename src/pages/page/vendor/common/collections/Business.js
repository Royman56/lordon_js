import React from "react";
import Banner from "../../../../layouts/Fashion/Components/Banner";
import ViewCategory from "../../common/collections/ViewCategory";
import TopCollection from "../../../../../components/common/Collections/Collection3";
import SpecialProducts from "../../../../../components/common/Collections/TabCollection1";
import ServiceLayout from "../../../../../components/common/Service/service1";
import HeaderOne from "../../../../../components/headers/header-one";
import { Product4 } from "../../../../../services/script";
import Helmet from "react-helmet";
import favicon from "../../../../../assets/images/favicon/1.png";
import MasterFooter from "../../../../../components/footers/common/MasterFooter";
import DescriptionBusiness from "../business/DescriptionBusiness";
import LogoBlock from "../../../../../../src/components/common/logo-block";

//import 'bootstrap/dist/css/bootstrap.min.css';

const Business = () => {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href={favicon ? favicon : ""} />
      </Helmet>

      <HeaderOne logoName={"logo.png"} topClass="top-header" />

      <Banner />

      <DescriptionBusiness />

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

export default Business;
