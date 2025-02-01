"use client";

import Project from "../components/projects/project/Project";
import myProjects from "../assets/projects/projectsData";
import styles from "./page.module.css";
import { useState } from "react";
import SmallProject from "../components/projects/small_project/SmallProject";

export default function Projets() {
  const [projectOrder, setProjectOrder] = useState([0, 1, 2, 3]);
  // const [projectFocus, setProjectFocus] = useState(myProjects[projectId]);
  console.log(projectOrder);
  return (
    <main id={styles.main}>
      <h1 id={styles.title}>Mes projets</h1>
      <Project
        name={myProjects[projectOrder[0]].name}
        text={myProjects[projectOrder[0]].text}
        picture={myProjects[projectOrder[0]].picture}
        alt={myProjects[projectOrder[0]].alt}
        repo={myProjects[projectOrder[0]].repo}
        webSite={myProjects[projectOrder[0]].webSite}
        techs={myProjects[projectOrder[0]].techs}
      />
      <div className={styles["smallProject-container"]}>
        <SmallProject
          project={myProjects[projectOrder[1]]}
          position={1}
          projectOrder={projectOrder}
          setProjectOrder={setProjectOrder}
        />
        <SmallProject
          project={myProjects[projectOrder[2]]}
          position={2}
          projectOrder={projectOrder}
          setProjectOrder={setProjectOrder}
        />
        <SmallProject
          project={myProjects[projectOrder[3]]}
          position={3}
          projectOrder={projectOrder}
          setProjectOrder={setProjectOrder}
        />{" "}
      </div>
    </main>
  );
}
