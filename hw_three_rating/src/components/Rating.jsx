import React, { useState } from "react";
import "../styles/Rating.css";

// Массив прямых ссылок на изображения рейтингов
const ratingList = [
  "https://www.clipartmax.com/png/small/67-676995_5-star-rating-png.png", // Отлично – 5 звезд
  "https://www.clipartmax.com/png/small/67-676956_out-of-3-out-of-5-star-rating.png", // Хорошо – 3 звезды
  "https://www.clipartmax.com/png/small/73-731815_stars-clipart-2-5-star-rating.png", // Приемлемо – 2.5 звезды
  "https://www.clipartmax.com/png/small/297-2970338_rating-2-out-of-5-gold-stars.png", // Плохо – 2 звезды
];

export default function Rating() {
  const [ratingValue, setRatingValue] = useState(0);

  return (
    <div className="rating-container">
      <img
        src={ratingList[ratingValue]}
        alt="Рейтинг"
        className="rating-image"
      />
      <div className="buttons">
        <button
          className={ratingValue === 3 ? "active" : ""}
          onClick={() => setRatingValue(3)}
        >
          Плохо
        </button>
        <button
          className={ratingValue === 2 ? "active" : ""}
          onClick={() => setRatingValue(2)}
        >
          Приемлемо
        </button>
        <button
          className={ratingValue === 1 ? "active" : ""}
          onClick={() => setRatingValue(1)}
        >
          Хорошо
        </button>
        <button
          className={ratingValue === 0 ? "active" : ""}
          onClick={() => setRatingValue(0)}
        >
          Отлично
        </button>
      </div>
    </div>
  );
}
