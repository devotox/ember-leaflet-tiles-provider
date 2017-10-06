import TileLayer from 'ember-leaflet/components/tile-layer';

export default TileLayer.extend({
  
  leafletProviderOptions: [ // needed for access to paid maps
    'apiKey',  // Thunderforest
    'accessToken', // Mapbox
    'app_id', 'app_code' // HERE (Formerly Nokia maps)
  ],
  createProviderLayer(provider) {
      this.set('leafletRequiredOptions', ['provider']);
    
      let leafletOptions = this.get('leafletOptions');
      let leafletProviderOptions = this.get('leafletProviderOptions');
      this.set('leafletOptions', Object.assign([], leafletOptions, leafletProviderOptions));
    
      return this.L.tileLayer.provider(provider, this.get('options'));
  },
  createLayer() {
    let provider = this.get('provider');
    
    return !provider 
      ? this._super(...arguments)
      : this.createProviderLayer(provider);
  }
});