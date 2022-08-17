import React from 'react';
import {Container, CompleteDescription, ImagePreview} from './style';

const JobPost = ({project}) => {
    return(
        <Container>
            <CompleteDescription>
                <div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                </div>
            </CompleteDescription>
        </Container>
    );
}

export default JobPost;