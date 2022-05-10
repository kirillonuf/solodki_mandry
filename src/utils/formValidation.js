export function checkTextField(string) {
  if (string === '') {
    return false;
  }

  return true;
}

export function checkPassword(pass) {
  console.log("pass", pass.length);
  return pass.length >= 6;
}

export function checkEmail(email) {
  const reg = /^[\w-\.\d*]+@[\w\d]+(\.\w{2,4})$/;

  return reg.test(String(email).toLowerCase());

  // return email === '123';
}
