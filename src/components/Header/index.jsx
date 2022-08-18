import { useEffect, useMemo } from 'react';
import ScrollReveal from 'scrollreveal';
import {HeaderContainer, Navigation} from './style';
import logo from '../../assets/images/logo.png';
import CV from '../../assets/documents/CV-Duarte.pdf'
import { Download } from 'react-bootstrap-icons';

export default function Header() {
    
    const itens = useMemo(() => [
        'Intro',
        'About',
        'Jobs',
        'Projects',
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
                <li>
                    <a href={CV} download="CV_GabrielDuarte"><Download />Résumé</a>
                </li>
            </Navigation>
        </HeaderContainer>
    );
}