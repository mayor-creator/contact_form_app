import { useState } from "react";
import { Toasts } from "./Toasts.jsx";
import {
  invalidInput,
  invalidEmail,
  invalidCheckBox,
  invalidRadioSelect,
} from "../util/validate";
import styles from "./Form.module.css";

export function Form() {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    isSelected: "",
    message: "",
    checkConsent: false,
  };

  const [formData, setFormData] = useState(initialState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const { firstName, lastName, email, isSelected, message, checkConsent } =
    formData;

  const valid =
    !invalidInput(firstName) &&
    !invalidInput(lastName) &&
    !invalidEmail(email) &&
    !invalidRadioSelect(isSelected) &&
    !invalidInput(message) &&
    !invalidCheckBox(checkConsent);

  const handleToastClose = () => {
    setFormData(initialState);
    setIsSubmitted(false);
    setShowToast(false);
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);

    if (valid) {
      setShowToast(true);
    }
  };

  return (
    <>
      <form onSubmit={onSubmit} className={styles.form_wrapper}>
        <div className={styles.name_container}>
          <div>
            <label htmlFor="firstName">
              First Name <span className={styles.asterisk_required}>*</span>
              <input
                className={`${styles.inputField} ${
                  isSubmitted && invalidInput(firstName)
                    ? styles.inputField_error
                    : ""
                }`}
                type="text"
                name="firstName"
                id="firstName"
                maxLength={20}
                aria-required={true}
                value={firstName}
                onChange={handleInputChange}
              />
              {isSubmitted && invalidInput(firstName) && (
                <span className={styles.error} role="alert">
                  This field is required
                </span>
              )}
            </label>
          </div>
          <div>
            <label htmlFor="lastName">
              Last Name <span className={styles.asterisk_required}>*</span>
              <input
                className={`${styles.inputField} ${
                  isSubmitted && invalidInput(lastName)
                    ? styles.inputField_error
                    : ""
                }`}
                type="text"
                name="lastName"
                id="lastName"
                maxLength={20}
                aria-required={true}
                value={lastName}
                onChange={handleInputChange}
              />
              {isSubmitted && invalidInput(lastName) && (
                <span className={styles.error} role="alert">
                  This field is required
                </span>
              )}
            </label>
          </div>
        </div>
        <div>
          <label htmlFor="emailAddress">
            Email Address <span className={styles.asterisk_required}>*</span>
            <input
              className={`${styles.inputField} ${
                isSubmitted && invalidEmail(email)
                  ? styles.inputField_error
                  : ""
              }`}
              type="email"
              name="email"
              id="emailAddress"
              aria-required={true}
              value={email}
              onChange={handleInputChange}
            />
            {isSubmitted && invalidEmail(email) && (
              <span className={styles.error} role="alert">
                Please enter a valid email address
              </span>
            )}
          </label>
        </div>
        <div>
          <fieldset className={styles.query_field}>
            <legend>
              Query Type <span className={styles.asterisk_required}>*</span>
            </legend>
            <div
              className={`${styles.radio_container} ${
                isSelected === "general-enquiry"
                  ? styles.radio_container_active
                  : ""
              }`}
            >
              <label htmlFor="generalEnquiry" className={styles.radio_label}>
                <input
                  type="radio"
                  name="isSelected"
                  id="generalEnquiry"
                  aria-required={true}
                  value="general-enquiry"
                  checked={isSelected === "general-enquiry"}
                  onChange={handleInputChange}
                />{" "}
                General Enquiry
              </label>
            </div>
            <div
              className={`${styles.radio_container} ${
                isSelected === "support-request"
                  ? styles.radio_container_active
                  : ""
              }`}
            >
              <label htmlFor="supportRequest" className={styles.radio_label}>
                <input
                  type="radio"
                  name="isSelected"
                  id="supportRequest"
                  aria-required={true}
                  value="support-request"
                  checked={isSelected === "support-request"}
                  onChange={handleInputChange}
                />{" "}
                Support Request
              </label>
            </div>
          </fieldset>
          {isSubmitted && invalidRadioSelect(isSelected) && (
            <span className={styles.error} role="alert">
              Please select a query type
            </span>
          )}
        </div>
        <div>
          <label htmlFor="message">
            Message <span className={styles.asterisk_required}>*</span>
            <textarea
              className={`${styles.text_area_field} ${
                isSubmitted && invalidInput(message)
                  ? styles.text_area_field_error
                  : ""
              }`}
              name="message"
              id="message"
              aria-required={true}
              value={message}
              onChange={handleInputChange}
            ></textarea>
            {isSubmitted && invalidInput(message) && (
              <span className={styles.error} role="alert">
                This field is required
              </span>
            )}
          </label>
        </div>
        <div>
          <div className={styles.checkbox_container}>
            <input
              className={styles.check_box_field}
              type="checkbox"
              name="checkConsent"
              id="consent"
              aria-required={true}
              checked={checkConsent}
              onChange={handleInputChange}
            />
            <label htmlFor="consent" className={styles.checkbox_label}>
              I consent to being contacted by the team{" "}
              <span className={styles.asterisk_required}>*</span>
            </label>
          </div>
          {isSubmitted && invalidCheckBox(checkConsent) && (
            <span className={styles.error} role="alert">
              To submit this form, please consent to being contacted
            </span>
          )}
        </div>
        <button className={styles.button} type="submit">
          Submit
        </button>
      </form>
      {showToast && valid && (
        <Toasts
          message="Thank you for completing the form. We'll be in touch soon!"
          onClose={handleToastClose}
        />
      )}
    </>
  );
}
