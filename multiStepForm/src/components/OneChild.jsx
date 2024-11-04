import React from "react";
import { useState } from "react";

function OneChild({name,setName,email,setEmail,phone,setPhone}) {
  
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
    </div>
  );
}

export default OneChild;
