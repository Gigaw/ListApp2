import {by, device, element, expect} from 'detox';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should login succesfully', async () => {
    await element(by.id('loginInput')).typeText('user1');
    await element(by.id('passwordInput')).typeText('password1');
    await element(by.id('loginButton')).tap();
  });
});
