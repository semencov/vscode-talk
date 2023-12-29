export type Product = {
  image: string;
  name: string;
  price: string;
  sku: string;
  url: string;
  productId: number;
  productCode: string;
};

export type Variant = {
  image: string;
  name: string;
  price: string | null;
  sku: string;
  url: string | null;
  productId: number;
  variantId: string;
};

function Title({ name }: Product | Variant) {
  return <h1>{name}</h1>;
           // ^?
}

function App() {
  const product = {
    image: "https://example.com/image.png",
    name: "Product Name",
    price: "$10.00",
    sku: "12345",
    url: "https://example.com/product",
    productId: 123,
    productCode: "ABC123",
    variantId: "12345",
  };

  return <Title {...product} />;
}
