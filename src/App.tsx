import { ChangeEvent, useState } from "react";

import "./App.css";

function App() {
  return (
    <Config>
      <TreasuryInput />
      <RaceDropdown />
      <TeamNameInput />
      <CoachNameInput />
      <NafNumberInput />{" "}
    </Config>
  );
}

type ConfigProps = {
  children: React.ReactNode;
};

function Config({ children }: ConfigProps) {
  return <div className="flex gap-2 flex-wrap">{children}</div>;
}

function TreasuryInput() {
  const [treasury, setTreasury] = useState("1000000");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTreasury(event.target.value);
  };

  return (
    <div className="flex flex-col">
      <label htmlFor="treasury">Set Treasury Value</label>
      <input
        type="number"
        id="treasury"
        className="shadow appearance-none border rounded py-2 px-3"
        value={treasury}
        onChange={handleChange}
      ></input>
    </div>
  );
}

function RaceDropdown() {
  const [race, setRace] = useState("Amazons");

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setRace(event.target.value);
  };

  return (
    <div className="flex flex-col">
      <label htmlFor="race">Select Race</label>
      <select
        name="race"
        id="race"
        className="shadow appearance-none border rounded py-2 px-3"
        onChange={handleChange}
      >
        <option value="amazons">Amazons</option>
        <option value="black-orc">Black Orc</option>
        <option value="chaos-chosen">Chaos Chosen</option>
        <option value="chaos-dwarf">Chaos Dwarf</option>
        <option value="Necromantic Horror">Necromantic Horror</option>
      </select>
    </div>
  );
}

function TeamNameInput() {
  const [teamName, setTeamName] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTeamName(event.target.value);
  };

  return (
    <div className="flex flex-col">
      <label htmlFor="coach-name">Set Team Name</label>
      <input
        type="text"
        id="coach-name"
        className="shadow appearance-none border rounded py-2 px-3"
        value={teamName}
        onChange={handleChange}
      ></input>
    </div>
  );
}

function CoachNameInput() {
  const [coachName, setCoachName] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCoachName(event.target.value);
  };

  return (
    <div className="flex flex-col">
      <label htmlFor="coach-name">Set Coach Name</label>
      <input
        type="text"
        id="coach-name"
        className="shadow appearance-none border rounded py-2 px-3"
        value={coachName}
        onChange={handleChange}
      ></input>
    </div>
  );
}

function NafNumberInput() {
  const [NafNumber, setNafNumber] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNafNumber(event.target.value);
  };

  return (
    <div className="flex flex-col">
      <label htmlFor="coach-name">Set Naf Number</label>
      <input
        type="text"
        id="coach-name"
        className="shadow appearance-none border rounded py-2 px-3"
        value={NafNumber}
        onChange={handleChange}
      ></input>
    </div>
  );
}

export default App;
