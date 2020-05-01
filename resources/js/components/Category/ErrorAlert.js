import React, { Component } from 'react';

export default class ErrorAlert extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="alert alert-danger">
       {this.props.message}
        </div>

        );
    }
}


