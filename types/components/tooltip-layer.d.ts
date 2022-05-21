import DivOverlayLayer, { DivOverlayLayerSignature } from './div-overlay-layer';

type TooltipLayerArgs = DivOverlayLayerSignature['Args'] & {
  direction?: 'auto' | 'right' | 'left' | 'top' | 'bottom' | 'center';
  permanent?: boolean;
  sticky?: boolean;
  interactive?: boolean;
  opacity?: number;
};

interface TooltipLayerSignature extends DivOverlayLayerSignature {
  Args: TooltipLayerArgs;
}

export default class TooltipLayer extends DivOverlayLayer<TooltipLayerSignature> {}
