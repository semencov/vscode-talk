
type G = Exclude<"a" | "b" | "c", "a">;
//   ^?

type H = Exclude<"a" | "b" | "c", "a" | "b">;
//   ^?

type I = Exclude<string | number | (() => void), Function>;
//   ^?


type J = Extract<"a" | "b" | "c", "a" | "f">;
//   ^?

type K = Extract<string | number | (() => void), Function>;
//   ^?
