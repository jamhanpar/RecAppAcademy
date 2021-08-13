import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { submitQuestion } from '../actions/question_actions';

const QuestionForm = ({ submit }) => {
    const [name, setName] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = e => {
        e.preventDefault();         // prevents html form from refreshing on submission

        console.log('submitted!')
        // submitQuestion({name, content})
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    placeholder='Name'
                    value={name} 
                    onChange={e => setName(e.target.value)}
                />
                <textarea 
                    rows='3'
                    placeholder='Ask away...'
                    value={content}
                    onChange={e => setContent(e.target.value)}
                />
                <button>Submit Question</button>
            </form>
        </div>
    )
}

// map state to props

// map dispatch to props
const mdp = dispatch => ({
    submit: question => dispatch(submitQuestion(question))
})

export default connect(null, mdp)(QuestionForm);