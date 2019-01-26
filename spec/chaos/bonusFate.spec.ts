/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import R from 'ramda';
import chaosModule from '../../src/chaos';
import oddsModule from '../../src/odds';
import { EOdds } from '../../src/typings';

interface IChaosTestItem {
  chaos: number;
  bonus: number;
}

const assertChaosItem: (odds: EOdds, chaos: number, bonuses: number[]) => void =
(odds, chaos, bonuses) => {
  expect(
    chaosModule(oddsModule(odds), chaos).bonusFate(),
  ).to.eql(bonuses[chaos]);
};

describe('chaosModule#bonusFate', () => {
  R.times((c: number) => {
    it(`correct bonus for ${c} chaos`, () => {
      assertChaosItem(EOdds.Impossible, c, [-2, -2, -2, -2, 0, 0, 2, 2, 2, 2]);
      assertChaosItem(EOdds.NoWay, c, [-2, -2, -2, -2, 0, 0, 2, 2, 2, 2]);
      assertChaosItem(EOdds.VeryUnlikely, c, [-2, -2, -2, -2, 0, 0, 2, 2, 2, 2]);
      assertChaosItem(EOdds.Unlikely, c, [-2, -2, -2, -2, 0, 0, 2, 2, 2, 2]);
      assertChaosItem(EOdds.Unsure, c, [2, 2, 2, 2, 0, 0, -2, -2, -2, -2]);
      assertChaosItem(EOdds.Likely, c, [2, 2, 2, 2, 0, 0, -2, -2, -2, -2]);
      assertChaosItem(EOdds.VeryLikely, c, [2, 2, 2, 2, 0, 0, -2, -2, -2, -2]);
      assertChaosItem(EOdds.SureThing, c, [2, 2, 2, 2, 0, 0, -2, -2, -2, -2]);
      assertChaosItem(EOdds.HasToBe, c, [2, 2, 2, 2, 0, 0, -2, -2, -2, -2]);
    });
  }, 10);
});
