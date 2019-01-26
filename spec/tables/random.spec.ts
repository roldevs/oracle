/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import tableModule from '../../src/tables/table';
import { ITableItem } from '../../src/typings';

describe('tableModule#random', () => {
  describe('no elements', () => {
    it('return null', () => {
      const item: ITableItem | null = tableModule([]).random();
      expect(item).to.be.null;
    });
  });

  describe('two different elements', () => {
    const table: ITableItem[] = [{text: 'one'}, {text: 'two'}];
    it('return one of the elements', () => {
      const item: ITableItem | null = tableModule(table).random();
      expect(item).not.to.be.null;
      expect(item!.text).to.be.oneOf(['one', 'two']);
    });

    it('return one of the elements', () => {
      const text: string | null = tableModule(table).randomText();
      expect(text).not.to.be.null;
      expect(text).to.be.oneOf(['one', 'two']);
    });
  });
});
