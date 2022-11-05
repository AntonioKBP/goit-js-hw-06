const form = document.querySelector(".login-form");
const emailEl = document.querySelector("email");
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formDataElements = event.currentTarget.elements;
  //   console.dir(formDataElements);
  const email = formDataElements.email.value;
  const pass = formDataElements.password.value;
  //   console.log("email: ", email);
  //   console.log("password: ", pass);

  const dataForm = {
    email,
    pass,
  };

  if (email === "" || pass === "") {
    alert("Error! All fields must be filled");
  } else {
    console.log(dataForm);
  }
  event.currentTarget.reset();
}
