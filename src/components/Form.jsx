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
              First Name <span>*</span>
              <input
                className={styles.inputField}
                type="text"
                name="firstName"
                id="firstName"
                maxLength={20}
                value={firstName}
                onChange={(event) => {
                  setFirstName(event.target.value);
                }}
              />
              {isSubmitted && invalidInput(firstName) && (
                <span>This is field is required</span>
              )}
            </label>
          </div>
          <div>
            <label htmlFor="lastName">
              Last Name <span>*</span>
              <input
                className={styles.inputField}
                type="text"
                name="lastName"
                id="lastName"
                maxLength={20}
                value={lastName}
                onChange={(event) => {
                  setLastName(event.target.value);
                }}
              />
              {isSubmitted && invalidInput(lastName) && (
                <span>This is field is required</span>
              )}
            </label>
          </div>
        </div>
        <div>
          <label htmlFor="email_address">
            Email Address <span>*</span>
            <input
              className={styles.inputField}
              type="email"
              name="emailAddress"
              id="emailAddress"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            {isSubmitted && invalidEmail(email) && (
              <span>This is field is required</span>
            )}
          </label>
        </div>
        <fieldset className={styles.query_field}>
          <legend>
            Query Type <span>*</span>
          </legend>
          <div className={styles.radio_container}>
            <label htmlFor="generalEnquiry" className={styles.radio_label}>
              <input
                type="radio"
                name="query_type"
                id="generalEnquiry"
                value="general-enquiry"
                checked={isSelected === "general-enquiry"}
                onChange={(event) => setIsSelected(event.target.value)}
              />{" "}
              General Enquiry
            </label>
          </div>
          <div className={styles.radio_container}>
            <label htmlFor="supportRequest" className={styles.radio_label}>
              <input
                type="radio"
                name="query_type"
                id="supportRequest"
                value="support-request"
                checked={isSelected === "support-request"}
                onChange={(event) => setIsSelected(event.target.value)}
              />{" "}
              Support Request
            </label>
          </div>
          {isSubmitted && invalidRadioSelect(isSelected) && (
            <span>Please select a query type</span>
          )}
        </fieldset>
        <div>
          <label htmlFor="message">
            Message <span>*</span>
            <textarea
              className={styles.text_area_field}
              name="message"
              id="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            ></textarea>
            {isSubmitted && invalidInput(message) && (
              <span>This is field is required</span>
            )}
          </label>
        </div>
        <div>
          <input
            className={styles.check_box_field}
            type="checkbox"
            name="consent"
            id="consent"
            checked={checkConsent}
            onChange={(event) => setCheckConsent(event.target.checked)}
          />
          <label htmlFor="consent">
            I consent to being contacted by the team <span>*</span>
          </label>
          {isSubmitted && invalidCheckBox(checkConsent) && (
            <span>To submit this form, please consent to being contacted</span>
          )}
        </div>
        <button className={styles.button} type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
