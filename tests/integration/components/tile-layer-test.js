import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | tile-layer', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    // Template block usage:
    await render(hbs`
      {{#leaflet-map lat=51.512983 lng=-0.138289 zoom=8}}
        {{tile-layer provider='Stamen.Watercolor'}}
      {{/leaflet-map}}
    `);

    assert.notEqual(this.element.textContent.trim(), '');
  });
});
