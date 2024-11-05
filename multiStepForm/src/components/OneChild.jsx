import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function OneChild({name,setName,email,setEmail,phone,setPhone}) {
  let [to,setTo] = useState("/")
  function verify(){
    if(!(name=="")&&(phone.toString().length==10)){
      setTo="/two"
    }
    else{
      // cons)
    }
   
  }
  return (
    <div className="first">
      <div>
      <label htmlFor="name">Name</label><br />
      <input className="fInput"
        type="text"
        placeholder="e.g. Stephen King"
        id="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      </div>
      <div>
      <label htmlFor="email">Email Address</label><br />
      <input className="fInput"
        type="email"
        placeholder="e.g. StephenKing@lorem.com"
        id="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      </div>
      <div>
      <label htmlFor="phone">Phone Number</label><br />
      <input className="fInput"
        type="number"
        placeholder="e.g. +1 234 567 890"
        id="phone"
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />
      </div>
      <button onClick={verify}><NavLink to={to}>next</NavLink></button>
    </div>
  );
}

export default OneChild;
