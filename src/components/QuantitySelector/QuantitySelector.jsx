import './QuantitySelector.css';

export const QuantitySelector = function () {
    return (
        <div className="QuantitySelector">
            <button className={"less"}> - </button>
            <input type={"number"} value={10} />
            <button className={"add"} > + </button>
        </div>
    )
}