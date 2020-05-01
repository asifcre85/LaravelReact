import React, { Component } from 'react';

export default class SuccessAlert extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="alert alert-success">
        {this.props.message}
        </div>

        );
    }
}


