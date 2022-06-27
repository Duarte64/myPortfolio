import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { Container } from "./style";
import linkedin from '../../assets/images/linkedin.png';
import github from '../../assets/images/github.png';
import email from '../../assets/images/email.png';

export default function Contacts() {

    useEffect(() => {
        ScrollReveal().reveal('.contactsTitle' , {duration: 300, origin:"top", distance: "1em", delay: 1800 , easing: "ease-in-out"});
    }, [])

    return (
        <Container className="contactsTitle">
            <p>Contacts</p>
            <a  
                href="https://www.linkedin.com/in/gabriel-duarte-da-paz-figueiredo-3aaa35197/" 
                rel="noreferrer" 
                target="_blank"
            >
                <img className="1" src={linkedin} alt="LinkedIn" />
            </a>
            <a  
                href="https://github.com/Duarte64" 
                rel="noreferrer" 
                target="_blank"
            >
                <img src={github} alt="GitHub" />
            </a>
            <a 
                href="mailto:gabriel.duatepaz@gmail.com" 
                rel="noreferrer" 
                target="_blank">
                <img src={email} alt="Mail" />
            </a>
        </Container>
    )
}