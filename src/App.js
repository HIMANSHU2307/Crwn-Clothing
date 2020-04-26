import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop-page.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {

      this.setState({currentUser: user});
      
      console.log(this.state);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInAndSignUp}/>
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
  
}

export default App;

// Routes => Route, Switch
// Check out props in console for match, history and location property to use the route dynamically