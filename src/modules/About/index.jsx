import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { Separator } from "../../components/Separator";
import { Container } from "./style";
import AutoTypeTitle from "../../components/AutoTypeTitle";
import DefaultList from "../../components/DefaultList";

export default function About() {

    useEffect(() => {
        ScrollReveal().reveal('#about' , {duration: 600, origin:"bottom", distance: "2em", delay: 1000 , easing: "ease-in-out"}); 
    }, []);
    
    return(
        <Container id="about">
            <AutoTypeTitle
                strings={["ABOUT ME", "關於我", "SOBRE MIM", "私について", "SOBRE MI", "OVER MIJ", "À PROPOS DE MOI", "TENTANG SAYA"]}
                fontSize="24px"
                cursorSize="32px"
                AutoTypeTitle={undefined}
            />
            <Separator />
            <p>
                My name is Gabriel and I live in São Paulo, Brazil. I'm at the moment in the last year of Science &amp; Technology Bacharel, the course is mainly focused in <span>Computer Science</span>, Math and Physichs. I'm also formed as <span>Web Developer</span> in associate degree.
            </p>
            <p>
                I had the privilege of working as intern in a huge company called <span>Itaú Unibanco</span>, the biggest financial conglomerat in Latin America, but at some point I realised the need of looking for new oportunities and experiences, and now I'm a <span>FullStack Engineer</span> at a start-up called  <span>Wikimee</span>!
            </p>
            <p>These are my main skills. I’ve been working with the following technologies recently:</p>
            <DefaultList 
                items={['HTML 5 / CSS 3', 'JavaScript (ES6+)', 'TypeScript', 'SASS / SCSS', 'React', 'NodeJS', 'MongoDB', 'Express']}
            />

        </Container>
    );
}