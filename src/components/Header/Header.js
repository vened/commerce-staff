import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

export class Header extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        console.log(this.props);
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
                        <a className="b-header-admin__item b-header-admin__logout b-header-link" href="/">
                            arf
                        </a>
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
