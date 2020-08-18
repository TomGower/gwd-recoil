/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useRecoilValue } from 'recoil';
import { r8info } from '../state/AppState';
import Question from './Question';
import TwoPartQuestion from './TwoPartQuestion';

// eslint-disable-next-line react/prop-types
const RandomRound = ({ updateScore }) => {
  const info = useRecoilValue(r8info);
  const colors = [];
  for (let i = 0; i < info.scores.length; i += 1) {
    if (parseInt(info.scores[i], 10) === 1) {
      colors.push('green');
    } else if (parseInt(info.scores[i], 10) === 0) {
      colors.push('red');
    } else if (info.scores[i] === '') {
      colors.push('black');
    }
  }

  return (
    <div>
      <h4>
        {'Round '}
        {info.round}
      </h4>
      <Question
        thisColor={colors[0]}
        round={info.round}
        answer={info.answers[0]}
        number={1}
        checked={colors[0] === 'green' ? 'checked' : false}
      />
      <TwoPartQuestion
        round={info.round}
        number={2}
        color1={colors[1]}
        answer1={info.answers[1]}
        checked1={colors[1] === 'green' ? 'checked' : false}
        color2={colors[2]}
        answer2={info.answers[2]}
        checked2={colors[2] === 'green' ? 'checked' : false}
      />
      <strong>Sheer Quotient</strong>
      <br />
      <span style={{ color: colors[3] }}>Answer</span>
      {': '}
      <input className="answer" id={`round${info.round}answer q3`} defaultValue={info.answers[3]} />
      <input type="checkbox" id={`round${info.round} question3`} defaultChecked={!!(colors[3] === 'green' ? 'checked' : false)} />
      <label htmlFor="question3">Check if correct</label>
      <br />
      <strong>Question 4</strong>
      <br />
      <span style={{ color: colors[4] }}>Answer A</span>
      {': '}
      <input className="answer" id={`round${info.round}answer q4a`} defaultValue={info.answers[4]} />
      <input type="checkbox" id={`round${info.round} question4a`} defaultChecked={!!(colors[4] === 'green' ? 'checked' : false)} />
      <label htmlFor="question4">Check if correct</label>
      <br />
      <span style={{ color: colors[5] }}>Answer B</span>
      {': '}
      <input className="answer" id={`round${info.round}answer q4b`} defaultValue={info.answers[5]} />
      <input type="checkbox" id={`round${info.round} question4b`} defaultChecked={!!(colors[5] === 'green' ? 'checked' : false)} />
      <label htmlFor="question4">Check if correct</label>
      <br />
      <span style={{ color: colors[6] }}>Answer C</span>
      {': '}
      <input className="answer" id={`round${info.round}answer q4c`} defaultValue={info.answers[6]} />
      <input type="checkbox" id={`round${info.round} question4c`} defaultChecked={!!(colors[6] === 'green' ? 'checked' : false)} />
      <label htmlFor="question4">Check if correct</label>
      <br />
      <Question
        round={info.round}
        number={5}
        thisColor={colors[7]}
        answer={info.answers[7]}
        checked={colors[7] === 'green' ? 'checked' : false}
      />
      <strong>Question 6</strong>
      <br />
      <span style={{ color: colors[8] }}>Answer A</span>
      {': '}
      <input className="answer" id={`round${info.round}answer q6a`} defaultValue={info.answers[8]} />
      <input type="checkbox" id={`round${info.round} question6a`} defaultChecked={!!(colors[8] === 'green' ? 'checked' : false)} />
      <label htmlFor="question4">Check if correct</label>
      <br />
      <span style={{ color: colors[9] }}>Answer B</span>
      {': '}
      <input className="answer" id={`round${info.round}answer q6b`} defaultValue={info.answers[9]} />
      <input type="checkbox" id={`round${info.round} question6b`} defaultChecked={!!(colors[9] === 'green' ? 'checked' : false)} />
      <label htmlFor="question4">Check if correct</label>
      <br />
      <span style={{ color: colors[10] }}>Answer C</span>
      {': '}
      <input className="answer" id={`round${info.round}answer q6c`} defaultValue={info.answers[10]} />
      <input type="checkbox" id={`round${info.round} question6c`} defaultChecked={!!(colors[10] === 'green' ? 'checked' : false)} />
      <label htmlFor="question4">Check if correct</label>
      <br />
      <Question
        round={info.round}
        number={7}
        thisColor={colors[11]}
        answer={info.answers[11]}
        checked={colors[11] === 'green' ? 'checked' : false}
      />
      <strong>Question 8</strong>
      <br />
      <span style={{ color: colors[12] }}>Answer A</span>
      {': '}
      <input className="answer" id={`round${info.round}answer q8a`} defaultValue={info.answers[12]} />
      <input type="checkbox" id={`round${info.round} question8a`} defaultChecked={!!(colors[12] === 'green' ? 'checked' : false)} />
      <label htmlFor="question4">Check if correct</label>
      <br />
      <span style={{ color: colors[13] }}>Answer B</span>
      {': '}
      <input className="answer" id={`round${info.round}answer q8b`} defaultValue={info.answers[13]} />
      <input type="checkbox" id={`round${info.round} question8b`} defaultChecked={!!(colors[13] === 'green' ? 'checked' : false)} />
      <label htmlFor="question4">Check if correct</label>
      <br />
      <span style={{ color: colors[14] }}>Answer C</span>
      {': '}
      <input className="answer" id={`round${info.round}answer q8c`} defaultValue={info.answers[14]} />
      <input type="checkbox" id={`round${info.round} question8c`} defaultChecked={!!(colors[14] === 'green' ? 'checked' : false)} />
      <label htmlFor="question4">Check if correct</label>
      <br />
      <span style={{ color: colors[15] }}>Answer D</span>
      {': '}
      <input className="answer" id={`round${info.round}answer q8d`} defaultValue={info.answers[15]} />
      <input type="checkbox" id={`round${info.round} question8d`} defaultChecked={!!(colors[15] === 'green' ? 'checked' : false)} />
      <label htmlFor="question8">Check if correct</label>
      <br />
      <br />
      <button value={info.round} onClick={updateScore} type="button">
        {'CLICK TO UPDATE YOUR ROUND '}
        {info.round}
        {' ANSWERS AND SCORE'}
      </button>
    </div>
  );
};

export default RandomRound;
