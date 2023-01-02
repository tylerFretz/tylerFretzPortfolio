import Image from "next/image";
import RepoCard, { Repo } from "../components/RepoCard";
import styles from "../styles/GithubPage.module.css";

type user = {
  login: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
};

interface GithubPageProps {
  repos: Repo[];
  user: user;
}

const GithubPage = ({ repos, user }: GithubPageProps) => {
  return (
    <>
      <div className={styles.user}>
        <div>
          <Image
            src={user.avatar_url}
            className={styles.avatar}
            alt={user.login}
            width={50}
            height={50}
          />
          <h3 className={styles.username}>{user.login}</h3>
        </div>
        <div>
          <h3>{user.public_repos} repos</h3>
        </div>
        <div>
          <h3>{user.followers} followers</h3>
        </div>
      </div>
      <div className={styles.container}>
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
      <div className={styles.contributions}>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const repos: Repo[] = [];
  const user = {} as user;

  return {
    props: { title: "GitHub", repos, user },
    revalidate: 10,
  };
}

export default GithubPage;