import styles from "./Ip.module.scss";
// import React from 'react'

const Ip = (ipinfo) => {
  return (
    <div className={styles.ip_main}>
      <ul>
        <li>
          <p>IP:</p>
          <span> {ipinfo.query}</span>
        </li>
        <li>
          <p>Город:</p>
          <span> {ipinfo.city}</span>
        </li>
        <li>
          <p>Континент:</p>
          <span> {ipinfo.continent}</span>
        </li>
        <li>
          <p>Страна:</p>
          <span> {ipinfo.country}</span>
        </li>
        <li>
          <p>Код страны:</p>
          <span> {ipinfo.countryCode}</span>
        </li>
        <li>
          <p>Валюта:</p>
          <span> {ipinfo.currency}</span>
        </li>
        <li>
          <p>Провайдер:</p>
          <span> {ipinfo.isp}</span>
        </li>
        <li>
          <p>Прокси:</p>
          <span> {ipinfo.proxy == true ? "true" : "false"}</span>
        </li>
        <li>
          <p>Мобильный:</p>
          <span> {ipinfo.mobile == true ? "true" : "false"}</span>
        </li>
      </ul>
    </div>
  );
};

export default Ip;
