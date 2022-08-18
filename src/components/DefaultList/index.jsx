import propTypes from "prop-types";
import { ChevronRight } from "react-bootstrap-icons";
import { ListContainer } from "./style";
export default function DefaultList({items}) {
    return (
        <ListContainer>
            {items.map(item => (
                <li><ChevronRight />{item}</li>
            ))}
        </ListContainer>
    )
}

DefaultList.propTypes = {
    items: propTypes.arrayOf(propTypes.string),
};

