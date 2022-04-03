import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import {
    Row,
    Col,

} from "reactstrap";


const SubCategoryList = () => {
    const [loading, setLoading] = useState(true);
    const [subcategorylist, setSubCategorylist] = useState([]);
    const [disabled, setDisabled] = useState(false);

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
                    <Link to={`/updatesubcategory/${item.id}`} target="_blank">
                  <a>
                    <i className="fa fa-pencil btn-solid btn-xs" aria-hidden="true"></i>
                  </a>
                </Link>
                    </td>
                 {subcategorylist.length === 1 ? <td>
                        <button type="button" disabled={disabled} onClick={() => setDisabled(true)} className="fa fa-trash btn-solid btn-xs"></button>
                    </td>:<td>
                        <button type="button" disabled={false} onClick={ (e) => deleteSubCategory(e, item.id) } className="fa fa-trash btn-solid btn-xs"></button>
                    </td>}
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