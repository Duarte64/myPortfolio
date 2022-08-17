import React from 'react';
import Header from './components/Header';
import Home from './modules/Home';
import About from './modules/About';
import Contact from './modules/Contact';
import Projects from './modules/Projects';
import GlobalStyles from './assets/styles/global';
import defaultTheme from './assets/styles/themes/default';
import { ThemeProvider } from 'styled-components';

function App() {
    return (
        <React.Fragment>
            <ThemeProvider theme={defaultTheme}>
                <GlobalStyles />
                    <Header/>
                    <Home />
                    <About />
                    <Projects />
                    {/* <Contact /> */}
            </ThemeProvider>
        </React.Fragment>
    );
}

export default App;
