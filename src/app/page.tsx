import Image from "next/image";
import Me from "./assets/images/me.png";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <section id={styles.presentation}>
      <div id={styles["text-presentation"]}>
     <h1 id={styles.title}>Bonjour je suis <span className={styles.name}>Joris Budin</span></h1>
     <p className={styles.text1}>Je suis <strong>Développeuse Web</strong></p>
     <p className={styles.text2}>Passionné par le développement web et animé par le désir de faire de ma passion mon métier, j'ai entrepris une reconversion professionnelle. Ayant récemment terminé une formation de Développeur Web et Web Mobile, je suis à la recherche d'une opportunité d'alternance ou d'une première experience professionnelle. Je suis enthousiaste à l'idée de rejoindre une équipe dynamique où je pourrai affiner mes compétences techniques tout en contribuant aux succès de projets d'équipes.</p>
     </div>
    
     <Image id={styles["me-picture"]} alt="Une photo de Joris Budin" src={Me}/>
     </section>
     <span className={styles.line}></span>
<section>
  <h2>Compétences</h2>
</section>
    </main>
    </div>
  );
}
