import axios from 'axios';
import { createAction } from '@reduxjs/toolkit';

export const receiveQuestions = createAction('RECEIVE_QUESTIONS');
export const receiveQuestion = createAction('RECEIVE_QUESTION');

// Thunk Action Creators
// need ability to fetch questions when mounted
// need access to all of the questions after they are fetched
export const fetchQuestions = () => async dispatch => {     // using dispatch allows us to call all the reducers
    try {
        const res = await axios.get(`http://localhost:5000/api/questions`);     // many questions
        dispatch(receiveQuestions(res.data));
    } catch (err) {
        console.log('Oh no! questions are broken :(')
    }
}

// need ability to submit a question
export const submitQuestion = question => async dispatch => {
    try {
        const res = await axios.post(`http://localhost:5000/api/questions`, question);      // one question
        dispatch(receiveQuestion(res.data));
    } catch (err) {
        console.log("Oh no! question are broken :(");
    }
}