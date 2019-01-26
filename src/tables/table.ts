import R from 'ramda';
import { ITableItem, TTableModule } from '../typings';

const getWeight: (item: ITableItem) => number =
(item) => R.defaultTo(1, R.prop('weight', item));

const generateItems: (item: ITableItem) => ITableItem[] =
(element) => Array(getWeight(element)).fill(element);

const randomItem: (items: ITableItem[]) => ITableItem | null =
(array) => R.defaultTo(null, (array[Math.floor(Math.random() * array.length)]));

const tableModule: TTableModule =
(items) => {
  const distribution: () => ITableItem[] =
  () => R.flatten<ITableItem>(R.map(generateItems, items));

  const random: () => ITableItem | null = () => randomItem(distribution());

  const randomText: () => string | null =
  () =>  {
    const item: ITableItem | null = random();
    if (item) {
      return item.text;
    }
    return null;
  };

  return {
    random,
    randomText,
    distribution,
  };
};

export default tableModule;
