import React, {PropTypes} from 'react';
import {routeActions} from 'react-router-redux';
import {connect} from 'react-redux';

import Header from '../components/Header/Header';
import {AppBar, IconButton} from 'material-ui';
import '../styles/core.scss';

export class CoreLayout extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className='CoreLayout'>
                <Header/>
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


// function mapStateToProps (state) {
//     return {
//         title: state.config.title,
//         email: state.session.email
//     };
// }
export default CoreLayout;
