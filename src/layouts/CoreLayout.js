import React, { PropTypes } from 'react';
import { routeActions } from 'react-router-redux';
import { connect } from 'react-redux';
import urls from '../helpers/urls';

import Sidebar from '../components/Sidebar/Sidebar';
import {AppBar, IconButton} from 'material-ui';
import LeftNavToggle from 'material-ui/lib/svg-icons/navigation/menu';
import '../styles/core.scss';

export class CoreLayout extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        let leftNavWidth = 240;
        let appBarHeight = 64;

        let contentContainerStyle = {
            paddingLeft: leftNavWidth + 10,
            paddingTop: appBarHeight
        };

        let AppBarStyle = {
            position: 'fixed'
        };

        return (

            <div className='CoreLayout'>
                <AppBar
                    title={this.props.title}
                    zDepth={1}
                    style={AppBarStyle}
                />
                <Sidebar
                    leftNavWidth={leftNavWidth}
                    appBarHeight={appBarHeight}
                />
                <div style={contentContainerStyle} className='CoreLayoutContentContainer'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

CoreLayout.propTypes = {
    children: PropTypes.element
};


function mapStateToProps (state) {
    return {
        title: state.config.title,
        email: state.session.email
    };
}
export default connect(mapStateToProps)(CoreLayout);
