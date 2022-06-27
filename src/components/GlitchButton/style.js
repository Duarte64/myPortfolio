import styled from 'styled-components';

export const GlitchButton = styled.button`
    .glitch-container{
        height: 70px;
        width: 330px;
    }

    .glitch-container span,span::after{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150px;
        height: 50px;
        font-weight:900;
        background:linear-gradient(135deg, ${({theme}) => theme.colors.red.main} 95%, transparent 5%);
        border:0;
        color:#101916;
        letter-spacing:1.8px;
        line-height:1.25em;
        position:relative;
        text-transform: uppercase;
    }

    .glitch-container span::after{
        width:100%;
        height:100%;
        --slice-0:inset(50% 50% 50% 50%);
        --slice-1:inset(80% -6px 0 0);
        --slice-2:inset(50% -6px 30% 0);
        --slice-3:inset(10% -6px 85% 0);
        --slice-4:inset(40% -6px 43% 0);
        --slice-5:inset(80% -6px 5% 0);
        content:"I'll send you a response!";
        display:flex;
        position:absolute;
        left:0;
        top:0;
        background:linear-gradient(135deg,${({theme}) => theme.colors.red.main} 95%, #000 5%);
        text-shadow: -3px -3px 0 #000 , 3px 3px 0 ${({theme}) => theme.colors.red.main};
        clip-path:var(--slice-0);
    }

    .glitch-container span:hover::after{
        animation: glitch 1s;
        animation-timing-function:steps(2,end);
    }

    @keyframes glitch {
        0% {
            clip-path: var(--slice-1);
            transform: translate(-20px, -10px);
        }

        10% {
            clip-path: var(--slice-3);
            transform: translate(10px, 10px);
        }

        20% {
            clip-path: var(--slice-1);
            transform: translate(-10px, 10px);
        }

        30% {
            clip-path: var(--slice-3);
            transform: translate(0px, 5px);
        }

        40% {
            clip-path: var(--slice-2);
            transform: translate(-5px, 0px);
        }

        50% {
            clip-path: var(--slice-3);
            transform: translate(5px, 0px);
        }

        60% {
            clip-path: var(--slice-4);
            transform: translate(5px, 10px);
        }

        70% {
            clip-path: var(--slice-2);
            transform: translate(-10px, 10px);
        }

        80% {
            clip-path: var(--slice-5);
            transform: translate(20px, -10px);
        }

        90% {
            clip-path: var(--slice-1);
            transform: translate(-10px, 0px);
        }

        100% {
            clip-path: var(--slice-1);
            transform: translate(0);
        }
    }
`;

