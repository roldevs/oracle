/* tslint:disable no-unused-expression */
import { expect } from 'chai';
import checkEventFocusModule from '../../../src/checks/event/focus';
import tableModule from '../../../src/tables/table';

describe('checksEventFocusModule#result', () => {
  describe('no elements', () => {
    it('return null', () => {
      const table = tableModule([]);
      expect(checkEventFocusModule(table).result()).to.be.null;
    });
  });

  describe('two different elements', () => {
    it('return one of the texts', () => {
      const table = tableModule([{text: 'one'}, {text: 'two'}]);
      const text = checkEventFocusModule(table).result();
      expect(text).to.not.be.null;
      expect(text).to.be.oneOf(['one', 'two']);
    });
  });
});
