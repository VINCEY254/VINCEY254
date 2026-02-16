import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

type CartItem = { productId: string; name: string; quantity: number; price: number };

const cartSlice = createSlice({
  name: 'cart',
  initialState: [] as CartItem[],
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const item = state.find((entry) => entry.productId === action.payload.productId);
      if (item) item.quantity += action.payload.quantity;
      else state.push(action.payload);
    }
  }
});

export const { addToCart } = cartSlice.actions;

export const store = configureStore({ reducer: { cart: cartSlice.reducer } });
export type RootState = ReturnType<typeof store.getState>;
