import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';

const Hats = () => {
  return(
    <h1>Hats</h1>
  )
}


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop/hats' component={Hats}/>
      </Switch>
      {/* 
        exact returs boolean, exact={true}, path is string, component takes a 
        component declared name

        A <Switch> looks through all its children <Route> elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time you have multiple routes, but you want only one
        of them to render at a time
      */}
    </div>
  );
}

export default App;


// Routes => Route, Switch
// Check out props in console for match, history and location property to use the route dynamically