import Component from '@glimmer/component';
import { MergedComponents } from '../glint';

interface BaseLayerSignature {
  Element: HTMLElement;
  Args: {
    node: string;
    didInsertParent: (element: Element) => void;
    willDestroyParent: () => void;
  };
  Blocks: [MergedComponents];
}

export default class BaseLayer<S extends BaseLayerSignature> extends Component<S> {}
