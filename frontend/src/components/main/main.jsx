import React from "react";

import Button from "../button/button";

import styles from "./main.module.css";

function Main() {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.works} >
                    <img className={styles.img} src="https://images.unsplash.com/photo-1575881875475-31023242e3f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="" />
                    <img className={styles.img} src="https://images.unsplash.com/photo-1509248961158-e54f6934749c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1737&q=80" alt="" />
                    <img className={styles.img} src="https://images.unsplash.com/photo-1634274638037-c033506ada96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="" />
                    <img className={styles.img} src="https://images.unsplash.com/photo-1588868478780-508f035f7562?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="" />
                    <img className={styles.img} src="https://images.unsplash.com/photo-1607165697276-326e7955b6e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="" />
                    <img className={styles.img} src="https://images.unsplash.com/photo-1553404955-af4e8fc7f99f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80" alt="" />

                </div>
            </div>

            <div className={styles.btnCenter}>
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button>4</Button>
            </div>
        </div>
    );
}

export default Main;
