/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import tableModule from '../../src/tables/table';
import { ITableItem } from '../../src/typings';

describe('tableModule#distribution', () => {
  describe('with different weights', () => {
    const table: ITableItem[] = [{
      text: 'Just once',
    }, {
      text: 'Twice',
      weight: 2,
    }, {
      text: 'Three times',
      weight: 3,
    }];
    it('should return distributed array accordingly', () => {
      expect(
        tableModule(table).distribution(),
      ).be.eql([{
        text: 'Just once',
      }, {
        text: 'Twice',
        weight: 2,
      }, {
        text: 'Twice',
        weight: 2,
      }, {
        text: 'Three times',
        weight: 3,
      }, {
        text: 'Three times',
        weight: 3,
      }, {
        text: 'Three times',
        weight: 3,
     }]);
    });
  });
});
