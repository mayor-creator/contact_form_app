import { Form } from "./Form.jsx";
import styles from "./Card.module.css";

export function Card() {
  return (
    <>
      <main className={styles.card}>
        <div>
          <h1 className={styles.title}>Contact Us</h1>
        </div>
        <Form></Form>
      </main>
    </>
  );
}
