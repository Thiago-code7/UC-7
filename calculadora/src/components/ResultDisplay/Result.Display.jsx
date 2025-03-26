import React from "react";
import style from "./ResultDisplay.module.css";


function ResultDisplay({gorjeta, total}){

    return (
        <>
        <div className = {style.container}>
           <p className = {style.text}> Gorjeta: R$ {gorjeta} </p> 
           <p className = {style.text}> Total: R$ {total} </p>
        </div>
        </>
    );
}

export default ResultDisplay;