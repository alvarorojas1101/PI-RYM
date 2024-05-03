function validation({ email, password }) {
  const errors = {};
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!regexEmail.test(email)) {
    errors.email = "Email invalido";
  }
  if (email.length === 0) {
    errors.email = "Este campo es obligatorio";
  }
  if (!regexPassword.test(password)) {
    errors.password =
      "Su password debe incluir Mínimo ocho caracteres, al menos una letra y un número";
  }
  if (password.length === 0) {
    errors.password = "Este campo es obligatorio";
  }
  return errors;
}

export default validation;
