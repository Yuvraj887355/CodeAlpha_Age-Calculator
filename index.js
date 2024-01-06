function calculateAge() {
  var birthdate = document.getElementById("birthdate").value;
  if (birthdate === "") {
      alert("Please enter your birthdate");
      return;
  }

  var today = new Date();
  var birthDate = new Date(birthdate);
  var age = today.getFullYear() - birthDate.getFullYear();
  var monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }

  var resultElement = document.getElementById("result");
  resultElement.innerHTML = "Your age is: " + age + " years.";
}
