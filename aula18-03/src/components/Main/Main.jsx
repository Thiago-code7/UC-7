
import React from "react";
import { Link } from "react-router-dom";
import Band from "../Band/Band";
import style from "./Main.module.css";
import bandas from "../../data/BancoBands";


function Main() {
    return(
        <main className={style.main}>
            {
                bandas.map((banda, index)=> (

              <section>
                 <Band Key={index} {...banda} />
                <Link Key={banda.id} to={`band/${banda.id}`}>
                   <p>Clique aqui para ler mais sobre...</p>
                </Link>
              </section>
                ))
            }
        </main>
    );
}

export default Main;
