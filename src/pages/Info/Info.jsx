import Wether from "../../components/Wether/Wether";
import styles from "./Info.module.scss";
import { useState, useEffect } from "react";
import axios from "axios";

const Info = () => {
  const [ip, setIp] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIp = async () => {
      try {
        // Запрос к API ipapi.co
        const response = await axios.get(
          "https://cors-anywhere.herokuapp.com/https://ipapi.co/json/",
          {
            headers: {
              Origin: "http://localhost:5173",
              "X-Requested-With": "XMLHttpRequest",
            },
          }
        );
        setIp(response.data.ip); // Установка IP-адреса в состояние
      } catch (error) {
        setError("Ошибка при запросе IP: " + error.message);
      }
    };

    const fetchData = () => {
      fetchIp();
    };

    // Настройка интервала для вызова функции каждый час
    const intervalId = setInterval(fetchData, 1000 * 60 * 30);

    // Очистка интервала при размонтировании компонента
    return () => clearInterval(intervalId);
  }, []); // Пустой массив зависимостей

  console.log(ip);
  console.log(error);

  return (
    <div className={styles.main}>
      <Wether />
      {/* <Wether />
      <Wether />
      <Wether />
      <Wether /> */}
    </div>
  );
};

export default Info;
