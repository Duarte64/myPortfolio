import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { Separator } from "../../components/Separator";
import { Container } from "./style";
import AutoTypeTitle from "../../components/AutoTypeTitle";
import ProjectPost from "./components/ProjectPost";
import { projectsData } from "./data/projects";

export default function About() {

    useEffect(() => {
        ScrollReveal().reveal('#projects' , {duration: 600, origin:"bottom", distance: "2em", delay: 1000 , easing: "ease-in-out"}); 
    }, [])
    return(
        <Container id="projects">
            <AutoTypeTitle
                strings={["PROJECTS", "项目", "PROYECTOS", "PROJETOS", "プロジェクト", "PROJECTEN"]}
                fontSize="24px"
                cursorSize="32px"
            />
            <Separator />
            {projectsData.map(project => <ProjectPost project={project}/>)}
        </Container>
    );
}