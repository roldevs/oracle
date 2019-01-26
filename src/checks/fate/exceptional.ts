
import { IDiceFateModule, TCheckFateExceptionalModule } from '../../typings';

const checksFateExceptionalModule: TCheckFateExceptionalModule =
(_, chaosModule) => {
  const result: (diceModule: IDiceFateModule) => boolean =
  (diceModule) => (
    diceModule.fateAreBothEqual() || diceModule.fateAreBothOdd()
  ) && chaosModule.isInRange(diceModule.chaos());

  return {
    result,
  };
};

export default checksFateExceptionalModule;
