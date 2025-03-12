import React from "react";
import Band from "../Band/Band";
import style from "./Main.module.css";

const bandas = [
    {
        nome: 'Banda 01',
        imagem: 'https://cdn.ontourmedia.io/gunsnroses/site_v2/animations/gnr_loop_logo_01.jpg',
        descricao: 'Descrição da Banda 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        
    },
    {
        nome: 'Banda 02',
        imagem: 'https://cdn.ontourmedia.io/gunsnroses/site_v2/animations/gnr_loop_logo_01.jpg',
        descricao: 'Descrição da Banda 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit',
           
    },
    {
       
        nome: 'Banda 03',
        imagem: 'https://cdn.ontourmedia.io/gunsnroses/site_v2/animations/gnr_loop_logo_01.jpg',
        descricao: 'Descrição da Banda 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        nome: 'Banda 04',
        imagem: 'https://cdn.ontourmedia.io/gunsnroses/site_v2/animations/gnr_loop_logo_01.jpg',
        descricao: 'Descrição da Banda 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    }
];

function Main() {
    return(
        <main className={style.main}>
            {
                bandas.map((banda, index)=> (
                    <section className={style.section}>
                        <Band Key={index} {...banda} />
                    </section>
                ))
            }
        </main>
    );
}

export default Main;