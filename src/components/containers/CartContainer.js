import React, { useContext, Fragment } from "react";
import Link from "next/link";

import CartContext from "../../helpers/cart";
import { Media } from "reactstrap";
import { CurrencyContext } from "../../helpers/Currency/CurrencyContext";

const CartContainer = ({ icon }) => {
  const context = useContext(CartContext);
  const currContext = useContext(CurrencyContext);
  const symbol = currContext.state.symbol;
  const cartList = context.state;
  const total = context.cartTotal;

  return (
    <Fragment>
      <li className="onhover-div mobile-cart">
        <div className="cart-qty-cls">{cartList.length}</div>
        <Link href={`/page/account/cart`}>
          <div>
            <Media src={icon} className="img-fluid" alt="" />
            <i className="fa fa-shopping-cart"></i>
          </div>
        </Link>
        <ul className="show-div shopping-cart">
    
          {cartList.length > 0 ? (
            <div>
              <li>
                <div className="total">
                  <h5>
                    subtotal :{" "}
                    <span>
                      {symbol}
                      {total}
                    </span>
                  </h5>
                </div>
              </li>
              <li>
                <div className="buttons view-cart">
                  <Link href={`/page/account/cart`}>
                    <a>Ver Carrito</a>
                  </Link>
                  <Link href={`/page/account/checkout`}>
                    <a className="checkout">checkout</a>
                  </Link>
                </div>
              </li>
            </div>
          ) : (
            <li>
              <h5>Tu cesta está vacia actualmente.</h5>
            </li>
          )}
        </ul>
      </li>
    </Fragment>
  );
};

export default CartContainer;
