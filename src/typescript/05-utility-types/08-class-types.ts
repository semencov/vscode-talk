type P = ConstructorParameters<ErrorConstructor>;
//   ^?

class Coordinates {
    x = 0;
    y = 0;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

type CoordinatesConstructor = ConstructorParameters<typeof Coordinates>;
//   ^?

type CoordinatesInstance = InstanceType<typeof Coordinates>;
//   ^?
