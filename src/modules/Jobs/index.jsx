import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { Separator } from "../../components/Separator";
import { Container } from "./style";
import AutoTypeTitle from "../../components/AutoTypeTitle";
import { jobsData } from "./data/jobsData";
import JobsPost from "./components/JobsPost";

const Jobs = () => {

    useEffect(() => {
        ScrollReveal().reveal('#about' , {duration: 600, origin:"bottom", distance: "2em", delay: 1000 , easing: "ease-in-out"}); 
    }, []);

    return (
        <Container id="jobs">
            <AutoTypeTitle
                strings={["CAREER", "职业", "CARREIRA", "キャリア"]}
                fontSize="24px"
                cursorSize="32px"
                AutoTypeTitle={undefined}
            />
            <Separator />
            {jobsData.map(job => <JobsPost job={job}/>)}
            <canvas class="webgl"></canvas>
        </Container>
    );
}

export default Jobs;