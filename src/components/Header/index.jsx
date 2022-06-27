import { useEffect, useMemo } from 'react';
import ScrollReveal from 'scrollreveal';
import { Link } from 'react-router-dom';
import {HeaderContainer, Navigation} from './style';
import logo from '../../assets/images/logo.png';

export default function Header() {
    
    const itens = useMemo(() => [
        'Home',
        'About',
        'Projects',
        'Contact',
        'Résumé',
    ], [])

    useEffect(() => {
        itens.forEach((item, index) => {
            ScrollReveal().reveal(`.${item}` , {duration: 300, origin:"top", distance: "1em", delay: (index * 150) , easing: "ease-in-out"});
        })    
    }, [itens]);


    return(
        <HeaderContainer>
            <img src={logo} alt="" width="45" height="43"/>
            <Navigation>
                {itens.map((item, index) => 
                    <li className={item}>
                        <Link to={`/${item.toLowerCase()}`}><span>{index+1}. </span>{item}</Link>
                    </li>
                )}
            </Navigation>
        </HeaderContainer>
    );
}