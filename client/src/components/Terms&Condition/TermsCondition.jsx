import React from "react";
import styles from "./TermsCondition.module.css";

export default function TermsCondition() {
  return (
    <div className={styles.window} style={{display:"none"}}>
      <h1>Terms & Condition</h1>
      <div className={styles.child_window}>
        <p className={styles.conditins}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate,
          molestiae, veniam eius illum, fugit facere corrupti in blanditiis iure
          ea enim? Id magnam delectus esse accusantium velit vitae nisi!
          Officia?
        </p>
        <p className={styles.conditins}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid totam
          id beatae deleniti laudantium quam, dolorum, numquam nobis asperiores
          quisquam, nihil iure eum ipsam at iusto eveniet delectus rem a.
        </p>
        <p className={styles.conditins}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid totam
          id beatae deleniti laudantium quam, dolorum, numquam nobis asperiores
          quisquam, nihil iure eum ipsam at iusto eveniet delectus rem a.
        </p>
      </div> 
      <div className={styles.btns}>
        <button className={styles.btn}>Cancel</button>
        <button className={styles.btn}>Accept</button>
      </div>     
    </div>
  );
}
