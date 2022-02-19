import React from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from './assets/styles/global';
import defaultTheme from './assets/styles/themes/default';

import Header from './components/Header';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
    return (
        <React.Fragment>
            <ThemeProvider theme={defaultTheme}>
                <GlobalStyles />
                <Header />
                <Home />
                <About />
                <Contact />
            </ThemeProvider>
        </React.Fragment>
    );
}

export default App;
