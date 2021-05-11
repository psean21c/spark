
import Navbar from './Navbar';
import StudentHome from './StudentHome';
import StudentCreate from './StudentCreate';
import StudentDetails from './StudentDetails';

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
          <Route path="/student/:id">
              <StudentDetails />
            </Route>          
        </Switch>
      </div>
    </div>
    </Router>
  )
}

export default App;

