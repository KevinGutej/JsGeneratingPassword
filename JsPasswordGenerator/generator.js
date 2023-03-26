function generatePassword(length) {
  var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-="; //Creating a variable that will hold every character possible so then it will be used in the generating
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * chars.length); //random function will generate our random chars
    password += chars[randomIndex]; //To our new password variable we are adding random chars from our list
  }
  return password;
}

