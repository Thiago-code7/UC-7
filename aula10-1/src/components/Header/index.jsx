import React from "react";
import style from './Header.module.css'

const Header = () => {
    return (
        <>
            <header className={style.header}>
                <h1>Senac sala de aula Virtual</h1>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/sobre">Sobre</a></li>
                        <li><a href="contato">Contato</a></li>
                    </ul>
                </nav>
            </header>
     </>
    );
};
export default Header;