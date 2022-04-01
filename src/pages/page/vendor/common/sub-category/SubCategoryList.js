import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import Link from "next/link";
import {
    Row,
    Col,

} from "reactstrap";


const SubCategoryList = () => {
    const [loading, setLoading] = useState(true);
    const [subcategorylist, setSubCategorylist] = useState([]);

    useEffect(() => {
        axios.get(`/api/view-subcategory`).then(res => {
            //console.log(res.data.category);
            if(res.status === 200)
            {
               setSubCategorylist(res.data.subcategory)
            }
           setLoading(false);

        });
    }, []);

    const deleteSubCategory = (e, id) => {

        e.preventDefault();
        const thisClicked = e.currentTarget;

        axios.delete(`/api/delete-subcategory/${id}`).then(res => {
            if(res.data.status === 200)
            {
               swal("Sub Categoria Eliminada","","success");
               thisClicked.closest("tr").remove();
            }else if (res.data.status === 404) {
                swal("Sub Categoria Eliminada",res.data.message,"error");
            }

        });

    }
    var viewsubcategory_HTMLTABLE = "";
    if (loading) {

        return <h4>Loading Category</h4>
        
    }else{
        viewsubcategory_HTMLTABLE =
        subcategorylist.map( (item) => {
            return(
                <tr key={item.id}>
                    
                    <td>{item.name}</td>
                    <td><img src={`https://desolate-bayou-69148.herokuapp.com/${item.image}`} width="50px" alt={item.name}/></td>
                    <td>
                    <Link href={`/updatesubcategory/${item.id}`}>
                  <a>
                    <i className="fa fa-pencil btn-solid btn-xs" aria-hidden="true"></i>
                  </a>
                </Link>
                    </td>
                 
                    <td>
                        <button type="button" onClick={ (e) => deleteSubCategory(e, item.id) } className="fa fa-trash btn-solid btn-xs"></button>
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
                            <th scope="col">Nombre Sub Categoria</th>
                            <th scope="col">Imagen Sub Categoria</th>
                        </tr>
                    </thead>
                  <tbody>
                      {viewsubcategory_HTMLTABLE}
                  </tbody>
                </table>
            </Col>
        </Row>
    )

}

export default SubCategoryList;