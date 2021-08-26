import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import { auth } from './firebase/firebase-utils';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';



class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      currentUser: null,
    }
  }

  unsubrscribeFromAuth = null;

  //open subscription
  componentDidMount(){
    this.unsubrscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser:user}); 
      console.log(user)
    } );
    
  }
  
  //to close subscription 
  componentWillUnmount(){
    this.unsubrscribeFromAuth();
  }

  render(){
    return (
      <div> 
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route path="/signin" component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
