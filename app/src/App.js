import React from 'react';


import {Route,BrowserRouter as Router,Switch, } from 'react-router-dom'

import Category from './Category'

import Home from './Home'

import Advertisement from './Advertisement'

function App() {
  return (

    <Router>
      <Switch>
        <Route path='/' exact={true} component={Home} />
        <Route path='/categories' exact={true} component={Category}/>
        <Route path='/advertisement' exact={true} component={Advertisement}/>

      </Switch>
    </Router>
    
  );
}

export default App;
