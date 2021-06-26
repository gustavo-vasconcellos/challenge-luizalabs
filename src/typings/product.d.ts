interface ProductsResult {
  products: Product[];
}

interface Product {
  id: number;
  sku: number;
  title: string;
  description: string;
  availableSizes: AvailableSizes;
  style: string;
  price: number;
  installments: number;
  currencyId: string;
  currencyFormat: string;
  isFreeShipping: boolean;
  image: string;
}

interface AvailableSizes {
  S?: number;
  G?: number;
  GG?: number;
  GGG?: number;
  "40"?: number;
  "43"?: number;
  "41"?: number;
}
