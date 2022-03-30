import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Footer from './pages/Footer/Footer';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume/Resume';
import Services from './pages/Services/Services';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/portfolio">
            <Portfolio></Portfolio>
          </Route>
          <Route path="/resume">
            <Resume></Resume>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
