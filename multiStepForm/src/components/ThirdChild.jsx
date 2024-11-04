import React from "react";

function ThirdChild({data1=null,data2=null,data3=null}) {
  return (
    <div>
      <div>
        <input type="checkbox" name="addOns" id="addOns" />
        <label htmlFor="addOns">
          <div className="data">
            <div className="head">Online service</div>
            <div className="detail">Access to multiplyer games </div>
          </div>
          <div className="price">+${data1}</div>
        </label>
      </div>
      <div>
        <input type="checkbox" name="addOns" id="addOns" />
        <label htmlFor="addOns">
          <div className="data">
            <div className="head">Larger storage</div>
            <div className="detail">Extra 1TB cloud save</div>
          </div>
          <div className="price">+${data2}</div>
        </label>
      </div>
      <div>
        <input type="checkbox" name="addOns" id="addOns" />
        <label htmlFor="addOns">
          <div className="data">
            <div className="head">Customizable profile</div>
            <div className="detail">Custom theme on your profile </div>
          </div>
          <div className="price">+${data3}</div>
        </label>
      </div>
    </div>
  );
}

export default ThirdChild;
