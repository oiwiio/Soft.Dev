export function CounterButton({onClick, label}) {
    return (
        <button onClick={onClick}>
            {label}
        </button>
    );
}