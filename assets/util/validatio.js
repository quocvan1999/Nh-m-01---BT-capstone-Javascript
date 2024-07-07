export function kiemTraRong(value, selectorError, name) {
  if (value.trim() === "") {
    document.querySelector(
      selectorError
    ).innerHTML = `${name} không được bỏ trống!`;
    return false;
  }
  document.querySelector(selectorError).innerHTML = "";
  return true;
}

export function kiemTraEmail(value, selectorError, name) {
  let regexEmail = /^[\w\.-]+@[\w\.-]+\.[a-zA-Z]{2,}$/;
  if (regexEmail.test(value)) {
    document.querySelector(selectorError).innerHTML = "";
    return true;
  }
  document.querySelector(selectorError).innerHTML = `${name} không hợp lệ!`;
  return false;
}

export function kiemTraChu(value, selectorError, name) {
  let regexString = /^[A-Za-z]+$/;
  if (regexString.test(value)) {
    document.querySelector(selectorError).innerHTML = "";
    return true;
  }

  document.querySelector(selectorError).innerHTML = `${name} phải là chữ!`;
  return false;
}

export function kiemTraMatKhau(value, selectorError, name) {
  let rexgeMatKhau = /^(?=.*\d)(?=.*[A-Z])(?=.*[\W_])\S{6,10}$/;
  if (rexgeMatKhau.test(value)) {
    document.querySelector(selectorError).innerHTML = "";
    return true;
  }

  document.querySelector(selectorError).innerHTML = `${name} không hợp lệ!`;
  return false;
}

// Viết hàm kiểm tra số điện thoại định dạng việt nam
export function kiemTraSDT(value, selectorError, name) {
  let rexgeSDT = /(09|03|07|08|05)+([0-9]{8})\b/;
  if (rexgeSDT.test(value)) {
    document.querySelector(selectorError).innerHTML = "";
    return true;
  }
  document.querySelector(selectorError).innerHTML = `${name} không hợp lệ!`;
  return false;
}

export function kiemTraPassConfirm(pass, passConfirm, selectorError, name) {
  if (passConfirm === pass) {
    document.querySelector(selectorError).innerHTML = "";
    return true;
  }

  document.querySelector(selectorError).innerHTML = `${name} không khớp!`;
  return false;
}
