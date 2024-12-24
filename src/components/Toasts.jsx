import PropTypes from "prop-types";

import checkIcon from "../assets/images/icon-success-check.svg";
import styles from "./Toasts.module.css";

export function Toasts({ message }) {
  return (
    <div className={styles.container}>
      <div className={styles.top_container}>
        <img src={checkIcon} alt="" />
        <p className={styles.title}>Message Sent!</p>
      </div>
      <div>
        <p className={styles.message}>{message}</p>
      </div>
    </div>
  );
}

Toasts.propTypes = {
  message: PropTypes.string.isRequired,
};
