import { LatLngBounds } from 'leaflet';
import ImageLayer, { ImageLayerSignature } from './image-layer';

type VideoLayerArgs = ImageLayerSignature['Args'] & {
  video?: string | string[] | HTMLVideoElement;
  bounds?: LatLngBounds;
  autoplay?: boolean;
  loop?: boolean;
  keepAspectRatio?: boolean;
  muted?: boolean;
  bubblingMouseEvents?: boolean;
};

interface VideoLayerSignature extends ImageLayerSignature {
  Args: VideoLayerArgs;
}

export default class VideoLayer extends ImageLayer<VideoLayerSignature> {}
