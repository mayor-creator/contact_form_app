import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import checkIcon from "../assets/images/icon-success-check.svg";
import styles from "./Toasts.module.css";

export function Toasts({
  message,
  onClose,
  duration = 3000,
  type = "success",
}) {
  const [show, setShow] = useState(true);

  const handleClose = useCallback(() => {
    setShow(false);
    onClose();
  }, [onClose]);

  useEffect(() => {
    const timeout = setTimeout(handleClose, duration);
    return () => clearTimeout(timeout);
  }, [duration, handleClose]);

  return (
    <div
      role="alert"
      aria-live="polite"
      className={`${styles.container} ${show ? styles.show : styles.hide}`}
    >
      <div className={styles.top_container}>
        <img src={checkIcon} alt={`${type} icon`} width="24" height="24" />
        <p className={styles.title}>Message Sent!</p>
        <button
          onClick={handleClose}
          className={styles.close_button}
          aria-label="Close notification"
        >
          ×
        </button>
      </div>
      <div>
        <p className={styles.message}>{message}</p>
      </div>
    </div>
  );
}

Toasts.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  duration: PropTypes.number,
  type: PropTypes.oneOf(["success", "error", "warning", "info"]),
};
