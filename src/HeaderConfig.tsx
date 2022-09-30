import { ChangeEvent, useState } from "react";

type ConfigProps = {
  children: React.ReactNode;
};

export default function Config({ children }: ConfigProps) {
  return <div className="flex gap-2 flex-wrap">{children}</div>;
}

function TreasuryInput({ treasury, handleChange }) {
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
