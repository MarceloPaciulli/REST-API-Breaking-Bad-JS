import React from "react";
import styles from "./Image.module.css";


const Name = ({ name }) => {
  return (
    <div>
    <p>
      {name.portrayed}<br />
      as <span>{name.name}</span> 
      
    </p>
    <img className={styles.char_img} src={name.img} alt="" />
   </div>
  );
};

export default Name;
