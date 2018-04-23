/* eslint-env node */

module.exports = {
  name: 'ember-leaflet-tiles-provider',
  
  options: {
    nodeAssets: {
      'leaflet-providers': {
        import: ['leaflet-providers.js'],
      }
    }
  }
};
