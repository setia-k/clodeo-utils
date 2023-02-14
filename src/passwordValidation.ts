
interface passwordFlag {
  uppercase: boolean;
  lowercase: boolean;
  number: boolean;
  character: boolean; // special character
}

/**
 * Check if a given password fulfills the requirements (uppercase, lowercase, number and character)
 * @param password {string} password to be checked
 * @returns {object} object with boolean flags for each requirement, true if fulfilled
 */
function passwordValidation(password: string): passwordFlag {
  const pass = password ?? '';
  const flag: passwordFlag = {
    uppercase: /[A-Z]/.test(pass),
    lowercase: /[a-z]/.test(pass),
    number: /\d+/g.test(pass),
    character: /[#?!@$%^&*-]+/.test(pass),
  };
  return flag;
}

export default passwordValidation;
