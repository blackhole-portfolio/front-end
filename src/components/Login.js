import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../actions";

class Login extends React.Component {
  state = {
    logcreds: {

    },
    username: "",
    password: ""
  };

  // login = e => {
  //   e.preventDefault();
  //   this.props.login(this.state.logcreds)
  //   //.then(() => this.props.history.push('/main-page'))
  //   // this.props.history.push("/main-page");
  // };

  login = e => {
    e.preventDefault();
    this.props.login(this.state.logcreds);
    setTimeout(() => {this.props.history.push('/main-page')}, 1000)
    // this.props.history.push("/main-page");
    
  };

  handleInput = e => {
    this.setState({
      logcreds: {
          ...this.state.logcreds, [e.target.name] : e.target.value
      }
   });
  };

  render() {
    return (
      <div className="login">
        <h1> Login </h1>
        <form onSubmit={this.login}>
          <input
            onChange={this.handleInput}
            // value={this.state.logcreds.username}
            name="username"
            type="text"
            placeholder="Username"
          />
          <input
            onChange={this.handleInput}
            // value={this.state.logcreds.password}
            name="password"
            type="password"
            placeholder="Password"
          />

          <button type="submit">Login</button>
          <Link className="link" to="/">
            <p> Need To Sign Up?</p>
          </Link>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { login }
)(Login);