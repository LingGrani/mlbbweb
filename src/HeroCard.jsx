import React from 'react';

const HeroCard = ({ hero }) => (
  <div className="hero_card" data-category={hero.role}>
    <a href="#">
      <img src={hero.image} alt={hero.nama} />
      <h2>{hero.nama}</h2>
    </a>
  </div>
);

export default HeroCard;
