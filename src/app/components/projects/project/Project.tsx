import Image from "next/image";
import styles from "./Project.module.css";
import Github from "../../../assets/images/github-mark.svg";
import Web from "../../../assets/images/web_site.svg";
import TechStack from "../../TechStack";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type Tech = {
  techName: string;
  techLogo: string | StaticImport;
};
export type ProjectProps = {
  name: string;
  text: string;
  picture: string | StaticImport;
  alt: string;
  repo: string | undefined;
  webSite: string | undefined;
  techs: Tech[];
};

export default function Project({
  name,
  text,
  picture,
  alt,
  repo,
  webSite,
  techs,
}: ProjectProps) {
  return (
    <section className={styles.focus}>
      <div className={styles.project}>
        <div className={styles["introduction-container"]}>
          <div className={styles.text}>
            <h2 className={styles["project-title"]}>{name}</h2>{" "}
            <Image
              className={styles["picture-mobile"]}
              src={picture}
              alt={alt}
            />
            <div className={styles["paragraph-link"]}>
              <p className={styles.paragraph}>{text}</p>
              <div className={styles["link-container"]}>
                {repo !== undefined && (
                  <a
                    href={repo}
                    rel="noopener noreferrer nofollow"
                    target="_blank"
                    className={styles["github-link"]}
                  >
                    <Image
                      className={styles.github}
                      src={Github}
                      alt="Lien vers le repo github"
                    />{" "}
                    Lien du Repo
                  </a>
                )}
                {webSite !== undefined && (
                  <a
                    href={webSite}
                    rel="noopener noreferrer nofollow"
                    target="_blank"
                    className={styles["github-link"]}
                  >
                    <Image
                      className={styles.github}
                      src={Web}
                      alt="Lien vers le site"
                    />{" "}
                    Lien du Site
                  </a>
                )}
              </div>
            </div>
          </div>
          <Image className={styles["main-picture"]} src={picture} alt={alt} />
        </div>
        <div className={styles.techs}>
          {techs.map((tech) => (
            <TechStack
              techName={tech.techName}
              techLogo={tech.techLogo}
              key={tech.techName}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
