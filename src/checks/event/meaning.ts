
import { ICheckEventMeaningResult, TCheckEventMeaningModule } from '../../typings';

const checksEventMeaningModule: TCheckEventMeaningModule =
(table1Module, table2Module) => {
  const result: () => ICheckEventMeaningResult =
  () =>  {
    return {
      action1: table1Module.randomText(),
      action2: table2Module.randomText(),
    };
  };

  return {
    result,
  };
};

export default checksEventMeaningModule;
