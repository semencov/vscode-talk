export type Product = {
  image: string;
  name: string;
  price: string;
  sku: string;
  productId: number;
};

export type Variant = {
  name: string;
  price: string | null;
  sku: string;
  productId: number;
  variantId: string;
};

function Title({ name }: Product | Variant) {
  return <h1>{name}</h1>;
           // ^?
}

function Page() {
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
