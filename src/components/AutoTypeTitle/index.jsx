import React, {useEffect, useRef} from 'react';
import propTypes from 'prop-types';
import Typed from 'typed.js';
import { TitleArea, Title } from './style';
import ScrollReveal from 'scrollreveal';

export default function AutoTypeTitle({
    strings, 
    typeSpeed, 
    backSpeed, 
    loop, 
    fontSize, 
    cursorSize,
    revealAnimation
}) {
    // Create reference to store the DOM element containing the animation
	const el = useRef(null);
    // Create reference to store the Typed instance itself
    const typed = useRef(null);
  
    useEffect(() => {
      const options = {
        strings: strings,
        typeSpeed: typeSpeed,
        backSpeed: backSpeed,
        loop: loop
      };
      
      if (revealAnimation) {
        ScrollReveal().reveal('.autoType' , {
            duration: revealAnimation.duration, 
            origin: revealAnimation.origin, 
            distance: revealAnimation.distance, 
            delay: revealAnimation.delay, 
            easing: revealAnimation.easing
        });
      }
      
      // elRef refers to the <span> rendered below
      typed.current = new Typed(el.current, options);
      
      return () => {
        // Make sure to destroy Typed instance during cleanup
        // to prevent memory leaks
        typed.current.destroy();
      }
    }, [revealAnimation, strings, typeSpeed, backSpeed, loop])

    return(
        <TitleArea className="autoType" cursorSize={cursorSize}>
            <Title ref={el} fontSize={fontSize} as='h1'/>
        </TitleArea>
    )
}

AutoTypeTitle.defaultProps = {
    typeSpeed: 25,
    backSpeed: 25,
    loop: true,
    tag: 'span',
    fontSize: '16px',
    cursorSize: '16px',
    revealAnimation: null,
};

AutoTypeTitle.propTypes = {
	strings: propTypes.arrayOf(propTypes.string).isRequired, 
	typeSpeed: propTypes.number,
    backSpeed: propTypes.number,
    loop: propTypes.bool,
    tag: propTypes.string,
    fontSize: propTypes.string,
    cursorSize: propTypes.string,
    revealAnimation: propTypes.object,
}