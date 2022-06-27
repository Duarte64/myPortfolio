import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { Separator } from "../../components/Separator";
import { Container } from "./style";
import DefaultList from "../../components/DefaultList";

export default function About() {

    useEffect(() => {
        ScrollReveal().reveal('.about' , {duration: 600, origin:"bottom", distance: "2em", delay: 600 , easing: "ease-in-out"}); 
    }, [])
    return(
        <Container className="about">
            <h1>STATIC</h1>
            <Separator />
            <p>
                My name is Gabriel and I live in São Paulo, Brazil. I'm at the moment in the last year of Science &amp; Technology Bacharel, the course is mainly focused in <span>Computer Science</span>, Math and Physichs. I'm also formed as <span>Web Developer</span> in associate degree.
            </p>
            <p>
                I had the privilege of working as intern in a huge company called <span>Itaú Unibanco</span>, the biggest financial conglomerat in Latin America, but at some point i realised the need of looking for new oportunities and experiences, and now I'm a <span>Front-end Engineer</span> at a start-up called  <span>Wikimee</span>!
            </p>
            <p>These are my main skills. All of this I’ve been working with recently:</p>
            <DefaultList 
                items={['HTML 5', 'JavaScript (ES6+)', 'CSS 3', 'TypeScript', 'SASS / SCSS', 'React']}
            />

        </Container>
    );
}