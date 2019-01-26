
import R from 'ramda';
import { TDiceFateModule } from '../../typings';

const diceFateModule: TDiceFateModule =
(dice) => {
  const isOdd: (value: number) => boolean = (value) => (value % 2) === 1;

  const fateAreBothOdd: () => boolean =
  () => isOdd(dice.fate1) && isOdd(dice.fate2);

  const fateAreBothEven: () => boolean =
  () => !isOdd(dice.fate1) && !isOdd(dice.fate2);

  const fateAreBothEqual: () => boolean =
  () => dice.fate1 === dice.fate2;

  const fateTotal: () => number =
  () => dice.fate1 + dice.fate2;

  return {
    fateAreBothOdd,
    fateAreBothEven,
    fateAreBothEqual,
    fateTotal,
    chaos: R.always(dice.chaos),
  };
};

export default diceFateModule;
