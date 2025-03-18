
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
                <Link Key={banda.id} to={`band/${banda.id}`}>
                <Band Key={index} {...banda} />
                </Link>
              </section>
                ))
            }
        </main>
    );
}

export default Main;
