import './App.css';
import About from './components/About/index';
import Nav from './components/Nav/index'; 
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
// import Homepage from './components/Homepage/index'; 
//import Test from './components/Test page/index'; 
import Contact from './components/Contact/index'; 
import Portfolio from './components/Portfolio/index'; 
import Resume from './components/Resume/index'; 

function App() {
  return (
<div>
  <Router>
<Nav/>
<main>
    <Switch>
      <Route exact path='/react-portfolio/' component = {About}/>
      {/* <Route exact path="/"><Redirect to="/about"/><About/></Route> */}
      <Route exact path='/react-portfolio/about' component={ About }/>
      <Route exact path='/react-portfolio/contact' component={ Contact}/>
      <Route exact path='/react-portfolio/portfolio' component={Portfolio}/>
      <Route exact path='/react-portfolio/resume' component={Resume}/>
    </Switch>
</main>
</Router>
</div>
  );
}

export default App;
