/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import checkEventMeaningModule from '../../../src/checks/event/meaning';
import tableModule from '../../../src/tables/table';
import { ICheckEventMeaningResult } from '../../../src/typings';

describe('checkEventMeaningModule#result', () => {
  describe('no elements', () => {
    it('return null', () => {
      const table = tableModule([]);
      const result: ICheckEventMeaningResult = checkEventMeaningModule(table, table).result();
      expect(result.action1).to.be.null;
      expect(result.action2).to.be.null;
    });
  });

  describe('two different elements', () => {
    it('return one of the texts', () => {
      const table1 = tableModule([{text: 'one'}, {text: 'two'}]);
      const table2 = tableModule([{text: 'three'}, {text: 'four'}]);
      const result: ICheckEventMeaningResult = checkEventMeaningModule(table1, table2).result();
      expect(result.action1).to.not.be.null;
      expect(result.action1).to.be.oneOf(['one', 'two']);
      expect(result.action2).to.not.be.null;
      expect(result.action2).to.be.oneOf(['three', 'four']);
    });
  });
});
