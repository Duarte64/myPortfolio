import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { Separator } from "../../components/Separator";
import { Container } from "./style";
import AutoTypeTitle from "../../components/AutoTypeTitle";
import JobPost from "../../components/JobPost";
import { projectsData } from "./data/projects";

export default function About() {

    useEffect(() => {
        ScrollReveal().reveal('#projects' , {duration: 600, origin:"bottom", distance: "2em", delay: 600 , easing: "ease-in-out"}); 
    }, [])
    return(
        <Container id="projects">
            <AutoTypeTitle
                strings={["PROJECTS", "项目", "PROYECTOS", "プロジェクト", "PROJECTEN", "PROJETS", "PROJEK"]}
                fontSize="24px"
                cursorSize="32px"
                AutoTypeTitle={undefined}
            />
            <Separator />
            {projectsData.map(project => <JobPost project={project}/>)}
        </Container>
    );
}