import { compute } from './compute';

describe('compute', () => {
    it('should return 0 if input is neg',
    () => {
      const result = compute(-1);
      expect(result).toBe(0);
    });

    it('should return 1 if input is 0',
    () => {
      const result = compute(0);
      expect(result).toBe(1);
    });

    it('should return 100 if input is 99',
    () => {
      const result = compute(99);
      expect(result).toBe(100);
    });
  });
