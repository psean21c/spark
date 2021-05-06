
import Navbar from './Navbar';
import StudentHome from './StudentHome';
import Student from './Student';
// import Create from './Create';
// import BlogDetails from './BlogDetails';
// import Login from './Login';

import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <StudentHome/>
          </Route>
          <Route path="/add">
            <Student/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  )
}

export default App;

