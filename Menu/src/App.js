import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() { 

  const[menuItems, setMenuItems] = useState(items);
  const[categories, setCategories] = useState('')


  const filterItems = (category) => {
    const newMenuItems = items.filter((item)=>{
      if(item.category === category){
        setMenuItems(newMenuItems)
      }
    })
  }
  return (
  <main>
    <section className='menu section'>
      <div className='title'>
        <h2>Our Menu</h2>
        <div className='underline'></div>
      </div>
      <Categories itemFilterFunction ={filterItems}/>
      <Menu itemMenu ={menuItems} />
    </section>
  </main>
  );

  }


export default App;
