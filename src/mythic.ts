import { Dice } from 'dice-typescript';
import i18next from 'i18next';
import R from 'ramda';
import {
  IMythicCheckEventResult,
  IMythicCheckFateResult,
  mythicModuleCheck,
} from './checks/mythic';
import { EOdds, IDiceFateValue, ITableItem } from './typings';

interface IMythicOptions {
  t: i18next.TFunction;
}

type TMythic = (options: IMythicOptions) => {
  fate: (chaos: number, odds: EOdds) => string,
  event: () => string,
};

const keyString: (key: string) => (index: number) => ITableItem =
(key) => (index) => {
  return { text: `${key}${index + 1}` };
};

const generateTable: (key: string, size: number) => ITableItem[] =
(key, size) => R.times(keyString(key), size);

const generateFocusTable: () => ITableItem[] =
() => {
  return [{
    weight: 7,
    text: 'remote_event',
  }, {
    weight: 30,
    text: 'npc_action',
  }, {
    weight: 6,
    text: 'introduce_new_npc',
  }, {
    weight: 9,
    text: 'move_toward_a_thread',
  }, {
    weight: 6,
    text: 'move_away_from_a_thread',
  }, {
    weight: 2,
    text: 'close_a_thread',
  }, {
    weight: 11,
    text: 'pc_negative',
  }, {
    weight: 7,
    text: 'pc_positive',
  }, {
    weight: 7,
    text: 'ambiguous_event',
  }, {
    weight: 8,
    text: 'npc_negative',
  }, {
    weight: 8,
    text: 'npc_positive',
  }];
};

const mythicModule: TMythic =
(options) => {
  const check = mythicModuleCheck({
    focusItems: generateFocusTable(),
    meaning1Items: generateTable('meaning', 100),
    meaning2Items: generateTable('meaning', 100),
  });

  const dice: () => IDiceFateValue =
  () => {
    const d = new Dice();
    return {
      fate1: d.roll('1d10').total,
      fate2: d.roll('1d10').total,
      chaos: d.roll('1d10').total,
    };
  };

  const fateText: (result: IMythicCheckFateResult) => string =
  (result) => {
    const text: any[] = [];
    text.push(result.exceptional ? options.t(`fate.exceptional`) : null);
    text.push(result.result ? options.t(`fate.yes`) : options.t(`fate.no`));
    text.push(result.event ? `- ${event()}` : null);
    return R.compose(R.join(' '), R.filter(R.identity))(text);
  };

  const fate: (chaos: number, odds: EOdds) => string =
  (chaos, odds) => fateText(check.resultFate(chaos, odds, dice()));

  const focusText: (result: IMythicCheckEventResult) => string =
  (result) => options.t(`focus.${result.focus}`);

  const meaningText: (result: IMythicCheckEventResult) => string =
  (result) => `${options.t(`meaning1.${result.meaning.action1}`)}/${options.t(`meaning2.${result.meaning.action2}`)}`;

  const event: () => string =
  () => {
    const result: IMythicCheckEventResult = check.resultEvent();
    return `${focusText(result)} (${meaningText(result)})`;
  };

  return {
    fate,
    event,
  };
};

export {
  IMythicOptions,
  TMythic,
  mythicModule,
};
