# ember-leaflet-tiles-provider

[![Ember Observer Score](http://emberobserver.com/badges/ember-leaflet-tiles-provider.svg)](http://emberobserver.com/addons/ember-leaflet-tiles-provider)
[![Build Status](https://travis-ci.org/devotox/ember-leaflet-tiles-provider.svg)](http://travis-ci.org/devotox/ember-leaflet-tiles-provider)
[![Coverage Status](https://coveralls.io/repos/github/devotox/mber-leaflet-tiles-provider/badge.svg)](https://coveralls.io/github/devotox/ember-leaflet-tiles-provider)
[![NPM Version](https://badge.fury.io/js/ember-leaflet-tiles-provider.svg)](http://badge.fury.io/js/ember-leaflet-tiles-provider)
[![NPM Downloads](https://img.shields.io/npm/dm/ember-leaflet-tiles-provider.svg)](https://www.npmjs.org/package/ember-leaflet-tiles-provider)
[![Greenkeeper](https://badges.greenkeeper.io/devotox/ember-leaflet-tiles-provider.svg)](https://greenkeeper.io/)

## Description
This addon extends [ember-leaflet](http://www.ember-leaflet.com/) 2.0. It extends the `{{tile-layer}}` component to support using a provider instead of a URL.
It uses [this leaflet extension](https://github.com/leaflet-extras/leaflet-providers) to accomplish that.

## Installation
* `ember install ember-leaflet-tiles-provider`

## Usage
```javascript
provider: 'Esri.WorldImagery'
apiKey: '<enter-api-key>'
````

```hbs
{{#leaflet-map lat=51.512983 lng=-0.138289 zoom=12}}
  {{tile-layer provider=provider apiKey=apiKey}}
{{/leaflet-map}}
```

#### License
MIT license.
