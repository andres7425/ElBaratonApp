import React, { Component } from 'react';

class Default extends Component {
    render() {
        console.log(this.props);
        
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-tittle text-uppercase pt-5">
                        <h1 className="display-3">404</h1>
                        <h1>Error</h1>
                        <h2>Page not Found</h2>
                        <h3> The Request URL</h3>
                        <span className="text-danger">
                            {this.props.location.pathname}
                        </span>
                         Was not Found
                    </div>
                </div>
            </div>
        );
    }
}

export default Default;