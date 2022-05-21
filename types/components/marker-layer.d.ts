import { Icon, LatLng, Point } from 'leaflet';
import InteractiveLayer, { InteractiveLayerSignature } from './interactive-layer';

type MarkerLayerArgs = InteractiveLayerSignature['Args'] & {
  lat?: number;
  lng?: number;
  location?: LatLng;
  icon?: Icon;
  keyboard?: boolean;
  title?: string;
  alt?: string;
  zIndexOffset: number;
  opacity: number;
  riseOnHover?: boolean;
  riseOffset?: number;
  pane?: string;
  shadowPane?: string;
  bubblingMouseEvents?: boolean;
  draggable?: boolean;
  autoPan?: boolean
  autoPanPadding?: Point;
  autoPanSpeed?: number;
  onMove?: () => void;
  onDragstart?: () => void;
  onMovestart?: () => void;
  onDrag?: () => void;
  onDragend?: () => void;
  onMoveend?: () => void;
};

interface MarkerLayerSignature extends InteractiveLayerSignature {
  Args: MarkerLayerArgs;
}

export default class MarkerLakyer extends InteractiveLayer<MarkerLayerSignature> {}
