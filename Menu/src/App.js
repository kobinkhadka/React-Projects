import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() { 


   const allCategories = [
     "all",
     ...new Set(items.map((item) => item.category)),
   ];
   console.log(allCategories);

  const [menuItem, setMenuItem] = useState(items); 
  const[categories, setCategories] = useState(allCategories)





 const filterCategory = (category) => { 
  if(category === 'all'){
    setMenuItem(items)
    return menuItem;
  }
    const newItems = items.filter((item) => {
      return item.category == category;
    });
    setMenuItem(newItems);
 }

 

  return (
    <article>   
      <Categories categories= {categories} filterByCategory ={filterCategory}></Categories>
      <Menu items={menuItem}></Menu>
    </article>
  );


  }



export default App;
