import { SmoothL1LossOptions } from '@/nodes/overview/loss/Smoothl1loss';
import { nodeName, Reduction, getReduction } from '@/app/ir/irCommon';

export default class SmoothL1Loss {
  constructor(
  public readonly name: string,
  public readonly SizeAverage: bigint,
  public readonly Reduce: bigint,
  public readonly Reduction: Reduction,
  public readonly Beta: number,
  ) {
  }

  static build(options: Map<string, any>): SmoothL1Loss {
    return new SmoothL1Loss(

      options.get(nodeName),
      options.get(SmoothL1LossOptions.SizeAverage),
      options.get(SmoothL1LossOptions.Reduce),
      getReduction(options.get(SmoothL1LossOptions.Reduction)),
      options.get(SmoothL1LossOptions.Beta),
    );
  }

  public initCode(): string {
    return `nn.SmoothL1Loss(size_average=${this.SizeAverage}, reduce=${this.Reduce}, reduction='${this.Reduction}', beta=${this.Beta})`;
  }
}
