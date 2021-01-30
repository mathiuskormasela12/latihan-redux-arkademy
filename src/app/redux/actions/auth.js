export const login = (email, password) => {
  if(email === 'admin@gmail.com' && password === 'admin') {
    return {
      type: 'LOGIN',
      login: true
    }
  } else {
    return {
      type: 'LOGIN',
      login: false,
      message: 'Gagal'
    }
  }
}