import { Token } from '@lumino/coreutils';
import { TabPanel } from '@lumino/widgets';

export interface INotebookTree extends TabPanel {}

/**
 * The INotebookTree token.
 */
export const INotebookTree = new Token<INotebookTree>(
  '@jupyter-notebook/tree:INotebookTree'
);
