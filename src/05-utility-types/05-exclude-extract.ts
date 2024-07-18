type G = Exclude<"a" | "b" | "c", "a">;
//   ^?

type H = Exclude<"a" | "b" | "c", "a" | "b">;
//   ^?

type I = Exclude<string | number | (() => void), (...args: any[]) => any>;
//   ^?

type J = Extract<"a" | "b" | "c", "a" | "f">;
//   ^?

type K = Extract<string | number | (() => void), (...args: any[]) => any>;
//   ^?
