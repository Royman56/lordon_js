import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import {
    Row,
    Col,

} from "reactstrap";


const ProductList = () => {
    const [loading, setLoading] = useState(true);
    const [viewProduct, setProduct] = useState([]);

    useEffect(() => {
        axios.get(`/api/view-product`).then(res => {
            //console.log(res.data.category);
            if(res.data.status === 200)
            {
               setProduct(res.data.products);
               setLoading(false);
            }
           

        });
    }, []);

    const deleteProduct = (e, id) => {

        e.preventDefault();
        const thisClicked = e.currentTarget;

        axios.delete(`/api/delete-product/${id}`).then(res => {
            if(res.data.status === 200)
            {
               swal("Producto Eliminado","","success");
               thisClicked.closest("tr").remove();
            }else if (res.data.status === 404) {
                swal("Error","","error");
            }

        });

    }
    var display_Productdata = "";
    if (loading) {

        return <h4>Loading Products</h4>
        
    }else{
        display_Productdata =
        viewProduct.map( (item) => {
            return(
                <tr key={item.id}>
                    <td>{item.name_product}</td>
                    <td>{item.price_product}</td>
                    <td>{item.discount_price}</td>
                    <td><img src={`https://desolate-bayou-69148.herokuapp.com/${item.image1}`} width="50px" alt={item.name_product}/></td>
                    <td>
                    <Link to={`/updateproduct/${item.id}`} target="_blank">
                  <a>
                    <i className="fa fa-pencil btn-solid btn-xs" aria-hidden="true"></i>
                  </a>
                </Link>
                    </td>
                 
                    <td>
                        <button type="button" onClick={ (e) => deleteProduct(e, item.id) } className="fa fa-trash btn-solid btn-xs"></button>
                    </td>
                </tr>
            )
        });
    }

    return (
        <Row>
            <Col sm="12">
                <table className="table mb-0 table-responsive-sm">
                    <thead>
                        <tr>
                            <th scope="col">Categoria</th>
                            <th scope="col">Nombre Producto</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Descuento</th>
                            <th scope="col">Imagen</th>
                        </tr>
                    </thead>
                  <tbody>
                      {display_Productdata}
                  </tbody>
                </table>
            </Col>
        </Row>
    )

}

export default ProductList