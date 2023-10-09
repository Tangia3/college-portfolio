import React from "react"; 
 
import Button from "../button/button"; 
 
import styles from "./header.module.css"; 
 
function Header() { 
  return ( 
    <> 
      <div className={styles.navBtn}> 
        <Button> ВСЕ РАБОТЫ </Button> 
        <Button> ИЛЛЮСТРАЦИИ </Button> 
        <Button> ФОТО </Button> 
        <Button> ШРИФТЫ </Button> 
      </div> 
      <h1 className={styles.title}> РАБОТЫ <br /> СТУДЕНТОВ </h1> 
    </> 
  ); 
} 
 
export default Header;
