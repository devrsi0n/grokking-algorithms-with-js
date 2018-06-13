import selectionSort from '..';
import { defaultSortTest } from '../../../utils';

describe('selection sort', () => {
  it('should sort random array', () => {
    defaultSortTest(selectionSort);
  });
});
