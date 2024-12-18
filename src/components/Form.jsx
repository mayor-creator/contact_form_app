import { useState } from "react";

export function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isSelected, setIsSelected] = useState("");
  const [message, setMessage] = useState("");
  const [checkConsent, setCheckConsent] = useState(false);

  return (
    <>
      <form>
        <div className="name_container">
          <div className="first_name_container">
            <label htmlFor="firstName">
              First Name <span>*</span>
              <input
                type="text"
                name="firstName"
                id="firstName"
                required={true}
                maxLength={20}
                value={firstName}
                onChange={(event) => {
                  setFirstName(event.target.value);
                }}
              />
            </label>
          </div>
          <div className="last_name_container">
            <label htmlFor="lastName">
              Last Name <span>*</span>
              <input
                type="text"
                name="lastName"
                id="lastName"
                required={true}
                maxLength={20}
                value={lastName}
                onChange={(event) => {
                  setLastName(event.target.value);
                }}
              />
            </label>
          </div>
        </div>
        <div className="email_address_container">
          <label htmlFor="email_address">
            Email Address <span>*</span>
            <input
              type="email"
              name="emailAddress"
              id="emailAddress"
              required={true}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
        </div>
        <fieldset className="query_field">
          <legend>
            Query Type <span>*</span>
          </legend>
          <div className="general_enquiry_container">
            <label htmlFor="generalEnquiryRadio">
              <input
                type="radio"
                name="query_type"
                id="generalEnquiry"
                required={true}
                value="general-enquiry"
                checked={isSelected === "general-enquiry"}
                onChange={(event) => setIsSelected(event.target.value)}
              />{" "}
              General Enquiry
            </label>
          </div>
          <div className="support_request_container">
            <label htmlFor="supportRequestRadio">
              <input
                type="radio"
                name="query_type"
                id="supportRequest"
                required={true}
                value="support-request"
                checked={isSelected === "support-request"}
                onChange={(event) => setIsSelected(event.target.value)}
              />{" "}
              Support Request
            </label>
          </div>
        </fieldset>
        <div className="message_container">
          <label htmlFor="message">
            Message <span>*</span>
            <textarea
              name="message"
              id="message"
              required={true}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            ></textarea>
          </label>
        </div>
        <div className="consent_container">
          <input
            type="checkbox"
            name="consent"
            id="consent"
            required={true}
            checked={checkConsent}
            onChange={(event) => setCheckConsent(event.target.checked)}
          />
          <label htmlFor="consent">
            I consent to being contacted by the team <span>*</span>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>First Name {firstName}</p>
      <p>Last Name {lastName}</p>
      <p>Email {email}</p>
      <p>Radio Button Selected {isSelected}</p>
      <p>Message {message}</p>
      <p>Consent {checkConsent.toString()}</p>
    </>
  );
}
