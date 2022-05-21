import { Point } from 'leaflet';
import DivOverlayLayer, { DivOverlayLayerSignature } from './div-overlay-layer';

type PopupLayerArgs = DivOverlayLayerSignature['Args'] & {
  maxWidth?: number;
  minWidth?: number;
  maxHeight?: number;
  autoPan?: boolean;
  autoPanPaddingTopLeft?: Point;
  autoPanPaddingBottomRight?: Point;
  autoPanPadding?: Point;
  keepInView?: boolean;
  closeButton?: boolean;
  autoClose?: boolean;
  closeOnEscapeKey?: boolean;
  closeOnClick?: boolean;
};

interface PopupLayerSignature extends DivOverlayLayerSignature {
  Args: PopupLayerArgs;
}

export default class PopupLayer extends DivOverlayLayer<PopupLayerSignature> {}
