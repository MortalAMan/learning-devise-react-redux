const languages = (state = [], action) => {
  switch(action.type) {
    // { type: 'ADD_LANGUAGE', language: 'JavaScript' }
    case 'ADD_LANGUAGE':
      return [...state, action.language]
    case 'SET_LANGUAGES':
      return action.languages
    default:
      return state;
  }
}

export default languages;
