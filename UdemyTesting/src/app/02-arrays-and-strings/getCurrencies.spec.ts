import { getCurrencies } from "./getCurrencies";

describe('greet', () => {

    it('should return supported currencies', () => {
        const currencies = getCurrencies();
        expect(currencies).toContain('USD');
        expect(currencies).toContain('AUD');
        expect(currencies).toContain('EUR');
    });
})