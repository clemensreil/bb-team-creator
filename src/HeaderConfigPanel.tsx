import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

type HeaderConfigPanelProps = {
  treasury: string;
  setTreasury: Dispatch<SetStateAction<string>>;
  coachName: string;
  setCoachName: Dispatch<SetStateAction<string>>;
  teamName: string;
  setTeamName: Dispatch<SetStateAction<string>>;
  nafNumber: string;
  setNafNumber: Dispatch<SetStateAction<string>>;
  setRace: Dispatch<SetStateAction<string>>;
};

export default function HeaderConfigPanel({
  treasury,
  setTreasury,
  coachName,
  setCoachName,
  teamName,
  setTeamName,
  nafNumber,
  setNafNumber,
  setRace,
}: HeaderConfigPanelProps) {
  return (
    <div className="flex gap-2 flex-wrap">
      <TextInput
        value={treasury}
        setValue={setTreasury}
        id="treasury"
        labelText="Set Treasury"
        inputType="number"
      />
      <RaceDropdown setRace={setRace} />
      <TextInput
        value={teamName}
        setValue={setTeamName}
        id="team-name"
        labelText="Set Team Name"
      />
      <TextInput
        value={coachName}
        setValue={setCoachName}
        id="coach-name"
        labelText="Set Coach Name"
      />
      <TextInput
        value={nafNumber}
        setValue={setNafNumber}
        id="naf-number"
        labelText="Set Naf Number"
      />
    </div>
  );
}

type TextInput = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  id: string;
  labelText: string;
  inputType?: string;
};

function TextInput({
  value,
  setValue,
  id,
  labelText,
  inputType = "text",
}: TextInput) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{labelText}</label>
      <input
        type={inputType}
        id={id}
        className="shadow appearance-none border rounded py-2 px-3"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>
    </div>
  );
}

type RaceDropdown = {
  setRace: Dispatch<SetStateAction<string>>;
};

function RaceDropdown({ setRace }: RaceDropdown) {
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
