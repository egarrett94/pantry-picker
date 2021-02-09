import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {useState} from 'react';
import axios from 'axios';


const App = () => {


  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            {/* <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route> */}
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

const Home = () => {
  const [post, setPost] = useState('')
  const [response, setResponse] = useState()
  
  const handleChange = e => {
    setPost(e.target.value)
  } 

  const handleSubmit = async e => {
    e.preventDefault();

    await axios.post('/api/world', { post })
      .then(({data}) => {   
        console.log('DATA', data)
        
        setResponse(data.hits.map((hit => {
          return <li>{hit.recipe.label}</li>
        })))
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div>
      <h1>Home</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <strong>Post to Server:</strong>
        </p>
        <input
          type="text"
          value={post}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
        <h3>Response: </h3>
        <ul>
          {response}
        </ul>
      </form>
    </div>
  )
}

export default App;
