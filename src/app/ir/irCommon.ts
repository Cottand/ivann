export enum Padding {Valid, Same}

export type Initializer = CustomInitializer | BuiltinInitializer

export enum BuiltinInitializer {
  Zeroes
}

export class CustomInitializer {
}

export type Regularizer = BuiltinRegularizer

export enum BuiltinRegularizer {
  None
}

export type ActivationF = BuiltinActivationF

export enum BuiltinActivationF { Relu }
