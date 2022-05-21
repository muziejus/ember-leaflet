import { CRS } from 'leaflet';
import TileLayer, { TileLayerSignature } from './tile-layer';

type WmsTileLayerArgs = TileLayerSignature['Args'] & {
  layers?: string;
  styles?: string;
  format?: string;
  transparent?: boolean;
  version?: string;
  crs?: CRS;
  uppercase?: boolean;
};

interface WmsTileLayerSignature extends TileLayerSignature {
  Args: WmsTileLayerArgs;
}

export default class WmsTileLayer extends TileLayer<WmsTileLayerSignature> {}
