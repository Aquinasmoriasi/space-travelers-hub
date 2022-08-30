import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_ROCKETS = 'space-travellers-app/redux/FETCH_ROCKETS';

const fetchRockets = createAsyncThunk(
  FETCH_ROCKETS,
  async () => {
    const response = await fetch('https://api.spacexdata.com/v3/rockets');
    const data = await response.json();
  },
);
