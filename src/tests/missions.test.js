import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import Missions from '../components/Missions/Missions';
import missionsReducer, {
  showMissions,
  joinMission,
  leaveMission,
} from '../Redux/missions/missions';

import missionsData from './missionsData';

describe('Mission', () => {
  it('should render mission component', () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    expect(Missions).toMatchSnapshot();
  });

  it('Should update the state with API data', () => {
    expect(missionsReducer(missionsData, showMissions(missionsData))).toEqual(
      missionsData,
    );
  });

  it('Should update the state with correct id to reserved: true', () => {
    const missionId = '8E0A6D0';
    expect(missionsReducer(missionsData, joinMission(missionId))).toEqual(
      missionsData.map((item) => (item.id === missionId ? { ...item, reserved: true } : item)),
    );
  });

  it('Should update the state with correct id to reserved: false', () => {
    const missionId = 'E3E72CD';
    expect(missionsReducer(missionsData, leaveMission(missionId))).toEqual(
      missionsData.map((item) => (item.id === missionId ? { ...item, reserved: false } : item)),
    );
  });
});
