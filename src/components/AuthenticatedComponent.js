import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';

export function requireAuthentication (Component) {
    class AuthenticatedComponent extends React.Component {

        componentWillMount () {
            this.checkAuth();
        }

        componentWillReceiveProps (nextProps) {
            this.checkAuth();
        }

        checkAuth () {
            if (!this.props.isAuthenticated) {
                let redirectAfterLogin = this.props.location.pathname;
                this.props.dispatch(routeActions.push(`/login?next=${redirectAfterLogin}`));
            }
        }

        render () {
            return (
                <div>
                    {this.props.isAuthenticated === true ? <Component {...this.props}/> : null}
                </div>
            );
        }

        static propTypes = {
            isAuthenticated: PropTypes.bool.isRequired,
            location: PropTypes.object.isRequired,
            dispatch: PropTypes.func.isRequired
        };

    }
    const mapStateToProps = (state) => ({
        access_token: state.user.access_token,
        email: state.user.email,
        isAuthenticated: state.user.isAuthenticated
    });

    return connect(mapStateToProps)(AuthenticatedComponent);
}
