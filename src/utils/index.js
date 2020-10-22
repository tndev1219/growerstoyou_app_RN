const Utils = {
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  },
  validatePhonenumber(phone) {
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return re.test(String(phone).toLowerCase());
  },
  validatePassword(password) {
    if (password.length < 8) {
      return false;
  // } else if (str.length > 50) {
  //     return("too_long");
  } else if (password.search(/\d/) == -1) {
      return false;
  } else if (password.search(/[a-zA-Z]/) == -1) { //no letter
      return false;
  // } else if (str.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+]/) != -1) {
  //     return("bad_char");
  }
  return true;
  },
  isNumeric(text) {
    let isNumber = true;
    let numbers = '0123456789';
    for (var i=0; i < text.length; i++) {
        if (!(numbers.indexOf(text[i]) > -1)) {
          isNumber = false
        }
    }
    return isNumber
  },
  calculateAge(input) {
    var birthday = new Date(input)
    var agedifms = Date.now() - birthday.getTime()
    var ageDate = new Date(agedifms)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  },

}

export {Utils}
