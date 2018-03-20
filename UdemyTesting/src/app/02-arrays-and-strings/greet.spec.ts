import { greet } from "./greet";

describe('greet', () => {

    let name = greet('Larry');

    it('greet should include Larry in message', () => {
        expect(name).toContain('Larry');
    });
})