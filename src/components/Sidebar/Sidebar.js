import React, { PropTypes } from 'react';
import { routeActions } from 'react-router-redux';
import { connect } from 'react-redux';
import urls from '../../helpers/urls';
import {LeftNav, MenuItem} from 'material-ui';

const sidebarItems = [
    { name: 'Категории', url: '' },
    { name: 'Администраторы', url: urls.admins }
];

export class Sidebar extends React.Component {
    constructor (props) {
        super(props);
        this.state = { open: true };
    }

    navGo (url) {
        this.props.dispatch(routeActions.push(url));
    }

    render () {
        let leftNavStyle = {
            zIndex: 1000,
            paddingTop: this.props.appBarHeight,
            width: this.props.leftNavWidth
        };

        return (
            <LeftNav docked
                     style={leftNavStyle}
                     open={this.state.open}
            >
                {
                    sidebarItems.map((item, ix) => {
                        return (
                            <MenuItem
                                key={ix}
                                onTouchTap={this.navGo.bind(this, item.url)}
                            >
                                {item.name}
                            </MenuItem>
                        )
                    }, this)
                }
            </LeftNav>
        );
    }
}

//function mapStateToProps (state) {
//    return {
//        email: state.session.email,
//    };
//}
export default connect()(Sidebar);
