const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is reqired";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is reqired";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
