/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  joker, jokerScore, page, r1info, r2info, r3info, r4info, r5info, r6info, r7info, r8info, score,
} from '../state/AppState';
import Joker from './Joker';
import SpecialRound from './SpecialRound';
import RoundOne from './Round1';
import MusicRound from './Round2';
import RoundThree from './Round3';
import RoundFour from './Round4';
import RoundFive from './Round5';
import RoundSix from './Round6';
import RoundSeven from './Round7';
import RandomRound from './Round8';
import BonusQuestions from './BonusQuestions';

const App = () => {
  const [currentPage, setPage] = useRecoilState(page);
  const [jokerName, setJoker] = useRecoilState(joker);
  const setJokerScore = useSetRecoilState(jokerScore);
  const [r1, setRound1] = useRecoilState(r1info);
  const [r2, setRound2] = useRecoilState(r2info);
  const [r3, setRound3] = useRecoilState(r3info);
  const [r4, setRound4] = useRecoilState(r4info);
  const [r5, setRound5] = useRecoilState(r5info);
  const [r6, setRound6] = useRecoilState(r6info);
  const [r7, setRound7] = useRecoilState(r7info);
  const [r8, setRound8] = useRecoilState(r8info);
  const funcs = {
    r1: setRound1,
    r2: setRound2,
    r3: setRound3,
    r4: setRound4,
    r5: setRound5,
    r6: setRound6,
    r7: setRound7,
    r8: setRound8,
  };

  const updateScore = (event) => {
    const round = event.target.value;
    const answerBoxes = document.querySelectorAll(`input[id~='round${round}answer']`);
    const answers = [];
    answerBoxes.forEach((answer) => answers.push(answer.value));
    const checkboxes = document.querySelectorAll(`input[id~='round${round}']`);
    const check = [];
    checkboxes.forEach((checkbox) => (checkbox.checked ? check.push(1) : check.push(0)));
    const thisScore = check.reduce((acc, cur) => {
      if (cur === null) {
        return acc;
      }
      return acc + cur;
    });
    const roundInfo = [`r${round}`];
    roundInfo.score = thisScore;
    roundInfo.answers = answers;
    roundInfo.scores = check;
    if (`r${round}` === jokerName) {
      setJokerScore(thisScore);
    }
    funcs[`r${round}`](roundInfo);
  };

  const handleClick = (event) => {
    setPage(Number(event.target.id));
  };

  const pickJoker = () => {
    const radio = document.querySelectorAll('input[name=\'joker\']');
    for (let i = 0; i < radio.length; i += 1) {
      if (radio[i].checked) {
        setJoker(radio[i].value);
        break;
      }
    }
  };

  function checkSpecialRound() {
    const specialRound = document.querySelectorAll('input[name=\'bonus\']');
    for (let i = 0; i < specialRound.length; i += 1) {
      let special = 0;
      if (i === 0) special = 1;
      else special = i + 2;
      const roundInfo = [`r${special}`];
      if (specialRound[i].checked && !roundInfo.special) {
        roundInfo.special = true;
        roundInfo.scores = Array(16).fill(null);
        roundInfo.answers = Array(16).fill('');
        funcs[`r${special}`](roundInfo);
      }
    }
  }

  const currentScore = useRecoilValue(score);
  const pageNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

  const renderPageNumbers = pageNumbers.map((number) => (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <li
      key={number}
      id={number}
      onClick={handleClick}
    >
      {number}
    </li>
  ));

  let currentRound;
  /*
  switch (currentPage) {
    default:
      currentRound = (<RoundOne />);
      break;
    case 1:
      currentRound = (<RoundOne />);
      break;
    case 2:
      currentRound = (<MusicRound />);
      break;
    case 3:
      currentRound = (<RoundThree />);
      break;
    case 4:
      currentRound = (<RoundFour />);
      break;
    case 5:
      currentRound = (<RoundFive />);
      break;
    case 6:
      currentRound = (<RoundSix />);
      break;
    case 7:
      currentRound = (<RoundSeven />);
      break;
    case 8:
      currentRound = (<RandomRound />);
      break;
  }
  */
  if (currentPage === 1) {
    currentRound = (<RoundOne updateScore={updateScore} />);
  } else if (currentPage === 2) {
    currentRound = (
      <MusicRound updateScore={updateScore} />
    );
  } else if (currentPage === 3) {
    currentRound = (
      <RoundThree updateScore={updateScore} />
    );
  } else if (currentPage === 4) {
    currentRound = (
      <RoundFour updateScore={updateScore} />
    );
  } else if (currentPage === 5) {
    currentRound = (
      <RoundFive updateScore={updateScore} />
    );
  } else if (currentPage === 6) {
    currentRound = (
      <RoundSix updateScore={updateScore} />
    );
  } else if (currentPage === 7) {
    currentRound = (
      <RoundSeven updateScore={updateScore} />
    );
  } else if (currentPage === 8) {
    currentRound = (
      <RandomRound updateScore={updateScore} />
    );
  }

  return (
    <div>
      <h2 align="center">GEEKS WHO DRINK Scoresheet</h2>
      <hr />
      <h4>
        {'Your Current Score is '}
        {currentScore}
      </h4>
      <hr />
      <Joker pickJoker={pickJoker} />
      <hr />
      <SpecialRound checkSpecialRound={checkSpecialRound} />
      <hr />
      {currentRound}
      <ul id="page-numbers">
        {renderPageNumbers}
      </ul>
      <hr />
      <BonusQuestions />
    </div>
  );
};

export default App;
