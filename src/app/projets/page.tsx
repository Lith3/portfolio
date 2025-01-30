"use client";

import Project from "../components/projects/project/Project";
import Cybermate from "../assets/images/projects/Cybermate.webp";
import ReactLogo from "../assets/images/react.svg";
import Node from "../assets/images/node.svg";
import MySql from "../assets/images/mySQL.svg";
import styles from "./page.module.css";
import { useState } from "react";

export default function Projets() {
  const cybermate = {
    text: "Forum autour du jeux vidéo permetant de créer des topics sur divers sujets et echanger en direct dessus avec d'autre personnes. Le site permet entre autre la création d'un compte, de choisir une image de profil et de pouvoir modifier ses informations de créer un topic et d'envoyer des message sur un topic",
    picture: Cybermate,
    alt: "Screenshot of cybermate's sign up page",
    repo: "https://github.com/Lith3/CyberMate",
    webSite: undefined,
    techs: [
      { techName: "React", techLogo: ReactLogo },
      { techName: "Node", techLogo: Node },
      { techName: "MySql", techLogo: MySql },
    ],
  };

  const [projectFocus, setProjectFocus] = useState(cybermate);
  return (
    <main>
      <h1 id={styles.title}>Mes projets</h1>
      <Project
        text={projectFocus.text}
        picture={projectFocus.picture}
        alt={projectFocus.alt}
        repo={projectFocus.repo}
        webSite={projectFocus.webSite}
        techs={projectFocus.techs}
      />
      <div></div>
    </main>
  );
}
