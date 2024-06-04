import React from "react";
import Employees from "./Employees";
import {Link, useNavigate} from 'react-router-dom';

export default function Home(props) {

  let history = useNavigate();

  const handleDelete = (id)=>{
    var index = Employees.map(function(e){
      return e.id
    }).indexOf(id);

    Employees.splice(index, 1);

    history("/Employee-DB");
  }

  const handleEdit = (id, name, age, salary)=>{
    localStorage.setItem('Id', id);
    localStorage.setItem('Name', name);
    localStorage.setItem('Age', age);
    localStorage.setItem('Salary', salary);

  }
  return (
    <div className="container my-5">
      <table className={`table table-bordered table-striped ${props.mode==='light'?'':'table-dark'} table-hover`}>
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Salary</th>
            <th scope="col">Age</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Employees && Employees.length > 0 ? (
            Employees.map((item, i) => {
              return (
                  <tr key={i}>
                    <th scope="row">{item.id}</th>
                    <td>{item.Name}</td>
                    <td>
                      <span>&#8360;</span>. {item.Salary}
                    </td>
                    <td>{item.Age}</td>
                    <td>
                      <Link to={`/edit`}>
                        <button type="button" className="btn btn-primary btn-sm me-2" onClick={()=> handleEdit(item.id, item.Name, item.Age, item.Salary)}>Update</button>
                      </Link>
                      <button type="button" className="btn btn-danger btn-sm" onClick={()=> handleDelete(item.id)}>Remove</button>
                    </td>
                  </tr>
              );
            })
          ) : (
            <>
              <tr>
                <th scope="row" colspan="5" className="py-3">No Data Found!</th>
              </tr>
            </>
          )}
        </tbody>
      </table>

      <Link to="/update">
        <button type="button" className="btn btn-primary btn-sm me-2">Add Employee</button>
      </Link>
    </div>
  );
}
