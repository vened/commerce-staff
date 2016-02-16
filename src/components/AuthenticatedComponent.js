import React from 'react'
import {connect} from 'react-redux'
import {pushState} from 'redux-router'


export function requireAuthentication (Component) {
  class AuthenticatedComponent extends React.Component {

    componentWillMount () {
      this.checkAuth()
    }

    componentWillReceiveProps (nextProps) {
      this.checkAuth()
    }

    checkAuth () {
      console.log('checkAuth')
      //console.log(this.props)
      if (!this.props.isAuthenticated) {
        let redirectAfterLogin = this.props.location.pathname
        this.props.dispatch(pushState(null, `/login`))
        console.log(this.props.dispatch(pushState(null, `/login`)))
      }
    }

    render () {
      return (
        <div>
          {this.props.isAuthenticated === true
            ? <Component {...this.props}/>
            : null
          }
        </div>
      )
    }
  }
  const mapStateToProps = (state) => ({
    access_token: state.user.access_token,
    email: state.user.email,
    isAuthenticated: state.user.isAuthenticated
  })

  return connect(mapStateToProps)(AuthenticatedComponent)
}
