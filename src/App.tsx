import {
  ChangeEvent,
  ReactPropTypes,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";
import HeaderConfigPanel from "./HeaderConfigPanel";
import { Race, PlayerPosition, Player } from "./interfaces";
import { PlayerRoster } from "./data";
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
        name: "None",
        maxAllowed: 17,
        count: 16,
        MA: "-",
        ST: "-",
        AG: "-",
        PA: "-",
        AV: "-",
        skills: ["None"],
        primaryAccess: ["-"],
        secondaryAccess: ["-"],
        price: 0,
      },
      {
        name: "Lineman",
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
        name: "Blitzer",
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
        name: "Catcher",
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
        name: "Thrower",
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
  const [positions, setPositions] = useState(race.positions);
  const [playerRoster, setPlayerRoster] = useState(PlayerRoster);

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
      <PlayerTable>
        {[...playerRoster].map(([key, value]) => {
          console.log(key, value);
          return (
            <PlayerTableRow
              positions={positions}
              setPositions={setPositions}
              player={value}
              playerNumber={key}
              setPlayerRoster={setPlayerRoster}
              playerRoster={playerRoster}
              key={key}
            />
          );
        })}
      </PlayerTable>
    </div>
  );
}

function PlayerTable({ children }) {
  return (
    <table>
      <thead>
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
          <th>Skill1</th>
          <th>Skill2</th>
          <th>Price</th>
        </tr>
      </thead>

      <tbody>{children}</tbody>
    </table>
  );
}

function PlayerTableRow({
  positions,
  setPositions,
  player,
  playerNumber,
  setPlayerRoster,
  playerRoster,
}: {
  positions: Array<PlayerPosition>;
  setPositions: Dispatch<SetStateAction<PlayerPosition[]>>;
  player: Player;
  playerNumber: string;
  setPlayerRoster: Dispatch<SetStateAction<Map<string, Player>>>;
  playerRoster: Map<string, Player>;
}) {
  let currentPlayerPos = positions.find(
    (position) => position.name === player.position
  );

  const handlePosChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setPlayerRoster(
      new Map(
        playerRoster.set(playerNumber, {
          ...player!,
          position: event.target.value,
        })
      )
    );

    setPositions(
      positions.map((position) => {
        if (position.name === event.target.value) {
          return {
            ...position,
            count: position.count + 1,
          };
        } else if (position.name === player.position) {
          return {
            ...position,
            count: position.count - 1,
          };
        } else {
          return position;
        }
      })
    );
  };

  const handlePlayerNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPlayerRoster(
      new Map(
        playerRoster.set(playerNumber, {
          ...player!,
          name: event.target.value,
        })
      )
    );
  };
  return (
    <tr>
      <td>{playerNumber}</td>
      <td>
        <input type="text" onChange={handlePlayerNameChange} />
      </td>
      <td>
        <select name="position" id="position" onChange={handlePosChange}>
          {positions.map((playerPos) => {
            if (playerPos.count < playerPos.maxAllowed) {
              return (
                <option key={playerPos.name} value={playerPos.name}>
                  {playerPos.name}
                </option>
              );
            }
            return (
              <option key={playerPos.name} value={playerPos.name} disabled>
                {playerPos.name}
              </option>
            );
          })}
        </select>
      </td>
      <td>{currentPlayerPos?.MA}</td>
      <td>{currentPlayerPos?.ST}</td>
      <td>{currentPlayerPos?.AG}</td>
      <td>{currentPlayerPos?.PA}</td>
      <td>{currentPlayerPos?.AV}</td>
      <td>{currentPlayerPos?.skills}</td>
      <td>{player.skill1}</td>
      <td>{player.skill2}</td>
      <td>{currentPlayerPos?.price}</td>
    </tr>
  );
}
export default App;
