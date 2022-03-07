import React, { useState, useContext } from "react";
import Link from "next/link";
import sizeChart from "../../../public/assets/images/size-chart.jpg";
import { Modal, ModalBody, ModalHeader, Media, Input } from "reactstrap";
import { CurrencyContext } from "../../../helpers/Currency/CurrencyContext";
import CartContext from "../../../helpers/cart";
import CountdownComponent from "../../../components/common/widgets/countdownComponent";
import MasterSocial from "./master_social";

const DetailsWithPrice = ({ item, stickyClass, changeColorVar }) => {
  
  const [modal, setModal] = useState(false);
  const CurContect = useContext(CurrencyContext);
  const toggle = () => setModal(!modal);
  const product = item;
  const context = useContext(CartContext);
  const uniqueColor = [];
  const uniqueSize = [];

  /*const changeQty = (e) => {
    setQuantity(parseInt(e.target.value));
  };*/

  return (
    <>
    
      <div className={`product-right`}>
        <h2> {product.title} </h2>
        <h4>
          <del>
            {product.price}
          </del>
          <span>{product.discount}% off</span>
        </h4>
        <h3>
          {product.price - (product.price * product.discount) / 100}
        </h3>
        {product.variants.map((vari) => {
          var findItem = uniqueColor.find((x) => x.color === vari.color);
          if (!findItem) uniqueColor.push(vari);
          var findItemSize = uniqueSize.find((x) => x === vari.size);
          if (!findItemSize) uniqueSize.push(vari.size);
        })}
        
        
        <div className="border-product">
          <h6 className="product-title">detalles del producto</h6>
          <p>{product.description}</p>
        </div>
        <div className="border-product">
          <h6 className="product-title">share it</h6>
          <div className="product-icon">
            <MasterSocial />
          </div>
        </div>
    
      </div>
    </>
  );
};

export default DetailsWithPrice;
