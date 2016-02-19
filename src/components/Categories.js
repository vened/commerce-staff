/**
 * Created by max on 19.02.16.
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import { reduxForm } from 'redux-form';

import cssClass from '../styles/Categories.scss';
import { categoryGetList, categoryCreate } from '../redux/actions/categoryActions';
import { List, ListItem, TextField, FlatButton, RaisedButton, Dialog } from 'material-ui';
//import { AppBar, RaisedButton, TextField } from 'material-ui';

export class Categories extends React.Component {

    constructor (props, context) {
        super(props, context);
        this.state = {
            open: false,
        };
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    submit (values) {
        this.props.dispatch(categoryCreate(values));
        this.handleClose();
    };

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

        const actions = [
            <FlatButton
                label="Отмена"
                secondary={true}
                onTouchTap={this.handleClose}
            />,
            <RaisedButton
                label="Сохранить"
                primary={true}
                onTouchTap={handleSubmit(this.submit.bind(this))}
            />
        ];

        return (
            <div className={cssClass.container}>

                {this.renderList()}

                <RaisedButton label="Modal Dialog" onTouchTap={this.handleOpen}/>

                <Dialog
                    title='Добавление новой категории'
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                >
                    <form className={cssClass.form}>
                        <div>
                            <TextField
                                fullWidth
                                hintText="Название"
                                {...title}
                            />
                        </div>
                    </form>
                </Dialog>


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

