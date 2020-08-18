import React from 'react';
import { useRecoilValue } from 'recoil';
import { r2info } from '../state/AppState';
import MusicQuestion from './MusicQuestion';

// eslint-disable-next-line react/prop-types
const MusicRound = ({ updateScore }) => {
  const info = useRecoilValue(r2info);
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

  return (
    <div>
      <h4>
        {'Round '}
        {info.round}
      </h4>
      <MusicQuestion
        round={2}
        number={1}
        titleColor={colors[0]}
        artistColor={colors[1]}
        titleAnswer={info.answers[0]}
        artistAnswer={info.answers[1]}
        titleChecked={colors[0] === 'green' ? 'checked' : false}
        artistChecked={colors[1] === 'green' ? 'checked' : false}
      />
      <MusicQuestion
        round={2}
        number={2}
        titleColor={colors[2]}
        artistColor={colors[3]}
        titleAnswer={info.answers[2]}
        artistAnswer={info.answers[3]}
        titleChecked={colors[2] === 'green' ? 'checked' : false}
        artistChecked={colors[3] === 'green' ? 'checked' : false}
      />
      <MusicQuestion
        round={2}
        number={3}
        titleColor={colors[4]}
        artistColor={colors[5]}
        titleAnswer={info.answers[4]}
        artistAnswer={info.answers[5]}
        titleChecked={colors[4] === 'green' ? 'checked' : false}
        artistChecked={colors[5] === 'green' ? 'checked' : false}
      />
      <MusicQuestion
        round={2}
        number={4}
        titleColor={colors[6]}
        artistColor={colors[7]}
        titleAnswer={info.answers[6]}
        artistAnswer={info.answers[7]}
        titleChecked={colors[6] === 'green' ? 'checked' : false}
        artistChecked={colors[7] === 'green' ? 'checked' : false}
      />
      <MusicQuestion
        round={2}
        number={5}
        titleColor={colors[8]}
        artistColor={colors[9]}
        titleAnswer={info.answers[8]}
        artistAnswer={info.answers[9]}
        titleChecked={colors[8] === 'green' ? 'checked' : false}
        artistChecked={colors[9] === 'green' ? 'checked' : false}
      />
      <MusicQuestion
        round={2}
        number={6}
        titleColor={colors[10]}
        artistColor={colors[11]}
        titleAnswer={info.answers[10]}
        artistAnswer={info.answers[11]}
        titleChecked={colors[10] === 'green' ? 'checked' : false}
        artistChecked={colors[11] === 'green' ? 'checked' : false}
      />
      <MusicQuestion
        round={2}
        number={7}
        titleColor={colors[12]}
        artistColor={colors[13]}
        titleAnswer={info.answers[12]}
        artistAnswer={info.answers[13]}
        titleChecked={colors[12] === 'green' ? 'checked' : false}
        artistChecked={colors[13] === 'green' ? 'checked' : false}
      />
      <MusicQuestion
        round={2}
        number={8}
        titleColor={colors[14]}
        artistColor={colors[15]}
        titleAnswer={info.answers[14]}
        artistAnswer={info.answers[15]}
        titleChecked={colors[14] === 'green' ? 'checked' : false}
        artistChecked={colors[15] === 'green' ? 'checked' : false}
      />
      <br />
      <button value={info.round} onClick={updateScore} type="button">
        {'CLICK TO UPDATE YOUR ROUND '}
        {info.round}
        {' ANSWERS AND SCORE'}
      </button>
    </div>
  );
};

export default MusicRound;
