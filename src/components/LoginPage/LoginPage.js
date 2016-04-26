import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import { createSession } from '../../redux/actions/SessionActions';
import classes from './LoginPage.scss';

import { AppBar, RaisedButton, TextField } from 'material-ui';

export class LoginPage extends React.Component {

    constructor (props, context) {
        super(props, context);
        this.state = {
            email: 'maxstbn@gmail.com',
            password: 'qwerty123'
        };
    }

    componentWillMount () {
        this.checkAuth();
    }

    componentWillReceiveProps (nextProps) {
        this.checkAuth();
    }

    checkAuth () {
        if (this.props.isAuthenticated) {
            let redirectAfterLogin = this.props.location.query.next ? this.props.location.query.next : '/';
            this.props.dispatch(routeActions.push(redirectAfterLogin));
        }
    }

    login () {
        this.props.dispatch(createSession(this.state))
            .then(() => {
                this.checkAuth();
            });
    }

    handleChangeName (e) {
        this.setState({ email: e.target.value });
    }

    handleChangePassword (e) {
        this.setState({ password: e.target.value });
    }

    render () {
        return (
            <div className={classes.container}>
                <div>
                    <AppBar
                        className={classes.AppBar}
                        title='Вход в staff'
                        showMenuIconButton={false}
                    />
                    <form className={classes.form}>
                        <div className={classes.TextField}>
                            <TextField
                                className={classes.TextField}
                                floatingLabelText='Ваш E-mail'
                                name='email'
                                type='text'
                                value={this.state.email}
                                onChange={this.handleChangeName.bind(this)}
                            />
                        </div>
                        <div className={classes.TextField}>
                            <TextField
                                floatingLabelText='Пароль'
                                name='password'
                                type='password'
                                value={this.state.password}
                                onChange={this.handleChangePassword.bind(this)}
                            />
                        </div>
                        <div className={classes.RaisedButton}>
                            <RaisedButton primary
                                          fullWidth
                                          label='Войти'
                                          onClick={this.login.bind(this)}/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool.isRequired,
        location: PropTypes.object.isRequired
    };
}

function mapStateToProps (state) {
    return {
        session: state.session,
        isAuthenticated: state.session.isAuthenticated
    };
}
export default connect(mapStateToProps)(LoginPage);
