// Напиши скрипт, который изменяет цвета фона элемента < body > через инлайн стиль при клике на
// button.change - color и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерации случайного цвета используй функцию getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

const buttonEl = document.querySelector(".change-color");
const spanText = document.querySelector(".color");
console.log(spanText);

// document.body.style.backgroundColor = "red";
buttonEl.addEventListener("click", getRandomHexColor);

function getRandomHexColor(event) {
  console.log(event.currentTarget.value);
  document.body.style.backgroundColor = "teal";
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
