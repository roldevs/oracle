
import R from 'ramda';
import chaosModule from '../chaos';
import oddsModule from '../odds';
import tableModule from '../tables/table';
import {
  EOdds,
  ICheckEventMeaningResult,
  IDiceFateValue,
  ITableItem,
} from '../typings';
import diceFateModule from './dice/fate';
import checksEventFocusModule from './event/focus';
import checksEventMeaningModule from './event/meaning';
import checksFateExceptionalModule from './fate/exceptional';
import checksFateRandomEventModule from './fate/randomEvent';
import checksFateResultModule from './fate/result';

interface IMythicCheckEventResult {
  focus: string | null;
  meaning: ICheckEventMeaningResult;
}

interface IMythicCheckFateResult {
  result: boolean;
  exceptional: boolean;
  randomEvent: boolean;
  event?: IMythicCheckEventResult;
}

interface IMythicCheckFateOptions {
  focusItems: ITableItem[];
  meaning1Items: ITableItem[];
  meaning2Items: ITableItem[];
}

type TMythicCheck = (options: IMythicCheckFateOptions) => {
  resultFate: (chaos: number, odds: EOdds, dice: IDiceFateValue) => IMythicCheckFateResult;
  resultEvent: () => IMythicCheckEventResult;
};

const mythicModuleCheck: TMythicCheck =
(options) => {
  const resultFate: (chaos: number, odds: EOdds, dice: IDiceFateValue) => IMythicCheckFateResult =
  (chaos, odds, dice) => {
    const om = oddsModule(odds);
    const cm = chaosModule(om, chaos);
    const rm = checksFateResultModule(om, cm);
    const em = checksFateExceptionalModule(om, cm);
    const rem = checksFateRandomEventModule(om, cm);

    // TODO: Generate dive values
    const dm = diceFateModule(dice);

    const result = rm.result(dm);
    const exceptional = em.result(dm);
    const randomEvent = rem.result(dm);
    let r: IMythicCheckFateResult = { result, exceptional, randomEvent};

    if (randomEvent) {
      r = R.set(R.lensProp('event'), resultEvent(), r);
    }
    return r;
  };

  const resultEvent: () => IMythicCheckEventResult =
  () => {
    const efm = checksEventFocusModule(tableModule(options.focusItems));
    const emm = checksEventMeaningModule(
      tableModule(options.meaning1Items),
      tableModule(options.meaning2Items),
    );
    return {
      focus: efm.result(),
      meaning: emm.result(),
    };
  };

  return {
    resultFate,
    resultEvent,
  };
};

export {
  TMythicCheck,
  IMythicCheckEventResult,
  IMythicCheckFateResult,
  IMythicCheckFateOptions,
  mythicModuleCheck,
};
