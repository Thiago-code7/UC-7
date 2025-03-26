import React from "react";
import style from "./ImputField.module.css"

function ImputField({label, value, onChange}){
    return(
        <>
        <div className = {style.container}>
            <label>{label}</label>
            <input type="number" value={value} onChange={onChange}/>
        </div>
        </>
    )
}

export default ImputField;

