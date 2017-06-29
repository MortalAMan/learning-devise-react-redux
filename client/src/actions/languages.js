import axios from 'axios';
import { setFlash } from './flash';
import { setAuthHeaders } from '../utils/auth';

export const addLanguage = (name) => {
  return(dispatch) => {
    axios.post('/api/languages', { language: { name } })
      .then( res => {
        setAuthHeaders(res.headers);
        dispatch({ type: 'ADD_LANGUAGE', language: res.data });
        dispatch(setFlash('Language Created!', 'success'));
      })
      .catch( res => {
        dispatch(setFlash('Language Failed To Create!', 'error'));
      });
  }
}

export const getLanguages = () => {
  return(dispatch) => {
    axios.get('/api/languages')
      .then( res => {
        dispatch({ type: 'SET_LANGUAGES', languages: res.data });
      })
      .catch( res => {
        dispatch(setFlash('Failed To Get Languages.', 'error'));
      })
  }
}
