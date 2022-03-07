import React, { Fragment,useEffect, useState } from "react";
import { Row,Container, Col, Media } from "reactstrap";
import Link from "next/link";
import axios from 'axios';

const SideBar = () => {
  const closeNav = () => {
    var closemyslide = document.getElementById("mySidenav");
    if (closemyslide) closemyslide.classList.remove("open-side");
  };

  const handleSubmenu = (event) => {
    if (event.target.classList.contains("sub-arrow")) {
      return;
    }

    if (event.target.nextElementSibling.classList.contains("opensub1"))
      event.target.nextElementSibling.classList.remove("opensub1");
    else {
      document.querySelectorAll(".opensub1").forEach(function (value) {
        value.classList.remove("opensub1");
      });
      event.target.nextElementSibling.classList.add("opensub1");
    }
  };

  const handleSubTwoMenu = (event) => {
    if (event.target.classList.contains("sub-arrow")) return;

    if (event.target.nextElementSibling.classList.contains("opensub2"))
      event.target.nextElementSibling.classList.remove("opensub2");
    else {
      document.querySelectorAll(".opensub2").forEach(function (value) {
        value.classList.remove("opensub2");
      });
      event.target.nextElementSibling.classList.add("opensub2");
    }
  };
  const handleSubThreeMenu = (event) => {
    if (event.target.classList.contains("sub-arrow")) return;

    if (event.target.nextElementSibling.classList.contains("opensub3"))
      event.target.nextElementSibling.classList.remove("opensub3");
    else {
      document.querySelectorAll(".opensub3").forEach(function (value) {
        value.classList.remove("opensub3");
      });
      event.target.nextElementSibling.classList.add("opensub3");
    }
  };

  const handleSubFourMenu = (event) => {
    if (event.target.classList.contains("sub-arrow")) return;

    if (event.target.nextElementSibling.classList.contains("opensub4"))
      event.target.nextElementSibling.classList.remove("opensub4");
    else {
      document.querySelectorAll(".opensub4").forEach(function (value) {
        value.classList.remove("opensub4");
      });
      event.target.nextElementSibling.classList.add("opensub4");
    }
  };

  const handleMegaSubmenu = (event) => {
    if (event.target.classList.contains("sub-arrow")) return;

    if (event.target.nextElementSibling.classList.contains("opensidesubmenu"))
      event.target.nextElementSibling.classList.remove("opensidesubmenu");
    else {
      event.target.nextElementSibling.classList.add("opensidesubmenu");
    }
  };

  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    let isMountered = true;

    axios.get(`/api/getCategory`).then(res => {
      if (isMountered) {
        
        if(res.data.status === 200)
        {
           setCategory(res.data.category);
            setLoading(false);
        }
      }
    });
    return() => {
      isMountered=false;
    }
  });

  if (loading) {
    
}else{
  var showCategoryList = '';
    showCategoryList =
    category.map( (item, idx) => {
        return(

                <div className="col-md-6" key={idx}>
                  <Link href={`/collections/${item.slug}`}>
                  <a>
                  {item.name}
                  </a>
                  </Link>
                </div>
              
            
        )
    });
}

  return (
    <Fragment>
      <div id="mySidenav" className="sidenav">
        <a href={null} className="sidebar-overlay" onClick={closeNav}></a>
        <nav>
          <a href={null} onClick={closeNav}>
            <div className="sidebar-back text-left">
              <i className="fa fa-angle-left pr-2" aria-hidden="true"></i> Volver
            </div>
          </a>
          <ul id="sub-menu" className="sidebar-menu">
            
            <li>

              {showCategoryList}
    
            
            </li>
    
     
          </ul>
        </nav>
      </div>
    </Fragment>
  );
};

export default SideBar;
