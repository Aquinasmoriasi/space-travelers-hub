import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_ROCKETS = 'space-travellers-app/redux/FETCH_ROCKETS';

export const fetchRockets = createAsyncThunk(FETCH_ROCKETS, async () => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await response.json();
  const arr = [];
  const keys = Object.keys(data);
  keys.map((key) => arr.push({
    rocket_id: data[key].rocket_id,
    rocket_name: data[key].rocket_name,
    rocket_type: data[key].rocket_type,
    flickr_images: data[key].flickr_images,
  }));
  return arr;
});

const initialState = [];
const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_ROCKETS}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export default rocketsReducer;
