import React from "react";

export default function Temperature() {
  return (
    <div className="temperature">
      <h1 id="current-temp-header">
        <div class="header">
          Right now
          <div id="date-and-time">(???)</div>
          it's...
        </div>
        <div id="weather-icon">❂</div>

        <div class="current-temperature">
          <span id="current-temp">75</span> <span class="units">°F</span>
        </div>
        <div id="conditions">
          With <span />
          <span id="humidity">47</span>
          <span class="humidity">%</span> humidity and{" "}
          <span id="wind-speed">3</span>
          <span class="humidity">mph</span> winds <br />
          and <span id="condition-description">few clouds</span>.
        </div>
        <div class="current-city">
          in <span />
          <span id="current-city">SAN DIEGO</span>
        </div>
      </h1>
    </div>
  );
}
