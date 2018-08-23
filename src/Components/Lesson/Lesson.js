import React, { Component } from 'react';
import TopicList from "../TopicList/TopicList";

class Lesson extends Component {
    
    handleTopicClick = (topicId) => {
        this.props.onTopicClickHandler(topicId);
    }
    render() {
        return (
            <div>
                {this.props.title}
                <TopicList
                    topics={this.props.topics}
                    onTopicClickHandler={this.handleTopicClick}/>
            </div>
        );
    }

}

export default Lesson;