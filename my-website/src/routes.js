import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/Home';
import Contact from './pages/Home';

function Paths() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
            </Routes>
        </Router>
    );
}