import BaseLayer, { BaseLayerSignature } from './base-layer';

type InteractiveLayerArgs = BaseLayerSignature['Args'] & {
  interactive?: boolean;
  bubblingMouseEvents?: boolean;
  onClick?: () => void;
  onDblclick?: () => void;
  onMousedown?: () => void;
  onMouseup?: () => void;
  onMouseover?: () => void;
  onMouseout?: () => void;
  onContextmenu?: () => void;
};

interface InteractiveLayerSignature extends BaseLayerSignature {
  Args: InteractiveLayerArgs;
}

export default class InteractiveLayer<S extends InteractiveLayerSignature> extends BaseLayer<S> {}
