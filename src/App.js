import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Posts from './Components/Posts/Posts';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PostDetails from './Components/PostDetails/PostDetails';

function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
          <div>
            <Switch>
            <Route path={`/post/:keyId`}> 
              <PostDetails></PostDetails>
            </Route>

           <Route exect path="/"> 
            <Posts></Posts>               
            </Route>
            <Route path="*">
                <h3>404, Not found</h3>
            </Route>

            </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
