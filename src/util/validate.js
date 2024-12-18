export function invalidInput(input) {
  return input.length === 0 || input.trim() === "";
}

export function invalidEmail(email) {
  const emailPattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;
  const isValidEmail = emailPattern.test(email);
  return !isValidEmail;
}

export function invalidCheckBox(check) {
  return check === false;
}

export function invalidRadioSelect(radio) {
  if (radio !== "support-request" && radio !== "general-enquiry") {
    return true;
  }
}
