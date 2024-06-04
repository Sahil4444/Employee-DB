import React, { useState } from "react";
import Employees from "./Employees";
import { useNavigate } from "react-router-dom";

export default function Update() {
  const [name, setName] = useState("");
  const [salaray, setSalary] = useState(0);
  const [age, setAge] = useState(0);

  let history = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();

    let uniqueId = Employees.length + 101;
    let a = name;
    let b = age;
    let c = salaray;

    Employees.push({id: uniqueId, Name: a, Age: b, Salary: c});
    history("/Employee-DB");
  }

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
            onChange={(e)=> setName(e.target.value)}
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
            onChange={(e)=> setSalary(e.target.value)}
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
            onChange={(e)=> setAge(e.target.value)}
          />
        </div>
        <button type="submit" onClick={(e)=> handleSubmit(e)} className="btn btn-primary btn-sm">Add Employee</button>
      </form>
    </div>
  );
}
