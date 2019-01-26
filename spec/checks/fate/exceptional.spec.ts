/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import chaosModule from '../../../src/chaos';
import diceFateModule from '../../../src/checks/dice/fate';
import checksFateExceptionalModule from '../../../src/checks/fate/exceptional';
import oddsModule from '../../../src/odds';
import { EOdds } from '../../../src/typings';

describe('checksFateExceptionalModule', () => {
  it('example result', () => {
    const o = oddsModule(EOdds.Unlikely);
    const c = chaosModule(o, 6);
    const f = checksFateExceptionalModule(o, c);
    const diceModule = diceFateModule({
      fate1: 3,
      fate2: 4,
      chaos: 3,
    });

    expect(f.result(diceModule)).to.be.false;
  });
});
