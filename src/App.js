
import './App.css';

import {
  Switch,
  Route,
  BrowserRouter as Router
} from 'react-router-dom'

import Header from './components/layout/Header'

import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Tours from './components/Tours'
import TourSpecs from './components/TourSpecs'
import Guides from './components/Guides'
import SignupGuide from './components/SignupGuide'
import Dashboard from './components/Dashboard'
import Checkout from './components/Checkout'
import PaymentCompleted from './components/paymentStatus/PaymentCompleted'

import UserState from './context/users/UserState'
import TourState from './context/tours/TourState'
import ReservationState from './context/reservations/ReservationState'

import PrivateRoute from './components/PrivateRoute'
import AuthRoute from './components/AuthRoute.js'


function App() {
  return (
    <>

    <UserState>
    <TourState>
    <ReservationState>
      <Router>

        <Header />


        <Switch>

          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          

          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/signup" component={Signup} />
          <AuthRoute exact path="/guide-signup" component={SignupGuide} />

          <Route exact path="/" component={Home} />
          <Route exact path="/tours" component={Tours} />
          <Route exact path="/guides" component={Guides} />
          <PrivateRoute exact path="/checkout" component={Checkout} />
          <PrivateRoute exact path="/tour-specs/:tourId" component={TourSpecs} />
          <PrivateRoute exact path="/payment-completed" component={PaymentCompleted} />
          

        </Switch>
        
      </Router>
    </ReservationState>
    </TourState>
    </UserState>

    </>
  );
}

export default App;
