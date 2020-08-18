/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const BonusRound = () => (
  <div>
    <strong>Bonus Questions</strong>
    <br />
    Round 1 Bonus Question
    <br />
    <span>Answer</span>
    {': '}
    <input className="answer" />
    <input type="checkbox" id="bonusquestion1" />
    <label htmlFor="bonusquestion1">Check if correct</label>
    <br />
    Round 3 Bonus Question
    <br />
    <span>Answer</span>
    {': '}
    <input className="answer" />
    <input type="checkbox" id="bonusquestion3" />
    <label htmlFor="bonusquestion3">Check if correct</label>
    <br />
    Round 4 Bonus Question
    <br />
    <span>Answer</span>
    {': '}
    <input className="answer" />
    <input type="checkbox" id="bonusquestion4" />
    <label htmlFor="bonusquestion4">Check if correct</label>
    <br />
    Round 6 Bonus Question
    <br />
    <span>Answer</span>
    {': '}
    <input className="answer" />
    <input type="checkbox" id="bonusquestion6" />
    <label htmlFor="bonusquestion6">Check if correct</label>
    <br />
    Round 8 Bonus Question
    <br />
    <span>Answer</span>
    {': '}
    <input className="answer" />
    <input type="checkbox" id="bonusquestion8" />
    <label htmlFor="bonusquestion8">Check if correct</label>
    <br />
  </div>
);

export default BonusRound;
