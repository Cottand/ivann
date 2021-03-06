import { Node } from '@baklavajs/core';
import { OverviewNodes } from '@/nodes/overview/Types';
import { TypeOptions } from '@/nodes/model/BaklavaDisplayTypeOptions';
import CheckboxValue from '@/baklava/CheckboxValue';
import { valuesOf } from '@/app/util';
import { Reduction } from '@/app/ir/irCommon';

export enum HingeEmbeddingLossOptions {
  Margin = 'Margin',
  SizeAverage = 'Size average',
  Reduce = 'Reduce',
  Reduction = 'Reduction'
}
export default class HingeEmbeddingLoss extends Node {
  type = OverviewNodes.HingeEmbeddingLoss;
  name = OverviewNodes.HingeEmbeddingLoss;

  constructor() {
    super();

    this.addOutputInterface('Output');
    this.addOption(HingeEmbeddingLossOptions.Margin, TypeOptions.SliderOption, 1.0);
    this.addOption(HingeEmbeddingLossOptions.SizeAverage, TypeOptions.IntOption, 0);
    this.addOption(HingeEmbeddingLossOptions.Reduce, TypeOptions.IntOption, 0);
    this.addOption(HingeEmbeddingLossOptions.Reduction, TypeOptions.DropdownOption, 'mean',
      undefined, { items: valuesOf(Reduction) });
  }
}
