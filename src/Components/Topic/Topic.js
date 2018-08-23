import React, { Component } from 'react';

class Topic extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    handleTopicClick = () => {
        this.props.onTopicClick(this.props.id);
    }
    render() {
        return (
            <li onClick={this.handleTopicClick} 
                className="pointer">
                {this.props.name}
            </li>
        );
    }
}

export default Topic;