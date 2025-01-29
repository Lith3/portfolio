import Image from "next/image";
import styles from "./TechStack.module.css";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type TechStackProps = {
  techName: string;
  techLogo: string | StaticImport;
};

export default function TechStack({ techName, techLogo }: TechStackProps) {
  return (
    <div className={styles["tech-container"]}>
      <Image
        className={styles.tech}
        alt={"logo de " + techName}
        src={techLogo}
      />
      <span className={styles["tech-name"]}>{techName}</span>
    </div>
  );
}
