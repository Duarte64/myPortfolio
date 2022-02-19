import { useEffect, useRef } from "react";

import { Container } from "./style";

import Typed from 'typed.js';
import Title from "../../components/Title";
import Footer from "../../components/Footer";

import memoji from '../../assets/images/memoji.png';
import linkedin from '../../assets/images/linkedin.png';
import github from '../../assets/images/github.png';
import email from '../../assets/images/email.png';

export default function Home() {

    const autoInputMain = useRef(null);

    useEffect(() => {
        new Typed(autoInputMain.current, {
            strings: ["Bem Vindo", "歡迎", "Selamat Datang", "Welcome", "Bienvenido", "ようこそ", "Welkom", "желанный", "Bienvenue"],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true,
        });
    })

    return(
        <Container>
            <img src={memoji} alt="" />
            <Title ref={autoInputMain} />
            <p>My name is Gabriel Duarte and I'm a FrontEnd Jr. Software Developer raised in São Paulo, Brazil.</p>
            <Footer>
                <p>Contacts</p>
                <a href="https://www.linkedin.com/in/gabriel-duarte-da-paz-figueiredo-3aaa35197/" rel="noreferrer" target="_blank"><img src={linkedin} alt="LinkedIn" /></a>
                <a href="https://github.com/Duarte64" rel="noreferrer" target="_blank"><img src={github} alt="GitHub" /></a>
                <a href="mailto:gabriel.duatepaz@gmail.com" rel="noreferrer" target="_blank"><img src={email} alt="Mail" /></a>
            </Footer>
        </Container>
    );
}

/*
new Typed(".auto-input-main", {
    strings: ["Bem Vindo", "歡迎", "Welcome", "Bienvenido", "ようこそ", "Welkom", "желанный", "Selamat Datang", "Bienvenue"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});
*/