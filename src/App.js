import React from 'react';
import {Route} from 'react-router-dom';
import './App.scss';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Search from './Components/UI/Search/Search';

const App = () => {
    return (
      <>
        <Header />
        <div className="page__wrapper">
          <section className="page__content">
            <Route path="/" component={Home} />
          </section>
          <aside className="page__sidebar">
            <Search />
          </aside>
        </div>
        <Footer />
      </>
    );
}


export default App;
