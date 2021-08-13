
import './App.css';

import {
  Switch,
  Route,
  BrowserRouter as Router
} from 'react-router-dom'

import Header from './components/layout/Header'

import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signin'
import Tours from './components/Tours'
import Guides from './components/Guides'



import UserState from './context/UserState'

import PrivateRoute from './components/PrivateRoute'
import AuthRoute from './components/AuthRoute.js'

function App() {
  return (
    <>
    <UserState>
      <Router>
        <Header />
        <Switch>
          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/signup" component={Signup} />


          <Route exact path="/" component={Home} />
          <Route exact path="/tours" component={Tours} />
          <Route exact path="/guides" component={Guides} />
        </Switch>
      </Router>
    </UserState>


    </>
  );
}

export default App;
