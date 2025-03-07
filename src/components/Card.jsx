import { Form } from "./Form.jsx";
import styles from "./Card.module.css";

export function Card() {
  return (
    <main className={styles.card}>
      <section className={styles.card_content}>
        <header>
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.subtitle}>
            Fill in the form below and we&apos;ll get back to you soon.
          </p>
        </header>
        <Form />
      </section>
    </main>
  );
}
