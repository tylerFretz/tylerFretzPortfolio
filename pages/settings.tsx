import ThemeInfo from "@/components/ThemeInfo";
import styles from "/styles/SettingsPage.module.css";

const themes = [
  {
    name: "GitHub Dark",
    icon: "/github-dark.png",
    publisher: "GitHub",
    theme: "github-dark",
    description: "GitHub theme for VS Code",
  },
  {
    name: "Dracula",
    icon: "/dracula.png",
    publisher: "Dracula Theme",
    theme: "dracula",
    description: "Official Dracula Theme. A dark theme for many editors, shells, and more.",
  },
  {
    name: "Ayu Dark",
    icon: "/ayu.png",
    publisher: "teabyii",
    theme: "ayu-dark",
    description: "A simple theme with dark colors.",
  },
  {
    name: "Ayu Mirage",
    icon: "/ayu.png",
    publisher: "teabyii",
    theme: "ayu-mirage",
    description: "A simple theme with bright colors.",
  },
  {
    name: "Nord",
    icon: "/nord.png",
    publisher: "arcticicestudio",
    theme: "nord",
    description: "An arctic, north-bluish clean and elegant Visual Studio Code theme.",
  },
  {
    name: "Night Owl",
    icon: "/night-owl.png",
    publisher: "sarah.drasner",
    theme: "night-owl",
    description: "A VS Code theme for night owls.",
  },
];

const SettingsPage = () => {
  return (
    <>
      <h2>Manage Themes</h2>
      <div className={styles.container}>
        {themes.map((theme) => (
          <ThemeInfo key={theme.name} {...theme} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Settings" },
  };
}

export default SettingsPage;