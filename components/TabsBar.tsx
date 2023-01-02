import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../styles/Tabsbar.module.css";
import Tab from "./Tab";

const explorerItems = [
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
    name: "github.md",
    path: "/github",
    icon: "/markdown_icon.svg",
  },
  {
    name: "settings.json",
    path: "/settings",
    icon: "/json_icon.svg",
  },
];

const Tabsbar = () => {
  const [tabs, setTabs] = useState(explorerItems);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      console.log(router.pathname);
      if (tabs.every((tab) => tab.path !== router.pathname)) {
        const newTab = explorerItems.find(
          (item) => item.path === router.pathname
        );
        console.log(newTab);
        if (newTab) {
          setTabs([...tabs, newTab]);
        }
      }
      console.log(tabs);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname]);

  const handleTabClose = (tabName: string) => {
    if (tabs.length > 1) {
      const index = tabs.findIndex((tab) => tab.name === tabName);
      if (index > 0) {
        const newTab = explorerItems.find((item) => item.name === tabs[index-1].name);
        if (!newTab) return;
        setTabs(tabs.filter((tab) => tab.name !== tabName));
        router.push(newTab.path);
      } else if (index === 0) {
        const newTab = explorerItems.find((item) => item.name === tabs[index+1].name) ?? explorerItems[0];
        if (!newTab) return;
        setTabs(tabs.filter((tab) => tab.name !== tabName));
        router.push(newTab.path);
      }
    } else {
      setTabs([]);
      router.push("/blank");
    }
  };

  return (
    <div className={styles.tabs}>
      {tabs.map((tab) => (
        <Tab
          key={tab.name}
          icon={tab.icon}
          filename={tab.name}
          path={tab.path}
          handleTabClose={() => handleTabClose(tab.name)}
        />
      ))}
    </div>
  );
};

export default Tabsbar;