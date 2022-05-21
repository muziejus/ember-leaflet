import ArrayPathLayer, { ArrayPathLayerSignature } from './array-path-layer';

type PolylineLayerArgs = ArrayPathLayerSignature['Args'] & {
  smoothFactor?: number;
  noClip?: boolean;
};

interface PolylineLayerSignature extends ArrayPathLayerSignature {
  Args: PolylineLayerArgs;
}

export default class PolylineLayer extends ArrayPathLayer<PolylineLayerSignature> {}
