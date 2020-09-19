import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import withAuthProvider, { AuthComponentProps } from './AuthProvider';
import NavBar from './NavBar';
import ErrorMessage from './ErrorMessage';
import Welcome from './Welcome';
import Calendar from './Calendar';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './home/home';
import signIn from './signIN/signIN';
import Admin from './admin/admin';
import Login from './views/pages/login/Login';

class App extends Component<AuthComponentProps> {
  render() {
    // let error = null;
    // if (this.props.error) {
    //   error = <ErrorMessage
    //     message={this.props.error.message}
    //     debug={this.props.error.debug} />;
    // }

    // <renderSnippet>
    return (
      <Router>
      
        <div>
          {/* <NavBar
            isAuthenticated={this.props.isAuthenticated}
            authButtonMethod={this.props.isAuthenticated ? this.props.logout : this.props.login}
            user={this.props.user}/> */}
          {/* <Container> */}
            {/* {error} */}
            {/* <Route exact path="/"
              render={(props) =>
                <Welcome {...props}
                  isAuthenticated={this.props.isAuthenticated}
                  user={this.props.user}
                  authButtonMethod={this.props.login} />
              } /> */}
            {/* <Route exact path="/calendar"
              render={(props) =>
                this.props.isAuthenticated ?
                  <Calendar {...props} /> :
                  <Redirect to="/" />
              } /> */}
                          <Route exact path="/"
              // render={(props) =>
              //   this.props.isAuthenticated ?
                  // <Calendar {...props} /> :
            component={signIn}/>
            <Route exact path="/services" component={Home}/>              
            <Route exact path="/admin" component={Admin}/>
            <Route exact path="/login" component={Login}/>   
       
       </div>
        
      </Router>
    );
    // </renderSnippet>
  }
}

export default withAuthProvider(App);
