/**
 * Created by max on 19.02.16.
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { categoryGetList } from '../../redux/actions/categoryActions';
import setAppBarTitle from '../../redux/actions/configActions';
import urls from '../../helpers/urls';

import cssClass from '../../styles/Categories.scss';
import { List, ListItem, FloatingActionButton, CircularProgress } from 'material-ui';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';

export class Categories extends React.Component {

    constructor (props, context) {
        super(props, context);
    }

    componentWillMount () {
        this.getCategoriesList();
        this.props.dispatch(setAppBarTitle(urls.categories.name));
    }

    getCategoriesList () {
        this.props.dispatch(categoryGetList());
    }

    render () {
        var categories = this.props.categories.list;
        if (categories) {
            return (
                <div className={cssClass.container}>
                    <List>
                        {
                            categories.map((item, ix) => {
                                return (
                                    <ListItem key={ix} primaryText={item.title}/>
                                );
                            }, this)
                        }
                    </List>
                    <div className='btn-add-content'>
                        <FloatingActionButton><ContentAdd/></FloatingActionButton>
                    </div>
                </div>
            );
        } else {
            return (
                <div className='loader'>
                    <CircularProgress/>
                </div>
            );
        }
    }

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        categories: PropTypes.object.isRequired,
        fields: PropTypes.object.isRequired
    };
}

function mapStateToProps (state) {
    return {
        categories: state.categories
    };
}
export default connect(mapStateToProps)(Categories);

