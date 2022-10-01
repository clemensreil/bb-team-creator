import { ChangeEvent, useState } from "react";
import HeaderConfigPanel from "./HeaderConfigPanel";
import "./App.css";

function App() {
  const [treasury, setTreasury] = useState("1000000");
  const [coachName, setCoachName] = useState("");
  const [teamName, setTeamName] = useState("");
  const [race, setRace] = useState("Amazons");
  const [nafNumber, setNafNumber] = useState("");

  return (
    <div>
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
    </div>
  );
}

type ConfigProps = {
  children: React.ReactNode;
};

export default App;
