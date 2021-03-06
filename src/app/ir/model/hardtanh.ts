import { HardtanhOptions } from '@/nodes/model/Hardtanh';
import { nodeName } from '@/app/ir/irCommon';

export default class Hardtanh {
  constructor(
  public readonly name: string,
  public readonly MinVal: number,
  public readonly MaxVal: number,
  public readonly Inplace: boolean,
  public readonly MinValue: [bigint],
  public readonly MaxValue: [bigint],
  ) {
  }

  static build(options: Map<string, any>): Hardtanh {
    return new Hardtanh(

      options.get(nodeName),
      options.get(HardtanhOptions.MinVal),
      options.get(HardtanhOptions.MaxVal),
      options.get(HardtanhOptions.Inplace),
      [options.get(HardtanhOptions.MinValue)[0]],
      [options.get(HardtanhOptions.MaxValue)[0]],
    );
  }

  public initCode(): string {
    return `Hardtanh(min_val=${this.MinVal}, max_val=${this.MaxVal}, inplace=${this.Inplace}, min_value=${this.MinValue}, max_value=${this.MaxValue})`;
  }
}
