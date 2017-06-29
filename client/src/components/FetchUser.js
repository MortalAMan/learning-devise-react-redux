import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { validateToken } from '../utils/auth';

class FetchUser extends Component {
  state = { loaded: false };

  componentDidMount() {
    // make the axios call to validate the user is logged in with their token
    let { isAuthenticated, dispatch } = this.props;
    if(isAuthenticated)
      this.loaded();
    else {
      const user = validateToken();
      if(user) {
        dispatch({ type: 'LOGIN', user });
        this.loaded();
      } else {
        this.loaded();
      }
    }
  }

  loaded = () => {
    this.setState({ loaded: true });
  }

  render() {
    // if you have HOC the children are the components nested under the HOC
    <
    return this.state.loaded ? this.props.children : null
  }
}

const mapStateToProps = (state) => {
  return { isAuthenticated: state.user.id };
}

export default connect(mapStateToProps)(FetchUser);
