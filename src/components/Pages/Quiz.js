import React, { useEffect, useReducer, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useQuestions from '../../hooks/useQuestions';
import Answers from '../Answers';
import MiniPlayer from '../MiniPlayer';
import ProgressBar from '../ProgressBar';
import _ from 'lodash';
import { useAuth } from '../../context/AuthContext';
import { getDatabase, ref, set } from 'firebase/database';

const initialState = null;

const reducer = (state, action) => {
  switch (action.type) {
    case 'questions':
      action.value.forEach((qustion) => {
        qustion.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;
    case 'answer':
      const question = _.cloneDeep(state);
      question[action.questionId].options[action.optionIndx].checked =
        action.value;
      return question;
    default:
      return state;
  }
};

export default function Quiz() {
  const { id } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { loading, error, questions } = useQuestions(id);
  const [qna, dispatch] = useReducer(reducer, initialState);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({
      type: 'questions',
      value: questions,
    });
  }, [questions]);

  const handleAnswerChange = (event, index) => {
    dispatch({
      type: 'answer',
      value: event.target.checked,
      questionId: currentQuestion,
      optionIndx: index,
    });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion((preQuestion) => preQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((preQuestion) => preQuestion - 1);
    }
  };

  const submit = async () => {
    const { uid } = currentUser;
    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);

    await set(resultRef, {
      [id]: qna,
    });

    navigate({
      pathname: `/result/${id}`,
      state: {
        qna,
      },
    });
  };

  const percentage =
    questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;

  return (
    <>
      {error && <div>There was an error!</div>}
      {loading && <div>Loading...</div>}
      {!loading && !error && qna && qna.length > 0 && (
        <>
          <h1>{qna[currentQuestion].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answers
            options={qna[currentQuestion].options}
            handleChange={handleAnswerChange}
          />
          <ProgressBar
            next={nextQuestion}
            prev={prevQuestion}
            progress={percentage}
            submit={submit}
          />
          <MiniPlayer />
        </>
      )}
    </>
  );
}