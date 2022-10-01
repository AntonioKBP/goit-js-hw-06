// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
//     подставляет его текущее значение в span#name - output.Если инпут пустой,
//         в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

// const inputRef = document.querySelector("#name-input");
// const outputRef = document.querySelector("#name-output");

// inputRef.addEventListener("input", onInputChange);

// function onInputChange(event) {

// }

//   if (inputRef.textContent === "") {
//     outputRef.textContent = Anonymous;
//   }
//   if (inputRef.textContent !== "") {
//     outputRef.textContent = event.currentTarget.value;
//   }

// function onInputChange(event) {
//   console.log(outputRef.textContent.value);

//   if (inputRef.textContent.value !== "") {
//     outputRef.textContent = event.currentTarget.value;
//   }
//   if (inputRef.textContent.value === "") {
//     outputRef.textContent = "Anonymous";
//   }
// }

//  console.log(event.currentTarget.value);
//  outputRef.textContent = event.currentTarget.value;

const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

console.log(refs.input.textcontent);

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  console.log(event.currentTarget.value);
  if (refs.input.textContent.value === "") {
    refs.output.textContent = "Anonymous";
  }
  if (refs.input.textContent.value !== "") {
    refs.output.textContent = event.currentTarget.value;
  }
}
