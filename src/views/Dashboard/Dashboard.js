import React, { PropTypes } from 'react';

export class Dashboard extends React.Component {

    constructor (props, context) {
        super(props, context);
        this.state = {
            open: false
        };
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    render () {
        return (
            <div>
                Dashboard
            </div>
        );
    }

    static propTypes = {
        dispatch: PropTypes.func.isRequired
    };
}

export default Dashboard;
