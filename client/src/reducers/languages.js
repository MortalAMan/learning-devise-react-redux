const langauges = (state = [], action) => {
  switch(action.type) {
    // { type: 'ADD_LANGUAGE', language: 'JavaScript' }
    case 'ADD_LANGUAGE':
      return [...state, action.language]
    default:
      return state;
  }
}
