import Image from "next/image";
import { useRouter } from "next/router";
import { useMemo } from "react";
import styles from "../styles/Titlebar.module.css";

const topButtons = [
  "File",
  "Edit",
  "View",
  "Go",
  "Run",
  "Terminal",
  "Help",
];

const Titlebar = () => {
  const { pathname } = useRouter();
  const activeFilename = useMemo(() => getActiveFilename(pathname), [pathname]);
  const handleOpenResume = () => window.open("tylerFretzResume.pdf", "_blank", "noopener,noreferrer")?.focus();

  return (
    <section className={styles.titlebar}>
      <Image
        src="/vscode_icon.svg"
        alt="VSCode Icon"
        height={20}
        width={20}
        className={styles.icon}
      />
      <div className={styles.items}>
        {topButtons.map((button) => (
          <button key={button} onClick={handleOpenResume}>{button}</button>
        ))}
      </div>
      <p className={styles.title}>{activeFilename} - Tyler Fretz - Visual Studio Code</p>
      <div className={styles.windowButtons}>
        <span className={styles.minimize}></span>
        <span className={styles.maximize}></span>
        <span className={styles.close}></span>
      </div>
    </section>
  );
};

const getActiveFilename = (pathname: string) => {
  switch (pathname) {
  case "/":
    return "home.tsx";
  case "/about":
    return "about.ts";
  case "/contact":
    return "contact.css";
  case "/projects":
    return "projects.cs";
  case "/settings":
    return "settings.json";
  default:
    return "home.tsx";
  }
};

export default Titlebar;