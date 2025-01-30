import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import styles from "./Contact.module.css";

type ContactProps = {
  alt: string;
  text: string;
  logo: string | StaticImport;
  link: string;
};

export default function Contact({ text, logo, alt, link }: ContactProps) {
  return (
    <div className={styles.contact}>
      <a href={link} rel="noopener noreferrer nofollow" target="_blank">
        <Image className={styles.logo} alt={alt} src={logo} />
      </a>
      <a
        href={link}
        rel="noopener noreferrer nofollow"
        target="_blank"
        className={styles.text}
      >
        {text}
      </a>{" "}
    </div>
  );
}
