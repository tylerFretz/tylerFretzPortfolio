import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Tab.module.css";

interface TabProps {
  icon: string;
  filename: string;
  path: string;
}

const Tab = ({ icon, filename, path }: TabProps) => {
  const { pathname } = useRouter();

  return (
    <Link href={path} className={styles.link}>
      <div className={`${styles.tab} ${pathname === path && styles.active}`}>
        <Image src={icon} alt={filename} height={18} width={18} />
        <p>{filename}</p>
      </div>
    </Link>
  );
};

export default Tab;