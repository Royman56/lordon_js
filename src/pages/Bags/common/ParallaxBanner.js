import React from "react";

const ParallaxBanner = () => {
  return (
    <section className="p-0">
      <div className="full-banner banner-layout-3 parallax text-center p-center parallax-banner2">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="banner-contain">
                <h4 className="color pt-0">ofertas especiales para ti</h4>
                <h3>bolso de cuero</h3>
                <h4>50% de descuento adicional</h4>{" "}
                <a href="#" className="btn btn-solid">
                  comprar ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ParallaxBanner;
