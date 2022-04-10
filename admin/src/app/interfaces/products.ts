export interface Products {
  products:{

    name: String;
    slug: String;
    image: String;
    brand: String;
    category: String;
    description: String;
    price: Number;
    countInStock: Number;
    rating: Number;
    numReviews: Number;
  }[]
}
