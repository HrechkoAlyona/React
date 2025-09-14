import React, { useState } from "react";
import { citiesData } from "./components/data";
import CitySelector from "./components/CitySelector";
import CityCard from "./components/CityCard";
import "./styles/App.css";

function App() {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCitySelect = (cityName) => {
    const city = citiesData.find((c) => c.name === cityName);
    setSelectedCity(city || null);
  };

  return (
    <div className="App">
      <h1>City Cards</h1>
      <CitySelector cities={citiesData} onCitySelect={handleCitySelect} />
      <CityCard city={selectedCity} />
    </div>
  );
}

export default App;
