import React from "react";

const Menu = ({items}) => {


  return(
    <article>

      {items.map((item) => {
      const{id, title, category, price, img, desc} = item

      return(
        <div key={id}>
          <h1>{title}</h1>
          <h1>{price}</h1>
          <img src={img}></img>
          <p>{desc}</p>
        </div>
      )
    })}
    </article>
    
  )
}

export default Menu;
