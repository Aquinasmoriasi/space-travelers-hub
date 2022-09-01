import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_ROCKETS = 'space-travellers-app/redux/FETCH_ROCKETS';
const RESERVE_ROCKETS = 'space-travellers-app/redux/RESERVE_ROCKETS';

export const fetchRockets = createAsyncThunk(FETCH_ROCKETS, async () => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await response.json();
  const arr = [];
  const keys = Object.keys(data);
  keys.map((key) => arr.push({
    id: data[key].rocket_id,
    name: data[key].rocket_name,
    description: data[key].description,
    type: data[key].rocket_type,
    image: data[key].flickr_images[0],
    reserved: false,
  }));
  return arr;
});

const initialState = [];
const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_ROCKETS}/fulfilled`:
      return action.payload;
    case RESERVE_ROCKETS:
      return state.map((state) => {
        if (state.id === action.payload) {
          return { ...state, reserved: true };
        }
        return state;
      });
    default:
      return state;
  }
};

export const reserveRocket = (id) => ({
  type: RESERVE_ROCKETS,
  payload: id,
});

export default rocketsReducer;
