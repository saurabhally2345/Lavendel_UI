import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import Home from './home/home';
import signIn from './signIN/signIN';
// import Admin from './admin/admin';
import createLead from './reusable_components/createLead/createLead';
import ManageLead from './reusable_components/managelead/managelead';
import CreateServices from './reusable_components/createservices/createservices';
import Mylead from './reusable_components/mylead/mylead';
import List from './reusable_components/createcategories/createcategories';
import Register from './components/register/register';
import Bathroom from './components/servicerequest/bathroomRequestService';
import {connect} from 'react-redux';

class App extends Component {


  render() {
    return (
      <Router>

        <div>
          <Route exact path="/" component={Register} />
          <Route exact path="/signin" component={signIn} />
          <Route exact path="/services" component={Home} />
          <Route exact path="/createlead" component={createLead} />
          <Route exact path="/managelead" component={ManageLead} />
          <Route exact path="/createservices" component={CreateServices} />
          <Route exact path="/mylead" component={Mylead} />
          <Route exact path="/createcategories" component={List} />
          <Route exact path="/bathroom" component={Bathroom} />
        </div>

      </Router>
    );

  }
}

export default connect()(App);
