import { TChaosModule } from './typings';

const checkChaosModule: TChaosModule =
(oddsModule, chaos) => {
  const isNormalChaos: () => boolean = () => (chaos === 4 || chaos === 5);
  const isHighChaos: () => boolean = () => (chaos >= 6);
  const isLowChaos: () => boolean = () => (chaos <= 3);
  const isYesMoreLikely: () => boolean = () => {
    return isLowChaos() && oddsModule.positive() ||
      isHighChaos() && oddsModule.negative();
  };

  const bonusFate: () => number = () => {
    if (isNormalChaos()) { return 0; }
    if (isYesMoreLikely()) { return 2; }
    return -2;
  };

  const isInRange: (value: number) => boolean =
  (value) => value <= chaos;

  return {
    bonusFate,
    isInRange,
  };
};

export default checkChaosModule;
