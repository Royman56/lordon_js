import React, { useEffect, useState } from 'react';
import MenuItems from './MenuItems';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);

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
            <Link to={`/collections/${item.slug}`}
            onClick={() => setDropdown(false)}>

                    <h5 className='text-dropdown'>{item.name}</h5>
             
            </Link>
          </div>


        )
      });

  return (
    <>
      <ul
        className={dropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        
     
            <li>
              
              {showSubCategoryList}
            </li>
      
     
      </ul>
    </>
  );
}

export default Dropdown;