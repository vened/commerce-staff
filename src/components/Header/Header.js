import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

export class Header extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">CMS</a>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        // email: state.session.email,
    };
}
export default connect(mapStateToProps)(Header);
