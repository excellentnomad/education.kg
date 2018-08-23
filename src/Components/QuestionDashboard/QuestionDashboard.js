import React, {Component} from "react";

class QuestionDashboard extends Component {
    render() {
        console.log(this.props.question);
        return (
            <div>
                <p>This is the QuestionDashboard</p>
                <p>The topic id is {this.props.topicId}</p>
            </div>
        );
    }
}

export default QuestionDashboard;