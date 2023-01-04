import styles from "@/styles/Contact.module.css";

const contactItems = [
  {
    social: "website",
    link: "tylerfretz.me",
    href: "http://www.tylerfretz.me/",
  },
  {
    social: "email",
    link: "fretztyler@gmail.com",
    href: "mailto:fretztyler@gmail.com",
  },
  {
    social: "github",
    link: "tylerFretz",
    href: "https://github.com/tylerFretz",
  },
  {
    social: "linkedin",
    link: "tylerfretz",
    href: "https://www.linkedin.com/in/tylerfretz/",
  },
];

const Contact = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener noreferrer">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener noreferrer">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default Contact;