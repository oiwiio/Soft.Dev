import React from "react";
import { WaveButton } from "../../wave_effect/wave.jsx";

export function CounterButton({ onClick, label }) {
  return (
    <WaveButton className="sign" onClick={onClick}>
      {label}
    </WaveButton>
  );
}