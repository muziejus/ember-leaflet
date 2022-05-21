import PointPathLayer, { PointPathLayerSignature } from './point-path-layer';

type CircleLayerArgs = PointPathLayerSignature['Args'] & {
  radius?: number;
};

interface CircleLayerSignature extends PointPathLayerSignature {
  Args: CircleLayerArgs;
}

export default class CircleLayer extends PointPathLayer<CircleLayerSignature> {}
