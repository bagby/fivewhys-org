import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'fivewhys-web/tests/helpers';

module('Acceptance | premises', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting / displays premises', async function (assert) {
    await visit('/');

    assert.strictEqual(currentURL(), '/');

    assert.dom('[data-test-premise]').exists({ count: 3 });
  });
});
