import React from 'react';

const Filter = ({ categories, activeCategory, onSelectCategory }) => (
  <ul id="filter">
    {categories.map((category) => (
      <li
        key={category}
        className={activeCategory === category ? 'active' : ''}
        data-category={category}
        onClick={() => onSelectCategory(category)}
      >
        {category}
      </li>
    ))}
  </ul>
);

export default Filter;
