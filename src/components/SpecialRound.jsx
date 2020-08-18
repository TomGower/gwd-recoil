/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

// eslint-disable-next-line react/prop-types
const SpecialRound = ({ checkSpecialRound }) => (
  <div>
    <p>Pick which rounds are special 16-point rounds!</p>
    <div>
      <input type="checkbox" id="Bround1" name="bonus" value="r1" />
      <label htmlFor="Bround1">Round 1</label>

      <input type="checkbox" id="Bround3" name="bonus" value="r3" />
      <label htmlFor="Bround3">Round 3</label>

      <input type="checkbox" id="Bround4" name="bonus" value="r4" />
      <label htmlFor="Bround4">Round 4</label>

      <input type="checkbox" id="Bround5" name="bonus" value="r5" />
      <label htmlFor="Bround5">Round 5</label>

      <input type="checkbox" id="Bround6" name="bonus" value="r6" />
      <label htmlFor="Bround6">Round 6</label>

      <input type="checkbox" id="Bround7" name="bonus" value="r7" />
      <label htmlFor="Bround7">Round 7</label>
    </div>
    <div>
      <button type="submit" id="bonusButton" onClick={checkSpecialRound}>Submit Special 16-Point Round Selections</button>
    </div>
  </div>
);

export default SpecialRound;
