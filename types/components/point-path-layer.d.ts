import { LatLng } from 'leaflet';
import PathLayer, { PathLayerSignature } from './path-layer';

type PointPathLayerArgs = PathLayerSignature['Args'] & {
  lat: number;
  lng: number;
  location: LatLng;
};

interface PointPathLayerSignature extends PathLayerSignature {
  Args: PointPathLayerArgs;
}

export default class PointPathLayer<S extends PointPathLayerSignature> extends PathLayer<S> {}
