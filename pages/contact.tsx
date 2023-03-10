import Contact from "@/components/Contact";
import styles from "@/styles/ContactPage.module.css";
import React, { useState } from "react";

const ContactPage = () => {
  const [buttonText, setButtonText] = useState("Submit" as string);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setButtonText("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ name, email, subject, message }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      alert("Your message has been received!");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } else {
      alert("There was an error. Please try again in a while.");
    }
    setButtonText("Submit");
  };

  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.heading}>Reach Out Via Socials</h3>
        <Contact />
      </div>
      <div>
        <h3 className={styles.heading}>Or Fill Out This Form</h3>
        <form className={styles.form} onSubmit={submitForm}>
          <div className={styles.flex}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="name">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">{buttonText}</button>
        </form>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Contact" },
  };
}

export default ContactPage;