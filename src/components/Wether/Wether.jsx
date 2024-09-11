import styles from "./Wether.module.scss";
import Icons from "../../assets/Icons/Icons";
// import react from "@vitejs/plugin-react-swc";

import { useState } from "react";

const Wether = (wether) => {
  console.log(wether);
  return (
    <section className={styles.wether_block}>
      <div className={styles.wether_block_left}>
        <div className={styles.wether_temp}>
          <h2>{wether.temp_C}°С</h2>
          <p>Ощущается: {wether.FeelsLikeC}°С</p>
        </div>
        <div>
          <ul>
            <li>
              <Icons iconName="FaCloud" />
              <div>
                <p>Облачность</p>
                <span>{wether.cloudcover} %</span>
              </div>
            </li>
            <li>
              <Icons iconName="GiDroplet" />
              <div>
                <p>Влажность</p>
                <span>{wether.humidity} %</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.wether_block_center}>
        <Icons
          iconName={
            wether.lang_ru && wether.lang_ru.length > 0
              ? wether.lang_ru[0].value.split(",")[0]
              : "Описание недоступно"
          }
        />
        <p>
          {wether.lang_ru && wether.lang_ru.length > 0
            ? wether.lang_ru[0].value.split(",")[0]
            : "Описание недоступно"}
        </p>
      </div>
      <div className={styles.wether_block_right}>
        <ul>
          <li>
            <Icons iconName="MdOutlineGrain" />
            <p>{wether.precipInches} мм</p>
            <span>Осадки</span>
          </li>
          <li>
            <Icons iconName="FaEye" />
            <p>{wether.visibility} км</p>
            <span>Вид-сть</span>
          </li>
          <li>
            <Icons iconName="FaWind" />
            <p>{wether.windspeedKmph} км/ч</p>
            <span>Ветер</span>
          </li>
          <li>
            <Icons iconName="FaTachometerAlt" />
            <p>{wether.pressure} Па</p>
            <span>Давлн.</span>
          </li>
          <li>
            <Icons iconName="FaWind" />
            <p>{wether.windspeedKmph} км/ч</p>
            <span>Ветер</span>
          </li>
          <li>
            <Icons iconName="FaTachometerAlt" />
            <p>{wether.pressure} Па</p>
            <span>Давлн.</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Wether;
