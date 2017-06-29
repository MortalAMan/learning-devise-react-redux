import axios from 'axios';

export const setAuthHeaders = (headers) => {
  if(headers['access-token']) {
    axios.defaults.headers.common['access-token'] = headers['access-token']
    axios.defaults.headers.common['token-type'] = headers['token-type']
    axios.defaults.headers.common['client'] = headers['client']
    axios.defaults.headers.common['expiry'] = headers['expiry']
    axios.defaults.headers.common['uid'] = headers['uid']
  }
}
