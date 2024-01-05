
const colors = [
  'primary',
  'secondary',
  'neutral',
  'alert',
  'warning',
  'error'
];

type Colors = typeof colors;
type Color = Colors[number];
//   ^?

type TextProps = {
  color?: Color;
  children?: any;
}

export function Text({ color, children }: TextProps) {
  return (
    <span className={color}>{children}</span>
  );
}

function App() {
  return (
    <div>
      <Text color="primary">Hello World</Text>
    </div>
  );
}

// const promotion = {
//   title: 'Hello World',
//   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.',
//   color: 'primary'
// };
