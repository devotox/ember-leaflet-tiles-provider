import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('tile-layer', 'Integration | Component | tile layer', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`
    {{#leaflet-map lat=51.512983 lng=-0.138289 zoom=8}}
      {{tile-layer provider='Stamen.Watercolor'}}
    {{/leaflet-map}}
  `);

  assert.notEqual(this.$().text().trim(), '');
});
