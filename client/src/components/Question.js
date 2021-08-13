import React from "react";

// class Question extends React.Component {
//     generateQuestionButton() {
//         return (
//             // <button>This is my question button</button>
//             <div key={this.props.key}>{this.props.question.content}</div>
//         )
//     }

//     render() {
//         return this.generateQuestionButton();
//     }
// }

// export default Question;

// alternative - using functional components
const Question = ({ question }) => {
    // const generateQuestion = () => {
    //     return (
    //         <div key={key}>{question.content}</div>
    //     )
    // }

    // return generateQuestion();

    return <div>{question.content}</div>;
}

export default Question;