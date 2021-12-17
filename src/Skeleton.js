import React, { Component } from 'react';

let message = {
    content: 'hello again worlde'
}

class Skeleton extends Component {
    render() {
        return (
            <div>
                <div className="section">
                    <div className="notification has-text-centered">
                        <p className="title">Start here...</p>
                        <p>{message.content}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skeleton;