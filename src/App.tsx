import { ChangeEvent, ReactPropTypes, useState } from "react";
import HeaderConfigPanel from "./HeaderConfigPanel";
import { Race, PlayerPosition, Player } from "./interfaces";

import "./App.css";

function App() {
  const [treasury, setTreasury] = useState("1000000");
  const [coachName, setCoachName] = useState("");
  const [teamName, setTeamName] = useState("");
  const [race, setRace] = useState<Race>({
    name: "High Elves",
    specialRules: ["Elven Kingdoms League"],
    reRolls: 50000,
    apo: true,
    positions: [
      {
        position: "Lineman",
        maxAllowed: 16,
        count: 0,
        MA: "6",
        ST: "3",
        AG: "2+",
        PA: "4+",
        AV: "9+",
        skills: ["None"],
        primaryAccess: ["G", "A"],
        secondaryAccess: ["S", "P"],
        price: 70000,
      },
      {
        position: "Blitzer",
        maxAllowed: 2,
        count: 0,
        MA: "7",
        ST: "3",
        AG: "2+",
        PA: "4+",
        AV: "9+",
        skills: ["Block"],
        primaryAccess: ["G", "A"],
        secondaryAccess: ["S", "P"],
        price: 100000,
      },
      {
        position: "Catcher",
        maxAllowed: 4,
        count: 0,
        MA: "8",
        ST: "3",
        AG: "2+",
        PA: "4+",
        AV: "8+",
        skills: ["Catch"],
        primaryAccess: ["G", "A"],
        secondaryAccess: ["S"],
        price: 90000,
      },
      {
        position: "Thrower",
        maxAllowed: 2,
        count: 0,
        MA: "6",
        ST: "3",
        AG: "2+",
        PA: "4+",
        AV: "9+",
        skills: ["Cloud Burster", "Pass", "Safe Pass"],
        primaryAccess: ["G", "A", "P"],
        secondaryAccess: ["S"],
        price: 100000,
      },
    ],
  }); // needs to change to array of races
  const [nafNumber, setNafNumber] = useState("");

  return (
    <div className="">
      <HeaderConfigPanel
        treasury={treasury}
        setTreasury={setTreasury}
        coachName={coachName}
        setCoachName={setCoachName}
        teamName={teamName}
        setTeamName={setTeamName}
        nafNumber={nafNumber}
        setNafNumber={setNafNumber}
        setRace={setRace}
      />
      <PlayerTable race={race} />
    </div>
  );
}

function PlayerTable({ race }: { race: Race }) {
  //use initial race.positions
  //create Array of players
  const [playerPositions, setPlayerPositions] = useState<PlayerPosition[]>([
    ...race.positions,
  ]);

  return (
    <>
      <table>
        <tr>
          <th>No.1</th>
          <th>Player Name</th>
          <th>Position</th>
          <th>MA</th>
          <th>ST</th>
          <th>AG</th>
          <th>PA</th>
          <th>AV</th>
          <th>Skills</th>
          <th>Skill 1</th>
          <th>Skill 2</th>
          <th>Cost</th>
        </tr>
        <tr>
          <td>1</td>
          <td>
            <input type="text" />
          </td>
          <td>
            <select name="position" id="position">
              <option value="lineman">Lineman</option>
              <option value="catcher">Catcher</option>
              <option value="blitzer">Blitzer</option>
              <option value="thrower">Thrower</option>
            </select>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </>
  );
}
export default App;
