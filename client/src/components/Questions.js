import React from "react";
import { connect } from 'react-redux';
import Question from './Question';
import { fetchQuestions } from "../actions/question_actions";

const questions = [
    {
        content:'question 1'
    }, 
    {
        content:'question 2'
    }
];

class Questions extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {}

    //     this.generateQuestionButton = this.generateQuestionButton.bind();
    //     // only need to bind if function is used for onClick
    //     // You can also bind by using arrow functions () => {} structure
    // }

    componentDidMount() {
        // runs after the component's initial render
        // fetch some data => ajax/fetch/axios

        // fetch questions
        this.props.fetch();
    }

    // componentDidUpdate() {
    //     // runs after a change in state or props
    //     // update user form input
    // }

    generateQuestionsList() {
        return this.props.questions.map((question, i) => 
            <Question 
                key={`question-${i}`}
                question={question}
            />
        )
    }

    render() {
        return (
            <>
                {this.props.questions.length > 0 ? this.generateQuestionsList() : 'No Questions :('}
            </>
        )
    }
}

const msp = state => ({
    questions: state.questions ? Object.values(state.questions) : []
})

const mdp = dispatch => ({
    fetch: () => dispatch(fetchQuestions())
})

export default connect(msp, mdp)(Questions);