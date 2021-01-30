import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import { Provider } from 'react-redux'
import ProtectedRoute from './ProtectedRoute'
import store from './redux/store'

import Home from './views/Home'
import Login from './views/Login'

function Routes() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={Login} />
          <ProtectedRoute path="/:name" protectedComponent={Home} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default Routes