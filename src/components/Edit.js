import React, { useState, useEffect } from "react";
import Employees from "./Employees";
import { useNavigate } from "react-router-dom";

export default function Edit() {
  const [name, setName] = useState("");
  const [salaray, setSalary] = useState(0);
  const [age, setAge] = useState(0);
  const [id, setId] = useState("");

  let history = useNavigate();

  var index = Employees.map(function(e){
    return e.id
  }).indexOf(id);

  const handleSubmit = (e) =>{
    e.preventDefault();

    let a = Employees[index];
    a.Name = name;
    a.Age = age;
    a.Salary = salaray;
    
    history("/Employee-DB");
  }

  useEffect(()=>{
    setName(localStorage.getItem('Name'))
    setId(localStorage.getItem('Id'))
    setAge(localStorage.getItem('Age'))
    setSalary(localStorage.getItem('Salary'))
  }, [])

  return (
    <div className="container mt-5">
      <form className="container py-4" style={{ width: "50%" }}>
        <div className="mb-4">
          <label htmlFor="exampleInputName" className="form-label">
            Name
          </label>
          <input
            required
            type="text"
            className="form-control"
            id="exampleInputName"
            aria-describedby="NameHelp"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="exampleInputName" className="form-label">
            Salary
          </label>
          <input
            required
            type="text"
            className="form-control"
            id="exampleInputName"
            aria-describedby="NameHelp"
            value={salaray}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="exampleInputName" className="form-label">
            Age
          </label>
          <input
            required
            type="text"
            className="form-control"
            id="exampleInputName"
            aria-describedby="NameHelp"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          className="btn btn-primary btn-sm"
        >
          Update Employee
        </button>
      </form>
    </div>
  );
}
