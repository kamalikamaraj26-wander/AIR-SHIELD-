// AIR-SHIELD demo: values below are simulated, not live sensor data.
const demoReadings = [
  { aqi: 58, pm: 18, temp: 29, humidity: 64 },
  { aqi: 42, pm: 11, temp: 28, humidity: 61 },
  { aqi: 91, pm: 31, temp: 31, humidity: 57 },
  { aqi: 126, pm: 46, temp: 32, humidity: 53 }
];
let readingIndex = 0;
function statusFor(aqi) {
  if (aqi <= 50) return { label: "Good", title: "Air looks good in this demo", text: "The simulated AQI is in the good range. Continue checking trusted local sources for actual conditions.", width: aqi / 500 * 100 };
  if (aqi <= 100) return { label: "Moderate", title: "A few mindful steps", text: "Air quality is shown as moderate in this demo. Consider reducing prolonged, intense outdoor activity if you are sensitive to air pollution.", width: aqi / 500 * 100 };
  return { label: "Unhealthy for sensitive groups", title: "Take extra care in this demo", text: "This simulated reading is elevated. Sensitive people may choose to reduce strenuous outdoor activity, but verify real conditions with official sources.", width: aqi / 500 * 100 };
}
function renderReading() {
  const r = demoReadings[readingIndex];
  const s = statusFor(r.aqi);
  document.getElementById("aqi").textContent = r.aqi;
  document.getElementById("pm").textContent = r.pm;
  document.getElementById("temp").textContent = r.temp;
  document.getElementById("humidity").textContent = r.humidity;
  document.getElementById("aqiStatus").textContent = s.label;
  document.getElementById("aqiMeter").style.width = s.width + "%";
  document.getElementById("adviceTitle").textContent = s.title;
  document.getElementById("adviceText").textContent = s.text;
  document.getElementById("updatedAt").textContent = "Demo scenario " + (readingIndex + 1) + " of " + demoReadings.length + " · not live sensor data";
}
document.getElementById("refreshBtn").addEventListener("click", () => {
  readingIndex = (readingIndex + 1) % demoReadings.length;
  renderReading();
});
renderReading();
