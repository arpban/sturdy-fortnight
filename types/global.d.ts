type Product = {
  _id: string,
  name: string,
  price?: number,
  description?: string,
  reviews?: Review[]
}

type Review = {
  _id: string,
  rating: number,
  comment: string,
}
