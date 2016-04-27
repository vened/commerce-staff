import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {destroySession} from '../../redux/actions/SessionActions';
import {routeActions} from 'react-router-redux';

export class Header extends React.Component {
    constructor (props) {
        super(props);
    }
    
    logout () {
        this.props.dispatch(destroySession())
    }
    
    
    render () {
        return (
            <header className="b-header">
                <div className="b-header__container">
                    
                    <div className="b-header-brand">
                        <a className="b-header-link b-header-brand__item" href="/">
                            commerceCms
                        </a>
                    </div>
                    
                    <div className="b-header-admin">
                        <div className="b-header-admin__item b-header-admin__current">
                            svsrv
                        </div>
                        <span className="b-header-admin__item b-header-admin__logout b-header-link"
                              onClick={this.logout.bind(this)}>
                            logout
                        </span>
                    </div>
                
                </div>
            </header>
        );
    }
}

function mapStateToProps (state) {
    return {
        title: state.config.title,
        session: state.session,
    };
}
export default connect(mapStateToProps)(Header);
