import quickSort from '../';
import { defaultSortTest } from '../../../utils';

describe('quick sort', () => {
  it('should sort random array', () => {
    defaultSortTest(quickSort);
  });
});
