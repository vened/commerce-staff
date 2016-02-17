import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import { userCreateSession } from '../../redux/actions/UserActions';
import classes from './LoginPage.scss';

import { AppBar, RaisedButton, TextField } from 'material-ui';

export class LoginPage extends React.Component {

    constructor (props, context) {
        super(props, context);
        this.state = {
            username: 'maxstbn@yandex.ru',
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
            let redirectAfterLogin = this.props.location.query.next;
            this.props.dispatch(routeActions.push(`${redirectAfterLogin}`));
        }
    }

    login () {
        this.props.dispatch(userCreateSession({
            username: this.state.username,
            password: this.state.password
        }));
        this.checkAuth();
    }

    handleChangeName (e) {
        this.setState({ username: e.target.value });
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
                                name='username'
                                type='text'
                                value={this.state.username}
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
                                          fullWidth={true}
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
        user: state.user,
        isAuthenticated: state.user.isAuthenticated
    };
}
export default connect(mapStateToProps)(LoginPage);
