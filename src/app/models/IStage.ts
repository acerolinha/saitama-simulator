import { IAction } from './IAction';
import { IItem } from './IItem';

export interface IStage {
  stage: number;
  action: IAction;
  item: IItem;
}
