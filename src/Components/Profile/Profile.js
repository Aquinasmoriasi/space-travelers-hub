import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';

const Profile = () => {
  const missions = useSelector((state) => state.missions);

  const activeMissions = missions.filter((mission) => mission.reserved);

  return (
    <section className="profile-tables pb-4 pt-2 ms-4 me-4 border-top rounded-0 border-2">
      <div className="mission-list col-5">
        <h2>My Missons</h2>
        <Table bordered>
          <tbody>
            {activeMissions.map((mission) => (
              <tr key={mission.id}>
                <td>{mission.mission_name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="rocket-list col-5">
        {/* rockets */}
        <h2>My Rockets</h2>

      </div>
    </section>
  );
};

export default Profile;
