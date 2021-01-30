import React, { Fragment, useState, useEffect } from 'react' 
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../redux/actions/auth'

function Login(props) {
  const history = useHistory()
  const [state, setState] = useState({
    email: '',
    password: ''
  })

  const login = e => {
    e.preventDefault()
    props.login(state.email, state.password)
  }

  const handleInput = (e, prop) => {
    // console.log(e.target.value)
    setState(currenState => {
      return {
        ...currenState,
        [prop]: e.target.value 
      }
    })
  }

  useEffect(() => {
    if (props.auth.message !== '') {
      if (props.auth.login) {
        history.push('/home/mathius')
      } else {
        window.alert(props.auth.message) 
      }
    }
  }, [props.auth.message, props.auth.login, history])

  return (
    <Fragment>
      <h1>Login</h1>
      <p>{ state.email } - { state.password }</p>
      <form onSubmit={login}>
        <input type="email" placeholder="email" onChange={e => handleInput(e, 'email')} /><br /><br />
        <input type="password" placeholder="password" onChange={e => handleInput(e, 'password')} /><br /><br />
        <button type="submit">
          Login
        </button>
      </form>
    </Fragment>
  )
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = {
  login
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)