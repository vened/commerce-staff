/**
 * Created by max on 19.02.16.
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import classes from '../styles/Categories.scss';

import { categoryGetList } from '../redux/actions/categoryActions';
//import { AppBar, RaisedButton, TextField } from 'material-ui';

export class Categories extends React.Component {

    constructor (props, context) {
        super(props, context);
        this.state = {};
    }

    componentWillMount () {
        this.getUsers();
    }

    getUsers () {
        this.props.dispatch(categoryGetList())
    }

    render () {
        return (
            <div className={classes.container}>
                Categories
            </div>
        );
    }

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        categories: PropTypes.object.isRequired
    };
}

function mapStateToProps (state) {
    return {
        categories: state.categories,
    };
}
export default connect()(Categories);

