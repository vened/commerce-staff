/**
 * Created by max on 19.02.16.
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import {reduxForm} from 'redux-form';

import cssClass from '../styles/Categories.scss';
import { categoryGetList, categoryCreate } from '../redux/actions/categoryActions';
import { List, ListItem } from 'material-ui';
//import { AppBar, RaisedButton, TextField } from 'material-ui';


const submit = (values, dispatch) => {
    dispatch(categoryCreate(values));
};


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

    renderList () {
        let categories = this.props.categories.list;
        if (categories) {
            return (
                <List>
                    {
                        categories.map((item, ix) => {
                            return (
                                <ListItem key={ix} primaryText={item.title}/>
                            )
                        }, this)
                    }
                </List>
            )
        }
    }

    render () {
        const {fields: { title }, handleSubmit} = this.props;

        return (
            <div className={cssClass.container}>
                Categories

                {this.renderList()}

                <form onSubmit={handleSubmit(submit)}>
                    <div>
                        <label>Название</label>
                        <input type="text" placeholder="Название" {...title}/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        categories: PropTypes.object.isRequired,
        fields: PropTypes.object.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        error: PropTypes.string,
        submitting: PropTypes.bool.isRequired
    };
}

Categories = reduxForm({
    form: 'category',
    fields: ['title']
})(Categories);

function mapStateToProps (state) {
    return {
        categories: state.categories,
    };
}
export default connect(mapStateToProps)(Categories);

