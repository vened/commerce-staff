import React, {PropTypes} from 'react';
import {routeActions} from 'react-router-redux';
import {connect} from 'react-redux';

import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import {AppBar, IconButton} from 'material-ui';
import LeftNavToggle from 'material-ui/lib/svg-icons/navigation/menu';
import '../styles/core.scss';

export class CoreLayout extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className='CoreLayout'>
                <Header
                    title={this.props.title}
                />
                <div className='CoreLayoutContentContainer'>
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
