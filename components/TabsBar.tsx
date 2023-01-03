import styles from "../styles/Tabsbar.module.css";
import Tab from "./Tab";

const tabs = [
  {
    name: "home.tsx",
    path: "/",
    icon: "/react_icon.svg",
  },
  {
    name: "about.ts",
    path: "/about",
    icon: "/typescript_icon.svg",
  },
  {
    name: "contact.css",
    path: "/contact",
    icon: "/css_icon.svg",
  },
  {
    name: "projects.cs",
    path: "/projects",
    icon: "/csharp_icon.svg",
  },
  {
    name: "settings.json",
    path: "/settings",
    icon: "/json_icon.svg",
  },
];

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      {tabs.map((tab) => (
        <Tab
          key={tab.name}
          icon={tab.icon}
          filename={tab.name}
          path={tab.path}
        />
      ))}
    </div>
  );
};

export default Tabsbar;