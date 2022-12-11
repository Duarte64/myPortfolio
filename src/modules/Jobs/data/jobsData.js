import itau from '../../../assets/images/itau.jpg';
import wikimee from '../../../assets/images/wikimee.jfif';
import {Bank} from 'react-bootstrap-icons';
import {Basket} from 'react-bootstrap-icons';

export const jobsData = [
    {
        id: 1,
        title: 'Itaú Unibanco',
        description: 'I had the pleasure of working as an intern in the biggest financial enterprise in all Latin America. There I learned much about all the process involved in software development and gave my first steps into writing code, where I decided to work as FullStack, where I can study and work a lot in Front-end and Back-end.',
        image: itau,
        icon: <Bank size={200} />,
    },
    {
        id: 2,
        title: 'Wikimee',
        description: 'Wikimee is a brazilian startup that develops a software to manage and connect marketing teams with big companies, providing solutions to more than 10 enterprises. In my day to day I work in the Front-end using HTML, CSS, TypeScript, React, Redux, Netlify, etc.',
        image: wikimee,
        icon: <Basket size={180} />,
    },
]