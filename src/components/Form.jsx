export function Form() {
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
            />
          </label>
        </div>
        <fieldset className="query_field">
          <legend>
            Query Type <span>*</span>
          </legend>
          <div className="general_enquiry_container">
            <label htmlFor="generalEnquiryRadio">
              <input type="radio" name="query_type" id="generalEnquiry" />{" "}
              General Enquiry
            </label>
          </div>
          <div className="support_request_container">
            <label htmlFor="supportRequestRadio">
              <input type="radio" name="query_type" id="supportRequest" />{" "}
              Support Request
            </label>
          </div>
        </fieldset>
        <div className="message_container">
          <label htmlFor="message">
            Message <span>*</span>
            <textarea name="message" id="message" required={true}></textarea>
          </label>
        </div>
        <div className="consent_container">
          <input type="checkbox" name="consent" id="consent" required={true} />
          <label htmlFor="consent">
            I consent to being contacted by the team <span>*</span>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
