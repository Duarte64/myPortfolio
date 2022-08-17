import { useEffect, useMemo } from 'react';
import ScrollReveal from 'scrollreveal';
import {HeaderContainer, Navigation} from './style';
import logo from '../../assets/images/logo.png';

export default function Header() {
    
    const itens = useMemo(() => [
        'Intro',
        'About',
        'Jobs',
        'Projects',
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
                        <a href={`#${item.toLowerCase()}`}><span>{index+1}. </span>{item}</a>
                    </li>
                )}
            </Navigation>
        </HeaderContainer>
    );
}