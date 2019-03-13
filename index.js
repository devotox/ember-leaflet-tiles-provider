'use strict';

const { name } = require('./package');

module.exports = {
  name,
  options: {
    nodeAssets: {
      'leaflet-providers': {
        import: ['leaflet-providers.js'],
      }
    }
  }
};
