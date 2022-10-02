// Напиши скрипт управления формой логина.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

//     Обработка отправки формы form.login-form должна быть по событию submit.
//     При отправке формы страница не должна перезагружаться.
//     Если в форме есть незаполненные поля, выводи alert с предупреждением о том,
//     что все поля должны быть заполнены.
//     Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект,
//     где имя поля будет именем свойства, а значение поля - значением свойства.
//     Для доступа к элементам формы используй свойство elements.
//     Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const form = document.querySelector(".login-form");
const emailEl = document.querySelector("email");
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  //   const formData = new FormData(event.currentTarget);

  //   formData.forEach((value, name) => {
  //     console.log("submit name: ", name);
  //     console.log("submit value", value);
  //   });

  //   console.log(formData.value);

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
