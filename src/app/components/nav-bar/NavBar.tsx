import Link from "next/link";
import styles from "./NavBar.module.css";
import Image from "next/image";
import Mail from "../../assets/images/envelope.svg";
import Github from "../../assets/images/github-mark.svg";
import Linkedin from "../../assets/images/linkedin.svg";

export default function NavBar() {
  return (
    <nav id={styles.nav}>
      <Link href={"/"}>Présentation</Link>
      <Link href={"/projets"}>Projets</Link>
      <div id={styles.contacts}>
        <a
          href="mailto:jorisbudin@gmail.com"
          rel="noopener noreferrer nofollow"
          target="_blank"
        >
          <Image className={styles.logo} src={Mail} alt="enveloppe" />
        </a>{" "}
        <a
          href="https://github.com/Lith3"
          rel="noopener noreferrer nofollow"
          target="_blank"
        >
          <Image className={styles.logo} src={Github} alt="logo de Github" />
        </a>{" "}
        <a
          href="https://www.linkedin.com/in/joris-budin/"
          rel="noopener noreferrer nofollow"
          target="_blank"
        >
          <Image
            className={styles.linkedin}
            src={Linkedin}
            alt="logo de Linkedin"
          />
        </a>{" "}
      </div>
    </nav>
  );
}
