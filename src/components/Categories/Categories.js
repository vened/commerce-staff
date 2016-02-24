/**
 * Created by max on 19.02.16.
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import { categoryGetList } from '../../redux/actions/categoryActions';
import setAppBarTitle from '../../redux/actions/configActions';
import urls from '../../helpers/urls';

import cssClass from '../../styles/Categories.scss';
import Colors from 'material-ui/lib/styles/colors';
import { List, ListItem, FloatingActionButton, CircularProgress, IconButton } from 'material-ui';
import EditorModeEdit from 'material-ui/lib/svg-icons/editor/mode-edit';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import Delete from 'material-ui/lib/svg-icons/action/delete';
import FileFolder from 'material-ui/lib/svg-icons/file/folder';
import Avatar from 'material-ui/lib/avatar';

export class Categories extends React.Component {

    constructor (props, context) {
        super(props, context);
    }

    componentWillMount () {
        this.getCategoriesList();
        this.props.dispatch(setAppBarTitle(urls.categories.list.name));
    }

    navGo (url) {
        this.props.dispatch(routeActions.push(url));
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
                                    <ListItem key={ix}
                                              nestedItems={[<ListItem key={ix} primaryText={item.title} />]}
                                              leftAvatar={<Avatar icon={<FileFolder />} />}
                                    >
                                        {item.title}
                                        <IconButton
                                            tooltip='Редактировать'
                                            tooltipPosition='top-center'
                                            style={{
                                                position: 'absolute',
                                                right: 90,
                                                top: 4
                                            }}
                                            iconStyle={{
                                                fill: Colors.green500
                                            }}
                                            onClick={this.navGo.bind(this, `${urls.categories.edit.url}/${item._id.$oid}`)}
                                        >
                                            <EditorModeEdit/>
                                        </IconButton>
                                        <IconButton
                                            tooltip='Редактировать'
                                            tooltipPosition='top-center'
                                            style={{
                                                position: 'absolute',
                                                right: 50,
                                                top: 4
                                            }}
                                            iconStyle={{
                                                fill: Colors.red500
                                            }}
                                        >
                                            <Delete/>
                                        </IconButton>
                                    </ListItem>
                                );
                            }, this)
                        }
                    </List>
                    <div className='btn-add-content'>
                        <FloatingActionButton
                            onClick={this.navGo.bind(this, urls.categories.create.url)}
                        >
                            <ContentAdd/>
                        </FloatingActionButton>
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

