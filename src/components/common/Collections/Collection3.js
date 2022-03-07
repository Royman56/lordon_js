import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import ProductItems from "../product-box/ProductBox1";
import { Row, Col, Container, Media } from "reactstrap";
import CartContext from "../../../helpers/cart";
import { WishlistContext } from "../../../helpers/wishlist/WishlistContext";
import PostLoader from "../PostLoader";
import { CompareContext } from "../../../helpers/Compare/CompareContext";

const TopCollection = ({
  type,
  title,
  subtitle,
  designClass,
  noSlider,
  cartClass,
  productSlider,
  titleClass,
  noTitle,
  innerClass,
  inner,
  backImage,
}) => {
  const context = useContext(CartContext);
  const contextWishlist = useContext(WishlistContext);
  const comapreList = useContext(CompareContext);
  const [delayProduct, setDelayProduct] = useState(true);
  const [products, setProducts] = useState([]);

  /*const findProducts = async () => {
    try {
      noSlider = false;
      const requestOptions = {
        method: 'GET',
        headers: HEADERS_BASE
      };
      const response = await fetch(API_URL + '/products/listAll', requestOptions);
      let data = await response.json();
      setProducts(data);

      noSlider = true;
      setDelayProduct(false);
    } catch (error) {
      console.log(error);
      //toast.error("error", error);
    }
  }

  useEffect(() => {
    findProducts();
  }, []);

  /*
  useEffect(() => {
    if (data === undefined) {
      noSlider === false;
    } else {
      noSlider === true;
    }
    setTimeout(() => {
      setDelayProduct(false);
    }, 1);
  }, [delayProduct]);
  */

  return (
    <>
      <section className={designClass}>
        
      </section>
    </>
  );
};

export default TopCollection;
