import { persistConfig } from './store';

describe('persistConfig', () => {
  it('should contain watchlists in whitelist', () => {
    expect(persistConfig.whitelist).not.toBeNull();
    expect(persistConfig.whitelist).toContain('watchlists');
  });
});
