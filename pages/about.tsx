import Image from "next/image";
import styles from "../styles/AboutPage.module.css";

const techs = [
  "JavaScript/TypeScript",
  "C# .NET",
  "Java",
  "React",
  "Vue",
  "AWS S3",
  "AWS EC2",
  "Azure AD",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Git",
  "Jest",
  "Cypress",
  "Azure DevOps",
];

const AboutPage = () => {
  const handleOpenResume = () => window.open("tylerFretzResume.pdf", "_blank", "noopener,noreferrer")?.focus();
  return (
    <div className={styles.container}>
      <div className={styles.introContainer}>
        <div className={styles.intro}>
          <h3 className={styles.title}>A Little Bit About Me</h3>
          <p>
						Hey there, I&apos;m Tyler, a mobile and
						web developer who loves creative problem solving,
						building ambitious websites and apps, Visual Studio Code,
						and Magic the Gathering.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/developer.png" alt="Developer" height={200} width={200} />
          <button className={styles.button} onClick={handleOpenResume}>View Resume</button>
        </div>
      </div>
      <div className={styles.techContainer}>
        <h3 className={styles.title}>Technologies I Regularly Use</h3>
        <ul className={styles.list}>
          {techs.map((tech) => (
            <li key={tech} className={styles.listItem}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;