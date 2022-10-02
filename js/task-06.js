// Напиши скрипт, который при потере фокуса на инпуте(событие blur),
//     проверяет его содержимое на правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

//     Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
//     Если введено подходящее количество символов, то border инпута становится зелёным,
//     если неправильное - красным.

const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputCheck);

function onInputCheck(event) {
  console.log(event.currentTarget.value);
  if (event.currentTarget.value.length == inputEl.dataset.length) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}
