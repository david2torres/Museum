export const REGEX_PATTERNS = {
  minimumCharacter: /.{8,}/,
  combineUperLowerLetter: /^(?=.*[a-z])(?=.*[A-Z]).+$/,
  minimumSimbolAndNumber: /^(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).+$/,
  strongPassword:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/,
  mediumPassword: /\b[a-zA-Z]+[0-9]+[\W_]*[a-zA-Z]*\b/,
  emailRegex:
    /^[a-zA-Z0-9._%+-]+@(museonacional\.gov\.co|mincultura\.gov\.co)$/,
};
