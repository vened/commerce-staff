/**
 * Created by max on 19.02.16.
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import { reduxForm } from 'redux-form';
import { categoryCreate } from '../../redux/actions/categoryActions';
import setAppBarTitle from '../../redux/actions/configActions';
import urls from '../../helpers/urls';

import cssClass from '../../styles/Categories.scss';
import { List, ListItem, TextField, FlatButton, RaisedButton, Dialog } from 'material-ui';

export class CategoriesForm extends React.Component {

    constructor (props, context) {
        super(props, context);
    }

    componentWillMount () {
        this.props.dispatch(setAppBarTitle(urls.categories.create.name));
    }

    submit (values) {
        this.props.dispatch(categoryCreate(values));
    };

    render () {
        const {fields: { title, label }, handleSubmit} = this.props;

        return (
            <div className={cssClass.container}>
                <form className='form'>
                    <div className='form-field'>
                        <TextField
                            fullWidth
                            hintText="Название"
                            {...title}
                        />
                    </div>
                    <div className='form-field'>
                        <TextField
                            fullWidth
                            hintText="Название группы"
                            {...label}
                        />
                    </div>
                    <div className='form-actions'>
                        <RaisedButton
                            label="Сохранить"
                            primary={true}
                            onTouchTap={handleSubmit(this.submit.bind(this))}
                        />
                    </div>
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

CategoriesForm = reduxForm({
    form: 'category',
    fields: ['title', 'label']
})(CategoriesForm);

function mapStateToProps (state) {
    return {
        categories: state.categories,
    };
}
export default connect(mapStateToProps)(CategoriesForm);

