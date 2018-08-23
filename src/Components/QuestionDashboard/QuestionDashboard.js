import React, {Component} from "react";

class QuestionDashboard extends Component {
    render() {
        console.log(this.props.question);
        return (
            <div>
                <p>This is the QuestionDashboard</p>
                <div>
                    <p>Question {this.props.question.order}</p>
                    <p>{this.props.question.description}</p>
                    <div>
                        <p>Choose the correct answer:</p>
                        <input type="radio" value="a" name="answer"/>A<br />
                        <input type="radio" value="b" name="answer"/>B<br />
                        <input type="radio" value="c" name="answer"/>C<br />
                        <input type="radio" value="d" name="answer"/>D<br />
                        <input type="radio" value="e" name="answer"/>E<br />
                    </div>
                </div>
            </div>
        );
    }
}

export default QuestionDashboard;