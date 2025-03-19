import {React, useState} from "react";
import {useParams, Link} from "react-router-dom";
import bandas from"../../data/BancoBands";
import Band from "../../components/Band/Band";
import Header from "../../components/Header/Header";
import Aside from "../../components/Aside/Aside";
import Footer from "../../components/Footer/Footer";
import style from "./BandDetalhes.module.css";


function BandDetalhes(){
    const {id} = useParams();
    const band = bandas.find((b) => b.id === parseInt(id));
    const [curiosidade, setCuriosidade] = useState();
     
    if(!band) {

    return (
        <>
            <Header />
            <div className={style.container}>
                <h2>Nenhuma Banda Encontrada</h2>
                <div>
                    <Link to={'/'} className={style.link}>Voltar</Link>
                </div>
            </div>
            <Aside />
            <Footer>

            </Footer>
        </>
    );
}
return (
    <>
        <Header />
        <div className={style.container}>
            <div>
                <Band {...band} />
                <p> {curiosidade}</p>
                <button onClick={()=>setCuriosidade(band.curiosidade)}>curiosidade</button> 
                <Link to={'/'} className={style.link}>Voltar</Link>
            </div>

        </div>
        <Aside />
        <Footer />

    </>
);
}

export default BandDetalhes;