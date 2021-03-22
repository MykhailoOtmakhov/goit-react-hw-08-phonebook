import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from './components/Container/Container';
import './App.css'
import HomeView from './views/HomeView/HomeView';
import RegisterView from './views/RegisterView/RegisterView';
import LoginView from './views/LoginView/LoginView';
import { authOperations } from './redux/auth/index';
// import contactsSelectors from './redux/contacts/contacts-selectors'
import AppBar from './components/AppBar/AppBar';
import ContactsView from './views/ContactsView/ContactsView';
import { connect } from 'react-redux';
// import styles from './components/AppBar/AppBar.module.css'


class App extends Component {  
// const App = () => (
  componentDidMount(){
    this.props.onGetCurrentUser()
  }
  
  render() {
    return(
      <Container>
        <AppBar />

        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} />
          <Route path="/contacts" component={ContactsView} />
        </Switch>
      </Container>
    )
  }
}

// const mapStateToProps = state => ({
//   contacts: state.contacts.items,
//   isLoadingContacts: contactsSelectors.getLoading(state),
// })

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
}

export default connect(null, mapDispatchToProps)(App)

// export default App





// // import { useEffect } from 'react';
// // import { useDispatch } from 'react-redux';
// import React from 'react'
// import { Switch, Route } from 'react-router-dom';
// import AppBar from './components/AppBar/AppBar';
// import ContactsView from './views/ContactsView/ContactsView';
// import HomeView from './views/HomeView/HomeView';
// import RegisterView from './views/RegisterView/RegisterView';
// import LoginView from './views/LoginView/LoginView';
// import Container from './components/Container/Container';
// // import { authOperations } from './redux/auth';
// const App = () => (
//   <Container>
//     <AppBar />

//     <Switch>
//       <Route exact path="/" component={HomeView} />
//       <Route path="/register" component={RegisterView} />
//       <Route path="/login" component={LoginView} />
//       <Route path="/contacts" component={ContactsView} />
//     </Switch>
//   </Container>
// )


// export default App