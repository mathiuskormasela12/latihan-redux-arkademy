import React, { Fragment } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

function ProtectedRoute(props) {
  const Component = props.protectedComponent

  return (
    <Fragment>
      <Route {...props} render={({ location, ...rest }) => {
        if(props.auth.login) {
          return (
            <Component {...rest} />
          )
        } else {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: {
                  from: location
                }
              }}  
            />
          )
        }
      }} />
    </Fragment>
  )
}

function mapStateToProps(state) {
  return {
    auth: state
  }
}

export default connect(mapStateToProps, null)(ProtectedRoute)

// class ProtectedRoute extends Component {
//   login = false

//   render() {
//     const Component = this.props.protectedComponeny

//     return (
//       <Fragment>
//         <Route {...this.props} render={(props) => {
//           if(this.login) {
//             return (
//               <Fragment>
//                 <Component {...this.props} />
//               </Fragment>
//             )
//           } else {
//             return (
//               <Fragment>
//                 <Redirect 
//                   to={{
//                     pathname: '/login',
//                     state: {
//                       from: props.location
//                     }
//                   }}
//                 />
//               </Fragment>
//             )
//           }
//         }}
//         />
//       </Fragment>
//     )
//   }
// }

// export default ProtectedRoute