import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Header from './pages/Header/Header';
import Home from './pages/Header/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Services from './pages/Services/Services';
import Skills from './pages/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Router>
          <Header></Header>
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
            <Route path="/skills">
              <Skills></Skills>
            </Route>
            <Route path="/portfolio">
              <Portfolio></Portfolio>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            {/* <Route path="*">
              <NotFound></NotFound>
            </Route> */}

          </Switch>
          {/* <Footer></Footer> */}
        </Router>
    </div>
  );
}

export default App;
