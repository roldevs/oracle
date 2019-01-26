
import { IDiceFateModule, TCheckFateResultModule } from '../../typings';

const checksFateResultModule: TCheckFateResultModule =
(oddsModule, chaosModule) => {
  const fateTotalValue: (totalDice: number) => number =
  (totalDice) => (totalDice + oddsModule.bonus() + chaosModule.bonusFate());

  const result: (diceModule: IDiceFateModule) => boolean =
  (diceModule) => fateTotalValue(diceModule.fateTotal()) >= 11;

  return {
    result,
  };
};

export default checksFateResultModule;
