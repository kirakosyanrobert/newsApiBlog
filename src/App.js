import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import './App.scss';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';

class App extends Component {
  
  render() {
      return (
        <>
          <Header />
          <h1>Gagas from Petrovsk</h1>
          <div className="page-wrapper">
            <Route path="/" component={Home} />
          </div>
          <Footer />
        </>
      );
  }

}

export default App;
