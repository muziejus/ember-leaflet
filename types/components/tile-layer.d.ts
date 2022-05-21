import BaseLayer, { BaseLayerSignature } from './base-layer';

type TileLayerArgs = BaseLayerSignature['Args'] & {
  url: string;
  minZoom?: number;
  maxZoom?: number;
  subdomains?: string | string[];
  errorTileUrl?: string;
  zoomOffset?: number;
  tms?: boolean;
  zoomReverse?: boolean;
  detectRetina?: boolean;
  crossOrigin?: boolean | string;
  tileSize?: number; // | Point;
};

interface TileLayerSignature extends BaseLayerSignature {
  Args: TileLayerArgs;
}

export default class TileLayer<S extends TileLayerSignature> extends BaseLayer<S> {}
