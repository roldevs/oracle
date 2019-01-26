
import { IDiceFateModule, TCheckFateRandomEventModule } from '../../typings';

const checksFateRandomEventModule: TCheckFateRandomEventModule =
(_, chaosModule) => {
  const result: (diceModule: IDiceFateModule) => boolean =
  (diceModule) => (
    diceModule.fateAreBothEqual() || diceModule.fateAreBothEven()
  ) && chaosModule.isInRange(diceModule.chaos());

  return {
    result,
  };
};

export default checksFateRandomEventModule;
