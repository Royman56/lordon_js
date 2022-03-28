import React from "react";
import MasterServiceContent from "../../../components/common/Service/MasterServiceConternt";
import {
  svgFreeShipping,
  svgservice,
  svgoffer,
  svgpayment,
} from "../../../services/script";
const Data = [
  {
    link: svgFreeShipping,
    title: "envío gratis",
    service: "envío gratuito a nivel mundial",
  },
  {
    link: svgservice,
    title: "24 X 7 servicio",
    service: "servicio online para nuevos clientes",
  },
  {
    link: svgoffer,
    title: "oferta festival",
    service: "nueva oferta especial de festivales online",
  },
  {
    link: svgpayment,
    title: "pago en línea",
    service: "nueva oferta especial de festivales online",
    lastChild: true,
  },
];

const Service = () => {
  return (
    <div>
      <div>
      </div>
    </div>
  );
};

export default Service;
