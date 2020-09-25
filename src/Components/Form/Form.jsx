import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FormInput } from '../FormInput/FormInput';
const questions = ["What's your name?", 'How old are you?', 'Any feedback?'];
export const Form = () => {
  const [questionNo, setQuestionNo] = useState(0);
  const [finished, setFinish] = useState(false);
  const [value, setValue] = useState('');
  const history = useHistory();
  const [responses] = useState([]);
  useEffect(() => {
    responses.push(value);
    setValue('');
    if (questionNo > questions.length - 1) {
      setFinish(true);
      return;
    } else if (questionNo < 0) {
      setQuestionNo(0);
      return;
    } else {
      return;
    }
    // eslint-disable-next-line
  }, [questionNo]);

  return !finished ? (
    <>
      <FormInput
        label={questions[questionNo]}
        value={value}
        setValue={setValue}
      />
      <div class='field is-grouped'>
        <div class='control'>
          <button
            class='button is-link'
            onClick={() => setQuestionNo(questionNo + 1)}
          >
            Next
          </button>
        </div>
        <div class='control'>
          <button
            class='button is-link is-light'
            onClick={() => setQuestionNo(questionNo - 1)}
          >
            Previous
          </button>
        </div>
      </div>
    </>
  ) : (
    <div>
      <h1 class='subtitle is-4'>Thanks for giving us this information.</h1>
      {responses.map((resp) => (
        <p>{resp}</p>
      ))}
      <div class='control'>
        <button
          class='button is-link is-light'
          onClick={() => {
            history.push('/');
          }}
        >
          Go Home
        </button>
      </div>
    </div>
  );
};
