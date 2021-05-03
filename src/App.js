
import Navbar from './Navbar';
import Home from './Home';
import Blog from './Blog';
import BlogDetails from './BlogDetails';
import Login from './Login';

import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/create">
            <Blog/>
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  )
}

export default App;

