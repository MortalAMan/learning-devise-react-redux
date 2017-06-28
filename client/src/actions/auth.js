import Auth from 'j-toker';

export const registerUser = (email, password, passwordConfirmation, history) => {
  return(dispatch) => {
    Auth.emailSignUp({
      email,
      password,
      password_confirmation: passwordConfirmation
    }).then( user => {
      dispatch({ type: 'LOGIN', user: user.data });
      history.push('/');
    }).fail( res => {
      // TODO: handle errors client side
      debugger
    });
  }
}
