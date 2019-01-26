/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import R from 'ramda';
import diceFateModule from '../../../src/checks/dice/fate';

describe('diceFateModule', () => {
    // fateAreBothOdd,
    // fateAreBothEven,
    // fateAreBothEqual,
    // fateTotal,

  it('#fateAreBothOdd, #fateAreBothEven, #fateAreBothEqual', () => {
    expect(
      diceFateModule({fate1: 3, fate2: 4, chaos: 3}).fateAreBothOdd(),
    ).to.be.false;
    expect(
      diceFateModule({fate1: 3, fate2: 4, chaos: 3}).fateAreBothEqual(),
    ).to.be.false;
    expect(
      diceFateModule({fate1: 3, fate2: 4, chaos: 3}).fateAreBothEven(),
    ).to.be.false;
    expect(
      diceFateModule({fate1: 4, fate2: 3, chaos: 3}).fateAreBothOdd(),
    ).to.be.false;
    expect(
      diceFateModule({fate1: 4, fate2: 3, chaos: 3}).fateAreBothEqual(),
    ).to.be.false;
    expect(
      diceFateModule({fate1: 4, fate2: 3, chaos: 3}).fateAreBothEven(),
    ).to.be.false;

    R.forEach(
      (v: number) => {
        expect(
          diceFateModule({fate1: v, fate2: v, chaos: 3}).fateAreBothOdd(),
        ).to.be.true;
        expect(
          diceFateModule({fate1: v, fate2: v, chaos: 3}).fateAreBothEven(),
        ).to.be.false;
        expect(
          diceFateModule({fate1: v, fate2: v, chaos: 3}).fateAreBothEqual(),
        ).to.be.true;
      }, [1, 3, 5, 7, 9],
    );

    R.forEach(
      (v: number) => {
        expect(
          diceFateModule({fate1: v, fate2: v, chaos: 3}).fateAreBothOdd(),
        ).to.be.false;
        expect(
          diceFateModule({fate1: v, fate2: v, chaos: 3}).fateAreBothEven(),
        ).to.be.true;
        expect(
          diceFateModule({fate1: v, fate2: v, chaos: 3}).fateAreBothEqual(),
        ).to.be.true;
      }, [0, 2, 4, 6, 8],
    );
  });

});
