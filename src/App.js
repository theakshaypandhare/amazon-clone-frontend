import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { Home } from './pages/Home';
import { Product } from './pages/Product';



const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/product" element={<Product/>}/>
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
