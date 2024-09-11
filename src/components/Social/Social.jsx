import styles from "./Social.module.scss";
import "react";
import {
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaGithub,
  FaReddit,
  FaPinterest,
  FaTwitch,
  FaSteam,
  FaDribbble,
  FaBehance,
  FaTelegram,
  FaVk,
  FaDiscord,
} from "react-icons/fa";

const icons = [
  { component: FaYoutube, href: "https://www.youtube.com" },
  { component: FaSteam, href: "https://store.steampowered.com" },
  { component: FaGithub, href: "https://www.github.com" },
  { component: FaReddit, href: "https://www.reddit.com" },
  { component: FaTelegram, href: "https://web.telegram.org/" },
  { component: FaVk, href: "https://vk.com/" },
  { component: FaDiscord, href: "https://discord.com/" },
  { component: FaTwitter, href: "https://www.twitter.com" },
  { component: FaInstagram, href: "https://www.instagram.com" },
  { component: FaLinkedin, href: "https://www.linkedin.com" },
  { component: FaPinterest, href: "https://www.pinterest.com" },
  { component: FaTwitch, href: "https://www.twitch.tv" },
  { component: FaDribbble, href: "https://dribbble.com" },
  { component: FaBehance, href: "https://www.behance.net" },
];

const Social = () => {
  return (
    <div className={styles.social_main}>
      <ul>
        {icons.map(({ component: Icon, href }, index) => (
          <li key={index}>
            <a href={href} target="_blank" rel="noopener noreferrer">
              <Icon />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
