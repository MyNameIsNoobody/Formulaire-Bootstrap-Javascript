// Validation for each field type

// Not empty
function validateRequired(input) {
  return !(input.value === null || input.value === "");
}

// Text
function validateText(input) {
  return input.value.match(/^[A-Za-z]+$/);
}

// Email
function validateEmail(input) {
  return input.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
}

// Postal code
function validatePostCode(input) {
  return input.value.match(/^(0[1-9]|[1-9][0-9])[0-9][0-9][0-9]$/);
}

// Address
function validateAddress(input) {
  return input.value.match(/^[0-9]+\s[A-Za-z\s]+$/);
}

//Phone number
function validatePhoneNumber(input) {
  return input.value.match(/^(?:\+33|0)[1-9](?:[\s.-]?[0-9]{2}){4}$/);
}

// Select city
function validateCity(input) {
  return input.value !== "";
}

// Checkbox
function validateTerms(input) {
  return input.checked;
}

// Validattion for each field
function validateFields(input) {
  let fieldName = input.name;

  // First name
  if (fieldName === "firstName") {
    if (!validateRequired(input)) {
      return false;
    }

    if (!validateText(input)) {
      return false;
    }

    return true;
  }

  // Last name
  if (fieldName === "lastName") {
    if (!validateRequired(input)) {
      return false;
    }

    if (!validateText(input)) {
      return false;
    }

    return true;
  }

  // Email
  if (fieldName === "email") {
    if (!validateRequired(input)) {
      return false;
    }

    if (!validateEmail(input)) {
      return false;
    }

    return true;
  }

  // Address
  if (fieldName === "address") {
    if (!validateRequired(input)) {
      return false;
    }

    if (!validateAddress(input)) {
      return false;
    }

    return true;
  }

  // Postal Code
  if (fieldName === "postCode") {
    if (!validateRequired(input)) {
      return false;
    }

    if (!validatePostCode(input)) {
      return false;
    }

    return true;
  }

  // Phone number
  if (fieldName === "phoneNumber") {
    if (!validateRequired(input)) {
      return false;
    }

    if (!validatePhoneNumber(input)) {
      return false;
    }

    return true;
  }

  // City
  if (fieldName === "city") {
    if (!validateRequired(input)) {
      return false;
    }

    if (!validateCity(input)) {
      return false;
    }

    return true;
  }

  // Checkbox
  if (fieldName === "conditions") {
    if (!validateRequired(input)) {
      return false;
    }

    if (!validateTerms(input)) {
      return false;
    }

    return true;
  }
}
