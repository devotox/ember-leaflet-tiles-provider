[![Ember Observer Score](http://emberobserver.com/badges/ember-leaflet-tiles-provider.svg)](http://emberobserver.com/addons/ember-leaflet-tiles-provider)
[![Build Status](https://travis-ci.org/devotox/ember-leaflet-tiles-provider.svg)](http://travis-ci.org/devotox/ember-leaflet-tiles-provider)
[![Coverage Status](https://codecov.io/gh/devotox/ember-leaflet-tiles-provider/branch/master/graph/badge.svg)](https://codecov.io/gh/devotox/ember-leaflet-tiles-provider)
[![NPM Version](https://badge.fury.io/js/ember-leaflet-tiles-provider.svg)](http://badge.fury.io/js/ember-leaflet-tiles-provider)
[![NPM Downloads](https://img.shields.io/npm/dm/ember-leaflet-tiles-provider.svg)](https://www.npmjs.org/package/ember-leaflet-tiles-provider)
[![Dependency Status](https://david-dm.org/poetic/ember-leaflet-tiles-provider.svg)](https://david-dm.org/poetic/ember-leaflet-tiles-provider)
[![DevDependency Status](https://david-dm.org/poetic/ember-leaflet-tiles-provider/dev-status.svg)](https://david-dm.org/poetic/ember-leaflet-tiles-provider#info=devDependencies)
[![Greenkeeper](https://badges.greenkeeper.io/devotox/ember-leaflet-tiles-provider.svg)](https://greenkeeper.io/)

ember-leaflet-tiles-provider
==============================================================================

This addon extends [ember-leaflet](http://www.ember-leaflet.com/) 2.0. It extends the `{{tile-layer}}` component to support using a provider instead of a URL.
It uses [this leaflet extension](https://github.com/leaflet-extras/leaflet-providers) to accomplish that.

[DEMO](https://devotox.github.io/ember-leaflet-tiles-provider)

Installation
------------------------------------------------------------------------------

```
ember install ember-leaflet-tiles-provider
```

Usage
------------------------------------------------------------------------------

```javascript
provider: 'Esri.WorldImagery'
apiKey: '<enter-api-key>'
````

```hbs
{{#leaflet-map lat=51.512983 lng=-0.138289 zoom=12}}
  {{tile-layer provider=provider apiKey=apiKey}}
{{/leaflet-map}}
```

### Options
* Posible Map Options [Leaflet Extras](http://leaflet-extras.github.io/leaflet-providers/preview/index.html)

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
