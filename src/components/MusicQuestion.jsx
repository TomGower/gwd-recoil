/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const MusicQuestion = ({
  // eslint-disable-next-line react/prop-types
  titleColor, artistColor, titleAnswer, artistAnswer, titleChecked, artistChecked, number, round,
}) => (
  <div>
    <strong>
      {'Question '}
      {number}
    </strong>
    <br />
    <span style={{ color: titleColor }}>Title</span>
    {': '}
    <input className="answer" id={`round${round}answer q${number}a`} defaultValue={titleAnswer} />
    <input type="checkbox" id={`round${round} question${number}`} defaultChecked={!!titleChecked} />
    <label htmlFor={`question${number}`}>Check if correct</label>
    <br />
    <span style={{ color: artistColor }}>Artist</span>
    {': '}
    <input className="answer" id={`round${round}answer q${number}b`} defaultValue={artistAnswer} />
    <input type="checkbox" id={`round${round} question${number}`} defaultChecked={!!artistChecked} />
    <label htmlFor={`question${number}`}>Check if correct</label>
    <br />
  </div>
);

export default MusicQuestion;
