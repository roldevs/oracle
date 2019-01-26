
import { ITableItem, TCheckEventFocusModule } from '../../typings';

const checksEventFocusModule: TCheckEventFocusModule =
(tableModule) => {
  const tableItem: () => ITableItem | null = tableModule.random;

  const result: () => string | null =
  () =>  {
    const item: ITableItem | null = tableItem();
    if (item) {
      return item.text;
    }
    return null;
  };

  return {
    result,
  };
};

export default checksEventFocusModule;
