type Note = {
    title: string;
    description: string;
};

type B = Partial<Note>;
//   ^?

type Props = {
    a?: number;
    b?: string;
};

type C = Required<Props>;
//   ^?
