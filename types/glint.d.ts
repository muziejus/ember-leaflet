import type BaseLayer from './components/base-layer';
import type LeafletMap from './components/leaflet-map';
import type TileLayer from './components/tile-layer';
import type WmsTileLayer from './components/wms-tile-layer';
import type MarkerLayer from './components/marker-layer';
import type CircleLayer from './components/circle-layer';
import type CircleMarkerLayer from './components/circle-marker-layer';
import type ImageLayer from './components/image-layer';
import type VideoLayer from './components/video-layer';
import type PolylineLayer from './components/polyline-layer';
import type PolygonLayer from './components/polygon-layer';
import type GeojsonLayer from './components/geojson-layer';
import type RectangleLayer from './components/rectangle-layer';

export interface MergedComponents {
  tile?: typeof TileLayer;
  'wms-tile'?: typeof WmsTileLayer;
  marker?: typeof MarkerLayer;
  circle?: typeof CircleLayer;
  'circle-marker'?: typeof CircleMarkerLayer;
  image?: typeof ImageLayer;
  video?: typeof VideoLayer;
  polyline?: typeof PolylineLayer;
  polygon?: typeof PolygonLayer;
  geojson?: typeof GeojsonLayer;
  rectange?: typeof RectangleLayer;
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    BaseLayer: typeof BaseLayer;
    'base-layer': typeof BaseLayer;
    LeafletMap: typeof LeafletMap;
    'leaflet-map': typeof LeafletMap;
    TileLayer: typeof TileLayer;
    'tile-layer': typeof TileLayer;
    WmsTileLayer: typeof WmsTileLayer;
    'wms-tile-layer': typeof WmsTileLayer;
    MarkerLayer: typeof MarkerLayer;
    'marker-layer': typeof MarkerLayer;
    CircleLayer: typeof CircleLayer;
    'circle-layer': typeof CircleLayer;
    CircleMarkerLayer: typeof CircleMarkerLayer;
    'circle-marker-layer': typeof CircleMarkerLayer;
    ImageLayer: typeof ImageLayer;
    'image-layer': typeof ImageLayer;
    VideoLayer: typeof VideoLayer;
    'video-layer': typeof VideoLayer;
    PolylineLayer: typeof PolylineLayer;
    'polyline-layer': typeof PolylineLayer;
    PolygonLayer: typeof PolygonLayer;
    'polygon-layer': typeof PolygonLayer;
    GeojsonLayer: typeof GeojsonLayer;
    'geojson-layer': typeof GeojsonLayer;
    RectangleLayer: typeof RectangleLayer;
    'rectangle-layer': typeof RectangleLayer;
  }
}
