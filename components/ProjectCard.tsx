import styles from "@styles/ProjectCard.module.css";
import Image from "next/image";
import { shimmer } from "../utils/shimmer";

export type Project = {
  id: string;
  name: string;
  description: string;
  image: string;
  demo?: string;
  source_code?: string;
  tags: string[];
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={project.image}
          fill
          placeholder="blur"
          blurDataURL={shimmer(300, 300)}
          sizes="(max-width: 360px) 240px, 300px"
          alt={project.name}
        />
      </div>
      <div className={styles.content}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.cta}>
          {project.source_code && (
            <a
              href={project.source_code}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.underline}
            >
              Source Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.underline}
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;