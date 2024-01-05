declare function f1(arg: { a: number; b: string }): void;

type N = Parameters<typeof f1>;
//   ^?

type O = ReturnType<typeof f1>;
//   ^?

