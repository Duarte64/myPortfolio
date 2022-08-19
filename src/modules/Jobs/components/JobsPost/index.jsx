import React from 'react';
import { Container, TextArea, ImageContainer } from "./style";
import { Separator } from "../../../../components/Separator";

const JobsPost = ({job}) => {
    return (
        <Container id={job.id}>
            <Separator />
             <TextArea id={job.id}>
                <h3>{job.title}</h3>
                <p>{job.description}</p>
                {job.icon}
            </TextArea>
            <ImageContainer src={job?.image} id={job.id} />
        </Container>
    );
}

export default JobsPost;