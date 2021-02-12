import React from "react"
import './App.css';
import { BrowserRouter as Router ,Switch ,Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'
import AllComponents from './components/AllComponents'

function App() {
  return (
    <React.Fragment>
      <Router>
      <Navbar />

        <div className ="fit-window">
        <Switch>
        <Route path ="/" exact component ={AllComponents}  />
          <Route path ="/" exact component ={Home}  />
          <Route path ="/aboutme" exact component ={AboutMe}  />
          <Route path ="/projects" exact component ={Projects}  />
          <Route path ="/contactme" exact component ={ContactMe}  />

        </Switch>
        </div>
        
      </Router>
    </React.Fragment>
  );
}

export default App;
