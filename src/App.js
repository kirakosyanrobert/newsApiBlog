import React from 'react';
import {Route} from 'react-router-dom';
import './App.scss';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';

const App = () => {
    return (
      <>
        <Header />
        <div className="page-wrapper">
          <Route path="/" component={Home} />
        </div>
        <Footer />
      </>
    );
}


export default App;
