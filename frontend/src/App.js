import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CategoryContainer from './containers/CategoryContainer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="site-main">
          <Route path="/" exact component={Home} />
          <Route path="/category" component={CategoryContainer} />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
