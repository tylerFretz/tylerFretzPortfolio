import ProjectCard, { Project } from "@/components/ProjectCard";
import { getProjects } from "./api/projects";
import styles from "/styles/ProjectsPage.module.css";

interface ProjectsPageProps {
  projects: Project[];
}

const ProjectsPage = ({ projects }: ProjectsPageProps) => {
  return (
    <>
      <h3>Stuff I&apos;ve Built So Far</h3>
      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const projects = getProjects();

  return {
    props: { title: "Projects", projects },
  };
}

export default ProjectsPage;