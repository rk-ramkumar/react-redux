const { createSlice, configureStore } = require("@reduxjs/toolkit");

const couterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers:{
        increament: state=>{
            state.value += 1
        },
        decrement: state =>{
            state -= 1
        }
    }
})

const {increament, decrement} = couterSlice.actions

const store = configureStore({
    reducer: couterSlice
})
