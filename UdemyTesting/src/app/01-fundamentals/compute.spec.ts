import { compute } from "./compute";

describe('compute', () => {

    const comp = compute(-1);

    it('neg input value should return 0', () => {
        expect(compute(-1)).toBe(0);
    });

    it('input value 1 should return 2', () => {
        expect(compute(1)).toBe(2);
    });
})