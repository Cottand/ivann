import { Node } from '@baklavajs/core';
import { ModelNodes } from '@/nodes/model/Types';
import { TypeOptions } from '@/nodes/model/BaklavaDisplayTypeOptions';
import CheckboxValue from '@/baklava/CheckboxValue';

export enum SoftshrinkOptions {
  Lambd = 'Lambd'
}
export default class Softshrink extends Node {
  type = ModelNodes.Softshrink;
  name = ModelNodes.Softshrink;

  constructor() {
    super();
    this.addInputInterface('Input');
    this.addOutputInterface('Output');
    this.addOption(SoftshrinkOptions.Lambd, TypeOptions.SliderOption, 0.5);
  }
}
