import { LatLngBounds } from 'leaflet';
import InteractiveLayer, { InteractiveLayerSignature } from './interactive-layer';

type ImageLayerArgs = InteractiveLayerSignature['Args'] & {
  url?: string;
  bounds?: LatLngBounds;
  opacity?: number;
  alt?: string;
  interactive?: boolean;
  crossOrigin?: boolean | 'anonymous' | 'use-credentials' | '';
  errorOverlayUrl?: string;
  zIndex?: number;
  className?: string;
  onLoad?: () => void;
  onError?: () => void;
};

interface ImageLayerSignature extends InteractiveLayerSignature {
  Args: ImageLayerArgs;
}

export default class ImageLayer<S extends ImageLayerSignature> extends InteractiveLayer<S> {}
