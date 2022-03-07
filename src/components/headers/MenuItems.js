import React, { Fragment, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "reactstrap";
import axios from 'axios';


const MenuItems = () => {
  const [loading, setLoading] = useState(true);
  const [subcategory, setSubCategory] = useState([]);

  useEffect(() => {
    let isMountered = true;

    axios.get(`/api/getSubCategory`).then(res => {
      if (isMountered) {

        if (res.data.status === 200) {
          setSubCategory(res.data.subcategory);
          setLoading(false);
        }
      }
    });
    return () => {
      isMountered = false;
    }
  });

    var showSubCategoryList = '';
    showSubCategoryList =
      subcategory.map((item, idx) => {
        return (

          <div className="col-md-6" key={idx}>
            <Link to={`/collections/${item.slug}`}>

                    <h4>{item.name}</h4>
             
            </Link>
          </div>


        )
      });


  return (
      <Fragment >
        {/*collection banner*/}
            {showSubCategoryList}


        {/*collection banner end*/}
      </Fragment>
  );
};

export default MenuItems;