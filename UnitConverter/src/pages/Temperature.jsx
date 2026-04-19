import Navbar from "../components/Navbar";
import { useState } from "react";
import { convertTemperature } from "../utils/converters";

function Temperature() {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState("celsius");
  const [toUnit, setToUnit] = useState("fahrenheit");
  const [result, setResult] = useState(null);

  function handleConvert(e) {
    e.preventDefault();

    if (value === "") return;

    const converted = convertTemperature(Number(value), fromUnit, toUnit);

    setResult(converted);
  }

  function handleReset() {
    setValue("");
    setFromUnit("celsius");
    setToUnit("fahrenheit");
    setResult(null);
  }

  return (
    <div className="converter-page">
      <Navbar />

      {result === null ? (
        <section className="converter-card">
          <div className="card-header">
            <h2>Temperature converter</h2>
            <p>Select the units and enter a value to convert.</p>
          </div>

          <form className="converter-form" onSubmit={handleConvert}>
            <div className="form-group">
              <label htmlFor="length-value">Value</label>
              <input
                id="length-value"
                type="number"
                onChange={(e) => setValue(e.target.value)}
                value={value}
                placeholder="Enter value"
                className="converter-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="length-from">Convert from</label>
              <select
                id="length-from"
                className="converter-select"
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value)}
              >
                <option value="celsius">Celsius</option>
                <option value="fahrenheit">Fahrenheit</option>
                <option value="kelvin">Kelvin</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="length-to">Convert to</label>
              <select
                id="length-to"
                className="converter-select"
                value={toUnit}
                onChange={(e) => setToUnit(e.target.value)}
              >
                <option value="celsius">Celsius</option>
                <option value="fahrenheit">Fahrenheit</option>
                <option value="kelvin">Kelvin</option>
              </select>
            </div>

            <button type="submit" className="converter-button">
              Convert
            </button>
          </form>
        </section>
      ) : (
        <section className="converter-card result-card">
          <div className="card-header">
            <h2>Result</h2>
            <p>Here is the converted value.</p>
          </div>

          <div className="result-box">
            <strong>
              {value} {fromUnit} = {result} {toUnit}
            </strong>
          </div>

          <button
            type="button"
            className="converter-button"
            onClick={handleReset}
          >
            Reset
          </button>
        </section>
      )}
    </div>
  );
}

export default Temperature;
