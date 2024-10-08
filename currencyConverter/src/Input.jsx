import "./Input.css"

export default function Input({label,disable=false,currency,value,valueChange,setCurrency,options=[]}){
   
    
    return(
        <>
        <div className="container">
            <div>
            <label htmlFor="count">{label}</label>
            <input type="number" id="count" value={value} onChange={(e)=>valueChange(Number(e.target.value))} disabled={disable} />
            </div>
            <div>
            <label htmlFor="options">Currency Type</label>
            <select id="options" value={currency} onChange={(e)=>setCurrency(e.target.value)}>
                {options.map(ele=><option key={ele} value={ele}>{ele}</option>)}
            </select>
            </div>
        </div>
        </>
    )
}
