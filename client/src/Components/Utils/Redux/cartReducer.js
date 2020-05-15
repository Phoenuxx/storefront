const cartReducer = (state = {
    cart: []
  }, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        state = {
          cart: [...state.cart, action.payload
         ]
        };
        break;
      case 'REMOVE_FROM_CART':
        state = {
          product: action.payload.product,
          image: action.payload.image,
          price: action.payload.price,
          quantity: action.payload.quantity,
        }
        break;
    }
    return state;
  };

  export default cartReducer;