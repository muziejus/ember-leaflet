import { LatLng, Layer } from 'leaflet';
import BaseLayer, { BaseLayerSignature } from './base-layer';

type GeojsonLayerArgs = BaseLayerSignature['Args'] & {
  geoJSON?: {};
  style?: (feature: {}) => {};
  onEachFeature?: (feature: {}, layer: Layer) => void;
  filter?: (feature: {}) => {}[];
  coordsToLatLng?: (coords: {}) => LatLng;
  markersInheritOptions?: boolean;
  onLayeradd?: () => void;
  onLayerremove?: () => void;
};

interface GeojsonLayerSignature extends BaseLayerSignature {
  Args: GeojsonLayerArgs;
}

export default class GeojsonLayer extends BaseLayer<GeojsonLayerSignature> {}
