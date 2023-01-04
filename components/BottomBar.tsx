import BellIcon from "@/components/icons/BellIcon";
import CheckIcon from "@/components/icons/CheckIcon";
import ErrorIcon from "@/components/icons/ErrorIcon";
import NextjsIcon from "@/components/icons/NextjsIcon";
import SourceControlIcon from "@/components/icons/SourceControlIcon";
import WarningIcon from "@/components/icons/WarningIcon";
import styles from "../styles/Bottombar.module.css";

const Bottombar = () => {
  return (
    <footer className={styles.bottomBar}>
      <div className={styles.container}>
        <a
          href="https://github.com/tylerFretz/tylerFretzPortfolio"
          target="_blank"
          rel="noreferrer noopener"
          className={styles.section}
        >
          <SourceControlIcon className={styles.icon} />
          <p>main</p>
        </a>
        <div className={styles.section}>
          <ErrorIcon className={styles.icon} />
          <p className={styles.errorText}>0</p>&nbsp;&nbsp;
          <WarningIcon className={styles.icon} />
          <p>0</p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.section}>
          <NextjsIcon className={styles.icon} />
          <p>Powered by Next.js</p>
        </div>
        <div className={styles.section}>
          <CheckIcon className={styles.icon} />
          <p>Prettier</p>
        </div>
        <div className={styles.section}>
          <BellIcon />
        </div>
      </div>
    </footer>
  );
};

export default Bottombar;