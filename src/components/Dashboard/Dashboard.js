import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import setAppBarTitle from '../../redux/actions/configActions';
import urls from '../../helpers/urls';

export class Dashboard extends React.Component {

    constructor (props, context) {
        super(props, context);
    }

    componentWillMount () {
        this.props.dispatch(setAppBarTitle(urls.root.name))
    }

    render () {
        return (
            <div>
                {urls.root.name}
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        categories: state.categories,
    };
}
export default connect()(Dashboard);
