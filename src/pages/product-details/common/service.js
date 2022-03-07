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
    <div className="collection-filter-block">
      <div className="product-service">
        {Data.map((data, index) => {
          return (
            <MasterServiceContent
              key={index}
              link={data.link}
              title={data.title}
              service={data.service}
              lastChild={data.lastChild}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Service;
