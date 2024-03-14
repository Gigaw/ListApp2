import {by, device, element, expect, waitFor} from 'detox';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should login succesfully', async () => {
    await element(by.id('login-input')).typeText('user1');
    await element(by.id('password-input')).typeText('password1');
    await element(by.id('login-button')).tap();
  });

  it('should go to profile details page and check comments', async () => {
    await element(by.id('post-item-1')).tap();
    await waitFor(element(by.id('show-comments-button')))
      .toBeVisible()
      .whileElement(by.id('comments-list'))
      .scroll(300, 'down', NaN, 0.85);
    await element(by.id('show-comments-button')).tap();
    await waitFor(element(by.id('comment-3-show-more-button')))
      .toBeVisible()
      .whileElement(by.id('comments-list'))
      .scroll(300, 'down', NaN, 0.85);
    await element(by.id('comment-2-show-more-button')).tap();
  });

  it('should go to album details page and check if image modal works', async () => {
    await element(by.id('album-tab')).tap();
    await element(by.id('album-item-3')).tap();
    await element(by.id('photo-item-5')).tap();
    await element(by.id('close-button')).tap();
  });

  it('should go to todos page and check if delete and mark as done works ', async () => {
    await element(by.id('todo-tab')).tap();
    await element(by.id('todo-item-3-checkbox')).tap();
    await element(by.id('todo-item-3-remove-button')).tap();
  });

  it('should logout succesfully', async () => {
    await element(by.id('profile-tab')).tap();
    await element(by.id('logout-button')).tap();
    await expect(element(by.id('login-input'))).toBeVisible();
  });
});
