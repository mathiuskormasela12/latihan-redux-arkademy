const initialState = {
  login: false,
  username: '',
  password: '',
  message: ''
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'LOGIN': 
      return {
        ...state,
        login: action.login,
        message: action.message
      }

    default: 
      return {
        ...state
      }
  }
}

export default reducer