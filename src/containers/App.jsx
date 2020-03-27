import React from 'react';
import '../assets/style/app.scss';
import Header from '../components/Header';
import Search from '../components/Search';
import Footer from '../components/Footer';
import Carrusel from '../components/Carrusel';

const App = () =>(
    <div className="App">
        <Header />
            <Search />
                <Carrusel />
                    <Footer />
              
    </div>
);
export default App;