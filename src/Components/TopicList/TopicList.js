import React from 'react';
import Topic from "../Topic/Topic";

class TopicList extends React.Component {
    
    topicClickHandler = (topicId) => {
        this.props.onTopicClickHandler(topicId);
    }

    render() {
        const list = this.props.topics.map((topic) => 
        <Topic 
            key={topic.id} 
            id={topic.id} 
            name={topic.name}
            onTopicClick={this.topicClickHandler}
        />);
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default TopicList;