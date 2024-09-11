import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Info.module.scss"; // Убедитесь, что путь к файлу правильный
import Wether from "../../components/Wether/Wether"; // Убедитесь, что путь к файлу правильный
import Social from "../../components/Social/Social";
import Ip from "../../components/Ip/Ip";

const Info = () => {
  const [ipinfo, setIpinfo] = useState(null);
  // const [ip, setIp] = useState(null);
  const [wether, setWether] = useState(null);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIp = async () => {
      try {
        const response = await axios.get("https://api.ipify.org?format=json");
        // setIp(response.data.ip); // Установка IP-адреса

        fetchIpinfo(response.data.ip);
      } catch (error) {
        console.log("Ошибка при запросе IP:", error);
      }
    };

    const fetchIpinfo = async (ipAddress) => {
      try {
        const response = await axios.get(
          `http://ip-api.com/json/${ipAddress}?fields=status,message,continent,country,countryCode,region,regionName,city,zip,lat,lon,timezone,currency,isp,org,as,mobile,proxy,hosting,query`
        );
        setIpinfo(response.data); // Установка информации о IP

        fetchWether(response.data.city);
      } catch (error) {
        console.log("Ошибка при запросе IP информации:", error);
      }
    };

    const fetchWether = async (city) => {
      try {
        const response = await axios.get(`https://wttr.in/${city}?format=j1`);
        setWether(response.data.current_condition[0]); // Установка информации о IP
      } catch (error) {
        console.log("Ошибка при запросе IP информации:", error);
      }
    };

    fetchIp(); // Вызов функции при монтировании компонента

    // Настройка интервала для вызова функции каждые 15 минут
    const intervalId = setInterval(fetchIp, 1000 * 60 * 15);

    // Очистка интервала при размонтировании компонента
    return () => clearInterval(intervalId);
  }, []); // Пустой массив зависимостей

  // console.log(ip);
  // console.log(ipinfo);
  // console.log(wether);

  return (
    <div className={styles.info}>
      <div className={styles.user_info}>
        <Wether {...wether} />
        <Social />
        <Ip {...ipinfo} />
      </div>
    </div>
  );
};

export default Info;
