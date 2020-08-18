/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

// eslint-disable-next-line react/prop-types
const Joker = ({ pickJoker }) => (
  <div>
    <p>Pick which round you want to joker!</p>
    <div>
      <input type="radio" id="Jround1" name="joker" value="r1" />
      <label htmlFor="Jround1">Round 1</label>

      <input type="radio" id="Jround2" name="joker" value="r2" />
      <label htmlFor="Jround2">Round 2</label>

      <input type="radio" id="Jround3" name="joker" value="r3" />
      <label htmlFor="Jround3">Round 3</label>

      <input type="radio" id="Jround4" name="joker" value="r4" />
      <label htmlFor="Jround4">Round 4</label>

      <input type="radio" id="Jround5" name="joker" value="r5" />
      <label htmlFor="Jround5">Round 5</label>

      <input type="radio" id="Jround6" name="joker" value="r6" />
      <label htmlFor="Jround6">Round 6</label>

      <input type="radio" id="Jround7" name="joker" value="r7" />
      <label htmlFor="Jround7">Round 7</label>

      <input type="radio" id="Jround8" name="joker" value="r8" />
      <label htmlFor="Jround8">Round 8</label>
    </div>
    <div>
      <button type="submit" id="jokerButton" onClick={pickJoker}>Submit Joker Round Selection</button>
    </div>
  </div>
);

export default Joker;
