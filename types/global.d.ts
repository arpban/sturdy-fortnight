type Product = {
  _id: string,
  name: string,
  price?: number,
  description?: string,
  rating?: number,
}

type Review = {
  _id: string,
  rating: number,
  comment: string,
}
