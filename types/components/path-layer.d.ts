import { Renderer } from 'leaflet';
import InteractiveLayer, { InteractiveLayerSignature } from './interactive-layer';

type PathLayerArgs = InteractiveLayerSignature['Args'] & {
  stroke?: boolean;
  color?: string;
  weight?: number;
  opacity?: number;
  lineCap?: 'round' | 'butt' | 'square';
  lineJoin?: 'round' | 'arcs' | 'bevel' | 'miter' | 'miter-clip';
  dashArray?: string;
  dashOffset?: string;
  fill?: boolean;
  fillColor?: string;
  fillOpacity?: number;
  fillRule?: 'nonzero' | 'evenodd';
  bubblingMouseEvents?: boolean;
  renderer?: Renderer;
  className?: string;
};

interface PathLayerSignature extends InteractiveLayerSignature {
  Args: PathLayerArgs;
}

export default class PathLayer<S extends PathLayerSignature> extends InteractiveLayer<S> {}
