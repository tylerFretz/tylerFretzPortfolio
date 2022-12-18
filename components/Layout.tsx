import styles from "../styles/Layout.module.css";

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.main}>
      <main className={styles.content}>{children}</main>
    </div>
  );
};

export default Layout;