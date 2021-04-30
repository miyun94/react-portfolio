import './App.css';
import About from './components/About/index';
import Nav from './components/Nav/index'; 
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Homepage from './components/Homepage/index'; 
import Test from './components/Test page/index'; 

function App() {
  return (
<div>
  <Router>
<Nav/>
<main>
    <Switch>
      <Route exact path='/about' component={ About }/> 
      <Route exact path='/test' component={ Test }/>
      <Route component={ Homepage }/>
    </Switch>
</main>
</Router>
</div>
  );
}

export default App;