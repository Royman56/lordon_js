import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from "next/link";
import swal from 'sweetalert';
import {
    Row,
    Col,

} from "reactstrap";


const CategoryList = () => {
    const [loading, setLoading] = useState(true);
    const [categorylist, setCategorylist] = useState([]);

    useEffect(() => {
        axios.get(`/api/view-category`).then(res => {
            //console.log(res.data.category);
            if(res.status === 200)
            {
               setCategorylist(res.data.category)
            }
           setLoading(false);

        });
    }, []);

    const deleteCategory = (e, id) => {

        e.preventDefault();
        const thisClicked = e.currentTarget;

        axios.delete(`/api/delete-category/${id}`).then(res => {
            if(res.data.status === 200)
            {
               swal("Categoria Eliminada","","success");
               thisClicked.closest("tr").remove();
            }else if (res.data.status === 404) {
                swal("Categoria Eliminada",res.data.message,"error");
            }

        });

    }
    var viewcategory_HTMLTABLE = "";
    if (loading) {

        return <h4>Loading Category</h4>
        
    }else{
        viewcategory_HTMLTABLE =
        categorylist.map( (item) => {
            return(
                <tr key={item.id}>
                    
                    <td>{item.name}</td>
                    <td><img src={`https://desolate-bayou-69148.herokuapp.com/${item.image}`} width="50px" alt={item.name}/></td>
                    <td>
                    <Link href={`/updatecategory/${item.id}`}>
                  <a>
                    <i className="fa fa-pencil btn-solid btn-xs" aria-hidden="true"></i>
                  </a>
                </Link>
                    </td>
                 
                    <td>
                        <button type="button" onClick={ (e) => deleteCategory(e, item.id) } className="fa fa-trash btn-solid btn-xs"></button>
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
                            <th scope="col">Nombre Categoria</th>
                            <th scope="col">Imagen Categoria</th>
                        </tr>
                    </thead>
                  <tbody>
                      {viewcategory_HTMLTABLE}
                  </tbody>
                </table>
            </Col>
        </Row>
    )

}

export default CategoryList