import {HeaderContainer, Navigation} from './style';

import logo from '../../assets/images/logo.png';

export default function Header() {
    return(
        <HeaderContainer>
            <img src={logo} alt="" width="45" height="43"/>
            <Navigation>
                <li><a href="/" className="view-list-item" name="align__mobile"><span>1. </span>Home</a></li>
                <li><a href="/" className="view-list-item" name="about__me"><span>2. </span>About</a></li>
                <li><a href="/" className="view-list-item" name="about__me"><span>3. </span>Contact</a></li>
                <li><a href="/" className="view-list-item" name="Résumé"><span>↓ </span>Résumé</a></li>
            </Navigation>
        </HeaderContainer>
    );
}