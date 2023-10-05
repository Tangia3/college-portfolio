import React from "react";

import Button from "../button/button";

import styles from "./header.module.css";

function Header() {
  return (
    <>
    <h1 className={styles.title}> Работы <br /> студентов </h1>
    <Button> все работы </Button>
    <Button>иллюстрации</Button>
    <Button>фото</Button>
    <Button>шрифты</Button>
    </>
  );
}

export default Header;