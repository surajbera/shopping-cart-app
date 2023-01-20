import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartProductIds: []
  },
  reducers: {
    addToCart: (state, action) => {
      // state.cartProductIds = [...state.cartProductIds, action.payload]
      // tutor wrote this
      state.cartProductIds.push(action.payload)
    },
    removeFromCart: (state, action) => {
      /* tutor named this indexOfId */
      const productId = state.cartProductIds.indexOf(action.payload)
      state.cartProductIds.splice(productId, 1)
    },
    clearAllItems: (state, action) => {
      state.cartProductIds = []
    }
  }
})

export default cartSlice