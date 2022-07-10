
import React from 'react';


const Categories = ({categories, filterByCategory}) => {

  return (
    <div>
      {categories.map((category, index) => {
        return (
          <div>
            <button
              key={index}
              className="filter-btn"
              onClick={() => filterByCategory(category)}
            >{category}</button>
          </div>
        );
      })}
    </div>
  );
}
export default Categories;
