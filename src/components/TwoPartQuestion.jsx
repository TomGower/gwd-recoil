/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const TwoPartQuestion = ({
  round, number, color1, answer1, checked1, color2, answer2, checked2,
}) => (
  <div>
    <strong>
      {'Question '}
      {number}
    </strong>
    <br />
    <span style={{ color: color1 }}>Answer A</span>
    {': '}
    <input className="answer" id={`round${round}answer q${number}a`} defaultValue={answer1} />
    <input type="checkbox" id={`round${round} question${number}`} defaultChecked={!!checked1} />
    <label htmlFor={`question${number}`}>Check if correct</label>
    <br />
    <span style={{ color: color2 }}>Answer B</span>
    {': '}
    <input className="answer" id={`round${round}answer q${number}b`} defaultValue={answer2} />
    <input type="checkbox" id={`round${round} question${number}`} defaultChecked={!!checked2} />
    <label htmlFor={`question${number}`}>Check if correct</label>
    <br />
  </div>
);

export default TwoPartQuestion;
