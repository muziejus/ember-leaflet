import { Point } from 'leaflet';
import BaseLayer, { BaseLayerSignature } from './base-layer';

type DivOverlayLayerArgs = BaseLayerSignature['Args'] & {
  offset?: Point;
  className?: string;
  pane?: string;
};

interface DivOverlayLayerSignature extends BaseLayerSignature {
  Args: DivOverlayLayerArgs;
}

export default class DivOverlayLayer<S extends DivOverlayLayerSignature> extends BaseLayer<S> {}
