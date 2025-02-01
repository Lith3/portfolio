import Image from "next/image";
import styles from "./SmallProject.module.css";
import { ProjectProps } from "../project/Project";

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

  //   console.log(projectOrder);
  return (
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
  );
}
