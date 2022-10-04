// Напиши скрипт, который изменяет цвета фона элемента < body > через инлайн стиль при клике на
// button.change - color и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

const buttonEl = document.querySelector(".change-color");
const spanText = document.querySelector(".color");

buttonEl.addEventListener("click", getRandomHexColor);

function getRandomHexColor(event) {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  spanText.textContent = randomColor;
}
