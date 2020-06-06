import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | json-api', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:json-api');
    assert.ok(route);
  });
});
