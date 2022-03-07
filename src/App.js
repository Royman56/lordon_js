import React, { useEffect, useState } from "react";
import "../src/assets/scss/app.scss";
import Helmet from "react-helmet";
import axios from "axios";
import ReactGa from 'react-ga';
import Become from "./pages/page/vendor/common/become";
axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config){
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;

});

function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);
  const [url, setUrl] = useState();

  useEffect(() => {
    ReactGa.initialize('UA-215687577-1');
    ReactGa.pageview(window.location.pathname + window.location.search);
    const path = window.location.pathname.split("/");
    const url = path[path.length - 1];
    setUrl(url);
    document.body.classList.add("dark");
    setTimeout(function () {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    
    <>
    
      {isLoading ? (
        <div className="loader-wrapper">
          {url === "Christmas" ? (
            <div id="preloader"></div>
          ) : (
            <div className="loader"></div>
          )}
        </div>
      ) : (
        <>
          <Helmet>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <title>Lordon</title>
          </Helmet>

          <Become/>
         
          {/*<div>
            <SettingProvider>
              <CompareContextProvider>
                <CurrencyContextProvider>
                  <CartContextProvider>
                    <WishlistContextProvider>
                      <FilterProvider>
                        <Component {...pageProps} />
                      </FilterProvider>
                    </WishlistContextProvider>
                  </CartContextProvider>
                </CurrencyContextProvider>
                <ThemeSettings />
              </CompareContextProvider>
            </SettingProvider>
            <ToastContainer />
            <TapTop />
          </div>*/}

          
        
        </>
        
      )}
    </>
  );
}


export default App;
