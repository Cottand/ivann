import { getPadding, Padding } from '@/app/ir/irCommon';
import { ModelNode } from '@/app/ir/mainNodes';
import { MaxPool2DOptions } from '@/nodes/model/pool/MaxPool2D';

export default class MaxPool3D {
  constructor(
        public padding: Padding,
        public readonly kernel: [bigint, bigint, bigint],
        public readonly stride: [bigint, bigint, bigint],
  ) {
  }

  static build(options: Map<string, any>): ModelNode {
    return new MaxPool3D(
      getPadding(options.get(MaxPool2DOptions.Padding)),
      [options.get(MaxPool2DOptions.KernelSize)[0],
        options.get(MaxPool2DOptions.KernelSize)[1],
        options.get(MaxPool2DOptions.KernelSize)[2]],
      [options.get(MaxPool2DOptions.Stride)[0],
        options.get(MaxPool2DOptions.Stride)[1],
        options.get(MaxPool2DOptions.Stride)[2]],
    );
  }
}
