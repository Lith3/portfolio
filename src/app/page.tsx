import Image from "next/image";
import Me from "./assets/images/me.png";
import styles from "./page.module.css";
import TechStack from "./components/TechStack";
import HTML from "./assets/images/html.svg";
import ReactLogo from "./assets/images/react.svg";
import Css from "./assets/images/css.svg";
import JavaScript from "./assets/images/javaScript.svg";
import TypeScript from "./assets/images/typeScript.svg";
import Node from "./assets/images/node.svg";
import Php from "./assets/images/php.svg";
import Git from "./assets/images/git.svg";
import Figma from "./assets/images/figma.svg";
import MySql from "./assets/images/mySQL.svg";
import NextJs from "./assets/images/nextJs.svg";
import Link from "next/link";
import Contacts from "./components/contacts/Contacts";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.section} id={styles.presentation}>
          <div id={styles["text-presentation"]}>
            <h1 id={styles.title}>
              Bonjour je suis <span className={styles.name}>Joris Budin</span>
            </h1>
            <p className={styles.text1}>
              Je suis <strong>Développeur Web</strong>
            </p>
            <p className={styles.text2}>
              {`Passionné par le développement web et animé par le désir de faire 
  de ma passion mon métier, j'ai entrepris une reconversion 
  professionnelle. Ayant récemment terminé une formation de 
  Développeur Web et Web Mobile, je suis à la recherche d'une 
  opportunité d'alternance ou d'une première expérience 
  professionnelle. Je suis enthousiaste à l'idée de rejoindre une 
  équipe dynamique où je pourrai affiner mes compétences techniques 
  tout en contribuant aux succès de projets d'équipes.`}
            </p>
          </div>

          <Image
            id={styles["me-picture"]}
            alt="Une photo de Joris Budin"
            src={Me}
          />
        </section>
        <span className={styles.line}></span>
        <section className={styles.section}>
          <h2 className={styles.h2}>Compétences</h2>
          <div id={styles["tech-container"]}>
            <TechStack techName={"HTML"} techLogo={HTML} />
            <TechStack techName={"CSS"} techLogo={Css} />
            <TechStack techName={"JavaScript"} techLogo={JavaScript} />
            <TechStack techName={"TypeScript"} techLogo={TypeScript} />
            <TechStack techName={"React"} techLogo={ReactLogo} />
            <TechStack techName={"Node"} techLogo={Node} />
            <TechStack techName={"PHP"} techLogo={Php} />
            <TechStack techName={"Git"} techLogo={Git} />
            <TechStack techName={"Figma"} techLogo={Figma} />
            <TechStack techName={"MySql"} techLogo={MySql} />
            <TechStack techName={"NextJs"} techLogo={NextJs} />
          </div>
        </section>
        <span className={styles.line}></span>
        <section className={styles.section}>
          <Link href="/projets">
            <h2 className={styles.projects}>Mes Projets</h2>
          </Link>
        </section>
        <span className={styles.line}></span>
        <section className={styles.section}>
          <h2 className={styles.h2}>Me Contacter</h2>
          <Contacts />
        </section>
      </main>
    </div>
  );
}
