import React, { Component } from 'react';


class Skeleton extends Component {
    render() {
        return (
            <div>
                <div className="section">
                    <div className="notification has-text-centered">
                        <p className="title">Start here...</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skeleton;