import React, { Component } from 'react';


class Key extends Component {
    render() {
        return (
        <button onClick={() => this.props.update(this.props.value)}>{this.props.value}</button>
        )
    }
}


export default Key;