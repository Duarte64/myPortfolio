import React from 'react';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './assets/styles/global';
import defaultTheme from './assets/styles/themes/default';

import { BrowserRouter } from 'react-router-dom';

import Router from './routes';

import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
    return (
        <React.Fragment>
            <ThemeProvider theme={defaultTheme}>
                <GlobalStyles />
                    <BrowserRouter>
                        <Header/>
                    </BrowserRouter>
                    <Home />
                    <About />
                    <Projects />
                    <Contact />
            </ThemeProvider>
        </React.Fragment>
    );
}

export default App;
