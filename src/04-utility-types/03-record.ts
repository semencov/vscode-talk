
type D = Record<string, CatInfo>;
//   ^?

interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";
