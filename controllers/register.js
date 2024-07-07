import { User } from "../models/User.js";
import { postApiDataAsync, resetInput } from "../assets/util/method.js";
import {
  kiemTraRong,
  kiemTraEmail,
  kiemTraChu,
  kiemTraMatKhau,
  kiemTraSDT,
  kiemTraPassConfirm,
} from "../assets/util/validatio.js";

let url = "https://apistore.cybersoft.edu.vn/api/Users/signup";
let arrInput = document.querySelectorAll("#form-register .input-control");
let genderValue = document.getElementsByName("gender");

document.querySelector(".btn-submit").onclick = async function (e) {
  e.preventDefault();

  let newUser = new User();
  let valid = true;

  for (const value of genderValue) {
    if (value.checked) {
      newUser.gender = value.value;
      break;
    }
  }

  for (const item of arrInput) {
    newUser[item.name] = item.value;
  }

  valid = validationFormInput(newUser);

  if (!valid) {
    return;
  }

  let res = await postApiDataAsync(url, newUser);
  if (res.status === 200) {
    alert("Đăng ký thành công");
  } else {
    alert("Đăng ký không thành công");
  }
  resetInput(arrInput);
};

const validationFormInput = (arr) => {
  let valid = true;
  let { email, name, password, phone } = arr;
  let passConfirm = document.querySelector("#password-confirm");

  for (const input of arrInput) {
    valid &= kiemTraRong(input.value, `#tb-${input.id}`, input.placeholder);
  }

  if (kiemTraRong(email, "#tb-email", "Email")) {
    valid &= kiemTraEmail(email, "#tb-email", "Email");
  }

  if (kiemTraRong(name, "#tb-name", "Name")) {
    valid &= kiemTraChu(name, "#tb-name", "Name");
  }

  if (kiemTraRong(password, "#tb-password", "Password")) {
    valid &= kiemTraMatKhau(password, "#tb-password", "Password");
  }

  if (kiemTraRong(phone, "#tb-phone", "Phone")) {
    valid &= kiemTraSDT(phone, "#tb-phone", "Phone");
  }

  if (
    kiemTraRong(passConfirm.value, "#tb-password-confirm", "Password confirm")
  ) {
    valid &= kiemTraPassConfirm(
      password,
      passConfirm.value,
      "#tb-password-confirm",
      "Password confirm"
    );
  }

  return valid;
};
