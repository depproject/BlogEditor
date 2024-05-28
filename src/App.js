import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import Add from './Add';

import { useState } from "react";

function App() {
  const[inx,setinx]=useState("1");
  return (
    <Router>
      <div className="App">
        <Navbar inx={inx} setinx={setinx} />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home inx={inx} />
            </Route>
            <Route path="/add">
              <Add inx={inx}/>
            </Route>
            <Route path="/:id">
              <BlogDetails i={inx}/>
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
