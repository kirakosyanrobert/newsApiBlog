import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Search from './Components/UI/Search/Search';
import Categories from './Components/UI/Categories/Categories'
import Widget from './Components/UI/Widget/Widget';
import Crypto from './Components/Crypto/Crypto';

const App = () => {
    return (
      <BrowserRouter>
          <Header />
          <div className="container">
            <div className="row">
              <div className="col-md-8 mt-4">
                  <Route path="/" exact component={Home} />
              </div>
              <div className="col-md-4">
                  <Crypto />
                  <Search />
                  <Categories />
                  <Widget />
              </div>
            </div>
          </div>
          <Footer />
      </BrowserRouter>
    );
}


export default App;
