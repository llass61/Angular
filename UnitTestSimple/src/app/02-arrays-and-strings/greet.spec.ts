import { greet } from './greet';

describe('greet', () => {

  it('should output welcome message with passed in name', () =>
  {
    const msg = greet('Larry');
    expect(msg).toContain('Larry');
  });
});
