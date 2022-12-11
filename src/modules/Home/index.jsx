import {useEffect} from "react";
import ScrollReveal from "scrollreveal";
import { Container } from "./style";
import Contacts from "../../components/Contacts";
import memoji from '../../assets/images/memoji.png';
import AutoTypeTitle from "../../components/AutoTypeTitle";

export default function Home() {

    useEffect(() => {
        ScrollReveal().reveal('.image' , {duration: 300, origin:"top", distance: "1em", delay: 750 , easing: "ease-in-out"}); 
        ScrollReveal().reveal('.text' , {duration: 300, origin:"top", distance: "1em", delay: 1500 , easing: "ease-in-out"});       
    }, []);

    return(
        <Container id="intro">
            <img className="image" src={memoji} alt="Memoji of myself"/>
            <AutoTypeTitle 
                strings={["Bem Vindo", "歡迎", "Welcome", "Bienvenido", "ようこそ", "Welkom", "Bienvenue"]}
                typeSpeed={45}
                backSpeed={50}
                fontSize="64px"
                cursorSize="76px"
                revealAnimation={{
                    duration: 300, 
                    origin: 'top', 
                    distance: '1em', 
                    delay: 1250, 
                    easing: "ease-in-out"  
                }}
            />
            <p className="text">
                My name is Gabriel Duarte and I'm a FullStack Jr. Software Developer raised in São Paulo, Brazil. 
                Currently, I’m focused on building some new products at Wikimee.
            </p>
            <Contacts/>
        </Container>
    );
}