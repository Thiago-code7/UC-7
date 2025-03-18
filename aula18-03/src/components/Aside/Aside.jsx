import React from "react";
import styles from "./Aside.module.css";

function Aside(){
    return(
        <>
        <aside className={styles.aside}>
            <h2>Noticias do mundo do rock</h2>
            <p>leia as ultimas noticias, lancamentos e eventos do mundo do rock.</p>
        </aside>
        </>
    )
}

export default Aside;