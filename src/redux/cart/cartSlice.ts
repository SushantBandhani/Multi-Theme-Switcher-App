import { createSlice } from "@reduxjs/toolkit";

function findItem(state:any, action:any) {
    return state.data.findIndex((ele: CartItemsPropsType) => { return ele.id === action.payload.id })
}

interface CartItemsPropsType {
    id: number
    quantity: number;
}

interface CartSliceType {
    data: CartItemsPropsType[];
}
const initialState: CartSliceType = {
    data: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemInCart(state, action) {
            const existingItemIndex = findItem(state, action);
            if (existingItemIndex !== -1) {
                state.data[existingItemIndex].quantity += 1;
                return;
            }

            state.data.push({ ...action.payload, quantity: 1 });
        },
        removeItemInCart(state, action) {
            const existingItemIndex = findItem(state, action);
            state.data.splice(existingItemIndex, 1)
        },
        increaseCartItemQuantity(state, action) {
            const existingItemIndex = findItem(state, action);
            state.data[existingItemIndex].quantity += 1;
            return;
        },
        decreaseCartItemQuantity(state,action){
             const existingItemIndex = findItem(state, action);
             state.data[existingItemIndex].quantity -= 1;

             if(state.data[existingItemIndex].quantity===0){
                state.data.splice(existingItemIndex, 1)
             }
            
        }
    }

})

export const {addItemInCart,removeItemInCart,increaseCartItemQuantity,decreaseCartItemQuantity}=cartSlice.actions;
export default cartSlice.reducer