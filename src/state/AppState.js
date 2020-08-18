import { atom, selector } from 'recoil';

export const page = atom({
  key: 'page',
  default: 1,
});

export const joker = atom({
  key: 'joker',
  default: '',
});

export const jokerScore = atom({
  key: 'jokerScore',
  default: 0,
});

export const r1info = atom({
  key: 'r1info',
  default: {
    round: 1,
    special: false,
    scores: Array(8).fill(null),
    answers: Array(8).fill(''),
    score: 0,
  },
});

export const r2info = atom({
  key: 'r2info',
  default: {
    round: 2,
    special: false,
    scores: Array(16).fill(null),
    answers: Array(16).fill(''),
    score: 0,
  },
});

export const r3info = atom({
  key: 'r3info',
  default: {
    round: 3,
    special: false,
    scores: Array(8).fill(null),
    answers: Array(8).fill(''),
    score: 0,
  },
});

export const r4info = atom({
  key: 'r4info',
  default: {
    round: 4,
    special: false,
    scores: Array(8).fill(null),
    answers: Array(8).fill(''),
    score: 0,
  },
});

export const r5info = atom({
  key: 'r5info',
  default: {
    round: 5,
    special: false,
    scores: Array(8).fill(null),
    answers: Array(8).fill(''),
    score: 0,
  },
});

export const r6info = atom({
  key: 'r6info',
  default: {
    round: 6,
    special: false,
    scores: Array(8).fill(null),
    answers: Array(8).fill(''),
    score: 0,
  },
});

export const r7info = atom({
  key: 'r7info',
  default: {
    round: 7,
    special: false,
    scores: Array(8).fill(null),
    answers: Array(8).fill(''),
    score: 0,
  },
});

export const r8info = atom({
  key: 'r8info',
  default: {
    round: 8,
    special: false,
    scores: Array(16).fill(null),
    answers: Array(16).fill(''),
    score: 0,
  },
});

export const score = selector({
  key: 'score',
  get: ({ get }) => {
    const r1 = get(r1info);
    const r2 = get(r2info);
    const r3 = get(r3info);
    const r4 = get(r4info);
    const r5 = get(r5info);
    const r6 = get(r6info);
    const r7 = get(r7info);
    const r8 = get(r8info);
    const jokerRoundScore = get(jokerScore);

    return r1.score + r2.score + r3.score + r4.score + r5.score + r6.score + r7.score
      + r8.score + jokerRoundScore;
  },
});
