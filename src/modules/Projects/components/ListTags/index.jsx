import React from 'react';
import { List, ListItem } from './style';

const ListTags = ({tags}) => {
    return (
        <List>
            {tags.map(tag => (
                <ListItem key={tag}>{tag}</ListItem>
            ))}
        </List>
    );
}

export default ListTags;