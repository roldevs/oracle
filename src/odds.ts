import { TOddsModule } from './typings';

const checkOddsModule: TOddsModule =
(odds) => {
  const bonus: () => number = () => odds;
  const positive: () => boolean = () => (odds >= 0);
  const negative: () => boolean = () => odds < 0;

  return {
    bonus,
    positive,
    negative,
  };
};

export default checkOddsModule;
