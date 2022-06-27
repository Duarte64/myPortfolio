import propTypes from "prop-types";
import { ListContainer } from "./style";
export default function DefaultList({items}) {
    return (
        <ListContainer>
            {items.map(item => (
                <li><span>&#9655;</span> {item}</li>
            ))}
        </ListContainer>
    )
}

DefaultList.propTypes = {
    items: propTypes.arrayOf(propTypes.string),
};

