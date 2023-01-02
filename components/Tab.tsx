import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Tab.module.css";
import CloseIcon from "./icons/CloseIcon";

interface TabProps {
  icon: string;
  filename: string;
  path: string;
  handleTabClose: () => void;
}

const Tab = ({ icon, filename, path, handleTabClose }: TabProps) => {
  const { pathname } = useRouter();

  return (
    <div className={styles.tabContainer}>
      <Link href={path} className={styles.link}>
        <div className={`${styles.tab} ${pathname === path && styles.active}`}>
          <Image src={icon} alt={filename} height={18} width={18} />
          <p>{filename}</p>
        </div>
      </Link>
      <div className={styles.closeContainer}>
        <div
          className={styles.close}
          style={{ color: pathname === path ? "#fff" : "#445da1" }}
          onClick={() => handleTabClose()}
        >
          <CloseIcon />
        </div>
      </div>
    </div>
  );
};

export default Tab;