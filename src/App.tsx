import { useState } from "react";

import "./App.css";

function App() {
  return (
    <Config>
      <TreasuryInput />
    </Config>
  );
}

type ConfigProps = {
  children: React.ReactNode;
};

function Config({ children }: ConfigProps) {
  return <div>{children}</div>;
}

function TreasuryInput() {
  return (
    <>
      <label htmlFor="treasury">Treasury Value</label>
      <input
        type="text"
        id="treasury"
        className="shadow appearance-none border rounded py-2 px-3"
      ></input>
    </>
  );
}

export default App;
