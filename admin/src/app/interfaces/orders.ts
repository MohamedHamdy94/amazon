export interface Orders {
  orderItems: 
    {
      slug:  String,
      name:  String,
      quantity:  String,
      image:  String,
      price:  number,
      product: String
    }[]
  ,
  shippingAddress: {
    fullname:  String,
    address:  String,
    city:  String,
    postalCode:  String,
    country:  String,
  },
  paymentMethod: String,

  paymentResult: {
    _id: String,
    status: String,
    update_time: String,
    email_address: String,
  },
  itemsPrice: number,
  shippingPrice: number,
  taxPrice: number,
  totalPrice: number,
  isPaid: Boolean,
  paidAt: Date ,
  isDelivered:  Boolean,
  delivered:  Date,
  user: '',

__v:Number,
createdAt:  Date,
updatedAt: Date,
_id: String,

}[]
// createdAt: "2022-03-31T08:33:19.159Z"
// isDelivered: false
// isPaid: false
// itemsPrice: 18100
// orderItems: (2) [{…}, {…}]
// paymentMethod: "Stripe"
// shippingAddress: {fullname: 'mohamed', address: 'mohamed', city: 'mohamed', postalCode: 'mohamed', country: 'mohamed'}
// shippingPrice: 0
// taxPrice: 2715
// totalPrice: 20815
// updatedAt: "2022-03-31T08:33:19.159Z"
// user: "62454b30f76df51eff1a1175"
// __v: 0
// _id: