import React from 'react';
import ListTags from '../ListTags';
import {Container, CompleteDescription, CustomLink} from './style';

const ProjectPost = ({project}) => {
    return(
        <CustomLink href={project.link} target="_blank">
            <Container>
                <CompleteDescription>
                    <div>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <ListTags tags={project.tags}/>
                    </div>
                </CompleteDescription>
            </Container>
        </CustomLink>
    );
}

export default ProjectPost;