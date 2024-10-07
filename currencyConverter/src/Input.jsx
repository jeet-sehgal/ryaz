import "./Input.css"

export default function Input({label,disable=false,currency,value=0,valueChange}){
   
    
    return(
        <>
        <div className="container">
            <div>
            <label htmlFor="count">{label}</label>
            <input type="number" id="count" value={value} onChange={(e)=>valueChange(e.target.value)} disabled={disable} />
            </div>
            <div>
            <label htmlFor="options">Currency Type</label>
            <select id="options">
                <option >{currency}</option>
            </select>
            </div>
        </div>
        </>
    )
}
