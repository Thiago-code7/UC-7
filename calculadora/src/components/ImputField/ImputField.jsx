import React from "react";

function ImputField({label, value, onChange}){
    return(
        <>
        <div>
            <label>{label}</label>
            <input type="number" value={value} onChange={onChange}/>
        </div>
        </>
    )
}

export default ImputField;

