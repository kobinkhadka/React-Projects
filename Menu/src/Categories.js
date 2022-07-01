
import React from 'react';

const Categories = ({itemFilterFunction}) => {
  return (
    <div className='btn-container'> 
      <button className='filter-btn' onClick={() =>(itemFilterFunction('breakfast'))}>
        Breakfast
      </button>
    </div>
  )
};

export default Categories;
