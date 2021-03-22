// import { useState } from 'react';
import React, { Component } from 'react'
import { connect, useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth/index';
// import styles from './LoginView.module.css'

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};


class LoginView extends Component {
  state ={
      email: '',
      password: '',
  };

// function LoginView() {
//   const dispatch = useDispatch();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');


  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }


  // const handleChange = ({ target: { name, value } }) => {
  //   switch (name) {
  //     case 'email':
  //       return setEmail(value);
  //     case 'password':
  //       return setPassword(value);
  //     default:
  //       return;
  //   }
  // };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state)

    this.setState({email: '', password: ''});
  }


  // const handleSubmit = e => {
  //   e.preventDefault();
  //   dispatch(authOperations.logIn({ email, password }));
  //   setEmail('');
  //   setPassword('');
  // };
  render() {
    const { email, password } = this.state;

    return (
      <div>
        <h1>Страница логина</h1>

        <form onSubmit={this.handleSubmit} style={styles.form} autoComplete="off">
          <label style={styles.label}>
            Почта
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label style={styles.label}>
            Пароль
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Войти</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
}

export default connect(null,mapDispatchToProps)(LoginView)