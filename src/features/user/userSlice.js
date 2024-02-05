import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getAddress } from "../../services/apiGeocoding";



function getPosition() {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

export const fetchAddress = createAsyncThunk('user/fetchAddress', async function () {


    // we get the user's position
    const positionObj = await getPosition();
    const position = {
        latitude: positionObj.coords.latitude,
        longitude: positionObj.coords.longitude,
    };

    // we perform reverse geocoding

    const addressObj = await getAddress(position);

    const address = `${addressObj?.locality}, ${addressObj?.city}, ${addressObj?.postcode}, ${addressObj?.countryName}`;


    // this is the actual payload of the fulfilled state
    return { address, position };
})



const initialState = {
    username: '',
    status: 'idle',
    position: {},
    address: '',
    error: ''
};


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateName(state, action) {
            state.username = action.payload

        }
    },
    extraReducers: (builder) => builder.addCase(
        fetchAddress.pending,
        (state) => {
            state.status = 'loading'
        })
        .addCase(fetchAddress.fulfilled, (state, action) => {
            state.position = action.payload.position;
            state.address = action.payload.address;
            state.status = 'idle';
        })
        .addCase(fetchAddress.rejected, (state, action) => {
            state.status = 'error';
            state.error = 'There was a problem getting your address. Please fill the correct address.';

        })


});

export const { updateName } = userSlice.actions;

export const getUsername = (state) => state.user.username;

export default userSlice.reducer;
