import Image from "next/image";
import styles from "./SmallProject.module.css";
import Project, { ProjectProps } from "../project/Project";
import { useEffect, useState } from "react";

type SmallProjectProps = {
  project: ProjectProps;
  position: number;
  projectOrder: number[];
  setProjectOrder: React.Dispatch<React.SetStateAction<number[]>>;
};

export default function SmallProject({
  project,
  position,
  projectOrder,
  setProjectOrder,
}: SmallProjectProps) {
  const changeFocus = () => {
    const newOrder = [...projectOrder];
    newOrder[0] = projectOrder[position];
    newOrder[position] = projectOrder[0];
    setProjectOrder(newOrder);
  };

  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth > 850);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (isDesktop === null) {
    return null;
  }
  return (
    <>
      {isDesktop ? (
        <div className={styles.smallProject} onClick={changeFocus}>
          <div className={styles["content-container"]}>
            <h3 className={styles.title}>{project.name}</h3>
            <Image
              className={styles.picture}
              src={project.picture}
              alt={project.alt}
            />
            <div className={styles.techs}>
              {" "}
              {project.techs.map((tech) => (
                <Image
                  className={styles["tech-logo"]}
                  src={tech.techLogo}
                  key={tech.techName}
                  alt={`${tech.techName} logo`}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Project
          name={project.name}
          text={project.text}
          picture={project.picture}
          alt={project.alt}
          repo={project.repo}
          webSite={project.webSite}
          techs={project.techs}
        />
      )}
    </>
  );
}
