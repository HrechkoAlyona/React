import React from "react";

function CityCard({ city }) {
  if (!city) {
    return <p>Пожалуйста, выберите город.</p>;
  }

  return (
    <div className="city-card">
      <h2>{city.name}</h2>
      <img src={city.imageUrl} alt={city.name} width="400" />
      <p>{city.description}</p>
      <h3>Интересные факты:</h3>
      <ul>
        {city.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default CityCard;
