import { persistConfig } from './store';

describe('persistConfig', () => {
  it('should contain whitelist', () => {
    expect(persistConfig.whitelist).not.toBeNull();
  });
});
