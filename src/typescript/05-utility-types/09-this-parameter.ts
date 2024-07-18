function toHex(this: number) {
    return this.toString(16);
}

type ToHexThisParameterType = ThisParameterType<typeof toHex>;
//   ^?

type ToHexWithoutThis = OmitThisParameter<typeof toHex>;
//   ^?
