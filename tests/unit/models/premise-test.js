import { setupTest } from 'fivewhys-web/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | premise', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('premise', {});
    assert.ok(model, 'model exists');
  });
});
