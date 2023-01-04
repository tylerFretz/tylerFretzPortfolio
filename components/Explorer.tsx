import ChevronRightIcon from "@/components/icons/ChevronRightIcon";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/Explorer.module.css";

const explorerItems = [
  {
    name: "home.tsx",
    path: "/",
    icon: "react_icon.svg",
  },
  {
    name: "about.ts",
    path: "/about",
    icon: "typescript_icon.svg",
  },
  {
    name: "contact.css",
    path: "/contact",
    icon: "css_icon.svg",
  },
  {
    name: "projects.cs",
    path: "/projects",
    icon: "csharp_icon.svg",
  },
  {
    name: "settings.json",
    path: "/settings",
    icon: "json_icon.svg",
  },
];

const Explorer = () => {
  const [portfolioOpen, setPortfolioOpen] = useState(true);
  const router = useRouter();

  return (
    <div className={styles.explorer}>
      <p className={styles.title}>Explorer</p>
      <div>
        <input
          type="checkbox"
          className={styles.checkbox}
          id="portfolio-checkbox"
          checked={portfolioOpen}
          onChange={() => setPortfolioOpen(!portfolioOpen)}
        />
        <label htmlFor="portfolio-checkbox" className={styles.heading}>
          <ChevronRightIcon
            className={styles.chevron}
            style={portfolioOpen ? { transform: "rotate(90deg)" } : {}}
          />
          Portfolio
        </label>
        <div
          className={styles.files}
          style={portfolioOpen ? { display: "block" } : { display: "none" }}
        >
          {explorerItems.map((item) => (
            <Link href={item.path} key={item.name} className={styles.link}>
              <div className={`${styles.file} ${router.pathname === item.path && styles.active}`}>
                <Image
                  src={`/${item.icon}`}
                  alt={item.name}
                  height={20}
                  width={20}
                />{" "}
                <p>{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explorer;