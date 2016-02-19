import React, {PropTypes} from 'react';
import {List, ListItem} from 'material-ui';
import lodash from 'lodash';


import { connect } from 'react-redux';
import { userGetList } from '../../redux/actions/UserActions';
import setAppBarTitle from '../../redux/actions/configActions';
import urls from '../../helpers/urls';

export class Page extends React.Component {

    constructor (props) {
        super(props);
    }

    componentWillMount () {
        this.getUsers();
        this.props.dispatch(setAppBarTitle(urls.admins.name))
    }

    getUsers () {
        this.props.dispatch(userGetList())
    }

    render () {
        let users = this.props.users.list;
        if (users) {
            return (
                <List>
                    {
                        users.map((item, ix) => {
                            return (
                                <ListItem key={ix}
                                          primaryText={item.email}
                                />
                            )
                        }, this)
                    }
                </List>
            )
        } else {
            return null
        }
    }

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        users: PropTypes.object.isRequired
    };
}

function mapStateToProps (state) {
    return {
        users: state.users
    };
}
export default connect(mapStateToProps)(Page);
