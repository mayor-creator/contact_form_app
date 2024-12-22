import { useState } from "react";

import { invalidInput } from "../util/validate";
import { invalidEmail } from "../util/validate";
import { invalidCheckBox } from "../util/validate";
import { invalidRadioSelect } from "../util/validate";

import styles from "./Form.module.css";

export function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isSelected, setIsSelected] = useState("");
  const [message, setMessage] = useState("");
  const [checkConsent, setCheckConsent] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
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
                    ? ` ${styles.inputField_error}`
                    : ""
                }`}
                type="text"
                name="firstName"
                id="firstName"
                maxLength={20}
                aria-required={true}
                value={firstName}
                onChange={(event) => {
                  setFirstName(event.target.value);
                }}
              />
              {isSubmitted && invalidInput(firstName) && (
                <span className={styles.error}>This field is required</span>
              )}
            </label>
          </div>
          <div>
            <label htmlFor="lastName">
              Last Name <span className={styles.asterisk_required}>*</span>
              <input
                className={`${styles.inputField} ${
                  isSubmitted && invalidInput(lastName)
                    ? ` ${styles.inputField_error}`
                    : ""
                }`}
                type="text"
                name="lastName"
                id="lastName"
                maxLength={20}
                value={lastName}
                aria-required={true}
                onChange={(event) => {
                  setLastName(event.target.value);
                }}
              />
              {isSubmitted && invalidInput(lastName) && (
                <span className={styles.error}>This field is required</span>
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
                  ? ` ${styles.inputField_error}`
                  : ""
              }`}
              type="email"
              name="emailAddress"
              id="emailAddress"
              aria-required={true}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            {isSubmitted && invalidEmail(email) && (
              <span className={styles.error}>
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
                  ? `${styles.radio_container_active}`
                  : ""
              }`}
            >
              <label htmlFor="generalEnquiry" className={styles.radio_label}>
                <input
                  type="radio"
                  name="query_type"
                  id="generalEnquiry"
                  aria-required={true}
                  value="general-enquiry"
                  checked={isSelected === "general-enquiry"}
                  onChange={(event) => setIsSelected(event.target.value)}
                />{" "}
                General Enquiry
              </label>
            </div>
            <div
              className={`${styles.radio_container} ${
                isSelected === "support-request"
                  ? `${styles.radio_container_active}`
                  : ""
              }`}
            >
              <label htmlFor="supportRequest" className={styles.radio_label}>
                <input
                  type="radio"
                  name="query_type"
                  id="supportRequest"
                  aria-required={true}
                  value="support-request"
                  checked={isSelected === "support-request"}
                  onChange={(event) => setIsSelected(event.target.value)}
                />{" "}
                Support Request
              </label>
            </div>
          </fieldset>
          {isSubmitted && invalidRadioSelect(isSelected) && (
            <span className={styles.error}>Please select a query type</span>
          )}
        </div>
        <div>
          <label htmlFor="message">
            Message <span className={styles.asterisk_required}>*</span>
            <textarea
              className={`${styles.text_area_field} ${
                isSubmitted && invalidInput(message)
                  ? ` ${styles.text_area_field_error}`
                  : ""
              }`}
              name="message"
              id="message"
              aria-required={true}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            ></textarea>
            {isSubmitted && invalidInput(message) && (
              <span className={styles.error}>This field is required</span>
            )}
          </label>
        </div>
        <div>
          <div className={styles.checkbox_container}>
            <input
              className={styles.check_box_field}
              type="checkbox"
              name="consent"
              id="consent"
              aria-required={true}
              checked={checkConsent}
              onChange={(event) => setCheckConsent(event.target.checked)}
            />
            <label htmlFor="consent" className={styles.checkbox_label}>
              I consent to being contacted by the team{" "}
              <span className={styles.asterisk_required}>*</span>
            </label>
          </div>
          {isSubmitted && invalidCheckBox(checkConsent) && (
            <span className={styles.error}>
              To submit this form, please consent to being contacted
            </span>
          )}
        </div>
        <button className={styles.button} type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
