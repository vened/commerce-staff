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
        access_token: state.session.access_token,
        email: state.session.email,
        isAuthenticated: state.session.isAuthenticated
    });

    return connect(mapStateToProps)(AuthenticatedComponent);
}
