import PointPathLayer, { PointPathLayerSignature } from './point-path-layer';

type CircleMarkerLayerArgs = PointPathLayerSignature['Args'] & {
  radius?: number;
};

interface CircleMarkerLayerSignature extends PointPathLayerSignature {
  Args: CircleMarkerLayerArgs;
}

export default class CircleMarkerLayer extends PointPathLayer<CircleMarkerLayerSignature> {}
