/**
 * Created by max on 19.02.16.
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import classes from '../styles/Categories.scss';

//import { AppBar, RaisedButton, TextField } from 'material-ui';

export class Categories extends React.Component {

    constructor (props, context) {
        super(props, context);
        this.state = {};
    }

    render () {
        return (
            <div className={classes.container}>
                Categories
            </div>
        );
    }

    static propTypes = {
        dispatch: PropTypes.func.isRequired
    };
}

function mapStateToProps (state) {
    return {
        session: state.session,
        isAuthenticated: state.session.isAuthenticated
    };
}
export default connect()(Categories);

