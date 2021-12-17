import React, { Component } from 'react';

class Superhero extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <article className="tile is-child notification is-white" key="{this.props.index}">
                <p className="title">{this.props.title}</p>
                <p className="subtitle">{this.props.summary}</p>
            </article>
        );
    }
}

export default Superhero;