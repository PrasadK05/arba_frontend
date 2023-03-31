import React, { useState } from "react";
import styles from "./Carausal.module.css";

let arr = [1, 2, 3, 4, 5];

export default function Carausal() {
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className={styles.car_box}>
        <div className={styles.car_card}>
          <p>{arr[index]}</p>
        </div>
      </div>
      <div className={styles.btns}>
        {arr.map((el, i) => {
          return (
            <button
              key={i}
              className={styles.btn}
              onClick={() => setIndex(i)}
            ></button>
          );
        })}
      </div>
    </>
  );
}
