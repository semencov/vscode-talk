
type UpperString = Uppercase<string>;
type LowerString = Lowercase<string>;
type CapitalizeString = Capitalize<string>;
type UncapitalizeString = Uncapitalize<string>;

type ToUppercase<T extends string> = `${Uppercase<T>}`;

type ExampleUpper = ToUppercase<"hello">;
//   ^?  

type ToLowercase<T extends string> = `${Lowercase<T>}`;

type ExampleLower = ToLowercase<"GOODBYE">;
//   ^?

