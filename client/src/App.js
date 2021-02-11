import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nav from './components/Nav';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Recipe from './pages/Recipe';

const App = () => (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/recipe/:name">
            <Recipe />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
);

export default App;
