import React from "react";
import Lesson from "../../Components/Lesson/Lesson";
import QuestionDashboard from "../../Components/QuestionDashboard/QuestionDashboard";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTopicId: null,
            lessons: [
                {
                    id: 1, title: "Mathematics",
                    topics: [
                        {
                            "id": "1",
                            "name": "Trigonometry"
                        },
                        {
                            "id": "2",
                            "name": "Functions"
                        }
                    ]
                },
                {
                    id: 2, title: "Geometry",
                    topics: [
                        {
                            "id": "3",
                            "name": "Shapes"
                        },
                        {
                            "id": "4",
                            "name": "Areas"
                        }
                    ]
                },
            ],
            currentQuestion: 
                {   id: 1,
                    order: 1,
                    description: "How old are you?",
                    correct: "a",
                    options: {
                        a: 23,
                        b: 24,
                        c: 25,
                        d: 26,
                        f: 27
                    }
                },
            nextQuestion: {}
        };
    }
    handleTopicClick = (topicId) => {
        this.setState({selectedTopicId: topicId})
    }
    render() {
        const lessons = this.state.lessons;
        const question = this.state.currentQuestion;
        const lessonList = lessons.map((lesson) => 
            <Lesson key={lesson.id} 
                    title={lesson.title}
                    onTopicClickHandler={this.handleTopicClick}
                    topics={lesson.topics}/>
        );
        const topicId = this.state.selectedTopicId;
        return (
            <div>
                <h1>Welcome to the Dashboard!</h1>
                <div className="dashboard">
                    <div className="left">
                        <p>This part is a list of lessons, please select one</p>
                        {lessonList}
                    </div>
                    <div className="right">
                        {   topicId ?
                            ( <QuestionDashboard topicId={topicId} question={question} /> ) :
                            ( <p>Select a topic from left please.</p> )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;