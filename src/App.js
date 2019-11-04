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
        <div className="container" style={{paddingTop: '56px', paddingBottom: '120px'}}>
          <Route path="/" component={Home} />
        </div>
        <Footer />
        </>
      );
  }

}

export default App;
