
import Navbar from './Navbar';
import StudentHome from './StudentHome';
import StudentCreate from './StudentCreate';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


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
          <Route path="/create">
            <StudentCreate/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  )
}

export default App;

