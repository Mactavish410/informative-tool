import styles from "./Wether.module.scss";
import { useState } from "react";

const Wether = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  // console.log(wether);
  return (
    <section
      className={`${styles.wether_block} ${isActive ? styles.active : ""}`} // Исправлено применение класса
      onClick={handleClick}
    >
      <div>111</div>
    </section>
  );
};

export default Wether;
