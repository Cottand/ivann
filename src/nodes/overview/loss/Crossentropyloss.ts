import { Node } from '@baklavajs/core';
import { OverviewNodes } from '@/nodes/overview/Types';
import { TypeOptions } from '@/nodes/model/BaklavaDisplayTypeOptions';
import CheckboxValue from '@/baklava/CheckboxValue';
import { valuesOf } from '@/app/util';
import { Reduction } from '@/app/ir/irCommon';

export enum CrossEntropyLossOptions {
  Weight = 'Weight',
  SizeAverage = 'Size average',
  IgnoreIndex = 'Ignore index',
  Reduce = 'Reduce',
  Reduction = 'Reduction'
}
export default class CrossEntropyLoss extends Node {
  type = OverviewNodes.CrossEntropyLoss;
  name = OverviewNodes.CrossEntropyLoss;

  constructor() {
    super();

    this.addOutputInterface('Output');
    this.addOption(CrossEntropyLossOptions.Weight, TypeOptions.VectorOption, [0]);
    this.addOption(CrossEntropyLossOptions.SizeAverage, TypeOptions.IntOption, 0);
    this.addOption(CrossEntropyLossOptions.IgnoreIndex, TypeOptions.IntOption, -100);
    this.addOption(CrossEntropyLossOptions.Reduce, TypeOptions.IntOption, 0);
    this.addOption(CrossEntropyLossOptions.Reduction, TypeOptions.DropdownOption, 'mean',
      undefined, { items: valuesOf(Reduction) });
  }
}
