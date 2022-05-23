import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = () => {
  // sample value to be replaced
  // let count = 0;
  // NOTE: do not delete `data-cy` key value pair

const [count,setCounter]=useState(0);
const HandleClick=(el)=>{
  if(el.target.name==="inc"){
    setCounter(count+1);
  }
  else{
    setCounter(count-1);
  }
}

  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={HandleClick} name="inc">+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button" onClick={HandleClick} name="dec">-</button>
    </div>
  );
};

export default Counter;
