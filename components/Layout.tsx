import BottomBar from "./BottomBar";
import Explorer from "./Explorer";
import SideBar from "./SideBar";
import TabsBar from "./TabsBar";
import TitleBar from "./TitleBar";
import styles from "/styles/Layout.module.css";

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <TitleBar />
      <div className={styles.main}>
        <SideBar />
        <Explorer />
        <div style={{ width: "100%" }}>
          <TabsBar />
          <main className={styles.content}>{children}</main>
        </div>
      </div>
      <BottomBar />
    </>
  );
};

export default Layout;