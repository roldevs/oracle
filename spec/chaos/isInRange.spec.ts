/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import R from 'ramda';
import chaosModule from '../../src/chaos';
import oddsModule from '../../src/odds';
import { EOdds } from '../../src/typings';

describe('chaosModule#isInRange', () => {
  it('if dice is less or equal chaos, then it is in range', () => {
    const o = oddsModule(EOdds.Unsure);
    // drop some examples
    expect(chaosModule(o, 5).isInRange(1)).to.be.true;
    expect(chaosModule(o, 5).isInRange(6)).to.be.false;
    expect(chaosModule(o, 3).isInRange(1)).to.be.true;
    expect(chaosModule(o, 3).isInRange(6)).to.be.false;
  });
});
