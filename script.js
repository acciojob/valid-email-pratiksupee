function validEmail(str) {
  //your JS code here.
	if (!str) {
    return false;
  }
  const emailRegex = /^[A-Za-z0-9]+([.-][A-Za-z0-9]+)*@[A-Za-z0-9]+([.-][A-Za-z0-9]+)*\.[A-Za-z]{2,3}(\.[A-Za-z]{2,3})?$/;
  return emailRegex.test(str);
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
