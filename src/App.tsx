import { ChangeEvent, useState } from "react";

import "./App.css";

function App() {
  return (
    <Config>
      <TreasuryInput />
      <RaceDropdown />
    </Config>
  );
}

type ConfigProps = {
  children: React.ReactNode;
};

function Config({ children }: ConfigProps) {
  return <div className="flex gap-2">{children}</div>;
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
      </select>
    </div>
  );
}

export default App;
