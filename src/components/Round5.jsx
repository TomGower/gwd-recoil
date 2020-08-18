import React from 'react';
import { useRecoilValue } from 'recoil';
import { r5info } from '../state/AppState';
import Question from './Question';
import TwoPartQuestion from './TwoPartQuestion';

// eslint-disable-next-line react/prop-types
const RoundFive = ({ updateScore }) => {
  const info = useRecoilValue(r5info);
  const colors = [];
  for (let i = 0; i < info.scores.length; i += 1) {
    if (parseInt(info.scores[i], 10) === 1) {
      colors.push('green');
    } else if (parseInt(info.scores[i], 10) === 0) {
      colors.push('red');
    } else {
      colors.push('black');
    }
  }

  if (info.special) {
    return (
      <div>
        <h4>
          {'Round '}
          {info.round}
        </h4>
        <TwoPartQuestion
          round={info.round}
          number={1}
          color1={colors[0]}
          answer1={info.answers[0]}
          checked1={colors[0] === 'green' ? 'checked' : false}
          color2={colors[1]}
          answer2={info.answers[1]}
          checked2={colors[1] === 'green' ? 'checked' : false}
        />
        <TwoPartQuestion
          round={info.round}
          number={2}
          color1={colors[2]}
          answer1={info.answers[2]}
          checked1={colors[2] === 'green' ? 'checked' : false}
          color2={colors[3]}
          answer2={info.answers[3]}
          checked2={colors[3] === 'green' ? 'checked' : false}
        />
        <TwoPartQuestion
          round={info.round}
          number={3}
          color1={colors[4]}
          answer1={info.answers[4]}
          checked1={colors[4] === 'green' ? 'checked' : false}
          color2={colors[5]}
          answer2={info.answers[5]}
          checked2={colors[5] === 'green' ? 'checked' : false}
        />
        <TwoPartQuestion
          round={info.round}
          number={4}
          color1={colors[6]}
          answer1={info.answers[6]}
          checked1={colors[6] === 'green' ? 'checked' : false}
          color2={colors[7]}
          answer2={info.answers[7]}
          checked2={colors[7] === 'green' ? 'checked' : false}
        />
        <TwoPartQuestion
          round={info.round}
          number={5}
          color1={colors[8]}
          answer1={info.answers[8]}
          checked1={colors[8] === 'green' ? 'checked' : false}
          color2={colors[9]}
          answer2={info.answers[9]}
          checked2={colors[9] === 'green' ? 'checked' : false}
        />
        <TwoPartQuestion
          round={info.round}
          number={6}
          color1={colors[10]}
          answer1={info.answers[10]}
          checked1={colors[10] === 'green' ? 'checked' : false}
          color2={colors[11]}
          answer2={info.answers[11]}
          checked2={colors[11] === 'green' ? 'checked' : false}
        />
        <TwoPartQuestion
          round={info.round}
          number={7}
          color1={colors[12]}
          answer1={info.answers[12]}
          checked1={colors[12] === 'green' ? 'checked' : false}
          color2={colors[13]}
          answer2={info.answers[13]}
          checked2={colors[13] === 'green' ? 'checked' : false}
        />
        <TwoPartQuestion
          round={info.round}
          number={8}
          color1={colors[14]}
          answer1={info.answers[14]}
          checked1={colors[14] === 'green' ? 'checked' : false}
          color2={colors[15]}
          answer2={info.answers[15]}
          checked2={colors[15] === 'green' ? 'checked' : false}
        />
        <br />
        <button value={info.round} onClick={updateScore} type="button">
          {'CLICK TO UPDATE YOUR ROUND '}
          {info.round}
          {' ANSWERS AND SCORE'}
        </button>
      </div>
    );
  }

  return (
    <div>
      <h4>
        {'Round '}
        {info.round}
      </h4>
      {colors.map((color, index) => (
        <Question
          key={`r${info.round}q${index + 1}`}
          round={info.round}
          thisColor={color}
          number={index + 1}
          answer={info.answers[index]}
          checked={color === 'green' ? 'checked' : false}
        />
      ))}
      <br />
      <button value={info.round} onClick={updateScore} type="button">
        {'CLICK TO UPDATE YOUR ROUND '}
        {info.round}
        {' ANSWERS AND SCORE'}
      </button>
    </div>
  );
};

export default RoundFive;
