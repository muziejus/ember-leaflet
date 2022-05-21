import { LatLng } from 'leaflet';
import PathLayer, { PathLayerSignature } from './path-layer';

type ArrayPathLayerArgs = PathLayerSignature['Args'] & {
  locations?: LatLng[];
};

interface ArrayPathLayerSignature extends PathLayerSignature {
  Args: ArrayPathLayerArgs;
}

export default class ArrayPathLayer<S extends ArrayPathLayerSignature> extends PathLayer<S> {}
