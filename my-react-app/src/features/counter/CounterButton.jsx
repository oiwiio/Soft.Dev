import React from "react";

export function CounterButton({onClick, label}) {
    return (
        <button className="sign" onClick={onClick}>
            {label}
        </button>
    );
}