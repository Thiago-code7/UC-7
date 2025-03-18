import React from "react";
import styles from './Band.module.css';

function Band({imagem, nome, descricao}) {
    return (
        <div className={styles.band}>
            <img src={imagem} alt={`Banda ${nome}`} className={styles.imagem}/>
            <div className={styles.info}>
                <h2>{nome}</h2>
                <p>{descricao}</p>
                </div>
            </div>
    )
}

export default Band;
