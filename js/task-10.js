// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число.
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

//     Размеры самого первого <div> - 30px на 30px.
//     Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
//     Все элементы должены иметь случайный цвет фона в формате HEX.
//     Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes,
//   тем самым удаляя все созданные элементы.

const divForm = document.querySelector("#controls");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const inputRef = document.querySelector("input");
const divBoxes = document.querySelector("#boxes");
console.log(inputRef);

buttonCreate.addEventListener("click", createBoxes);
buttonDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const myBoxes = [];
  amount = Number(inputRef.value);
  for (let i = 0; i < amount; i += 1) {
    console.log(amount);
    const box = document.createElement("div");
    box.style.width = String(30 + 10 * i) + "px";
    box.style.height = String(30 + 10 * i) + "px";
    box.style.backgroundColor = getRandomHexColor();
    box.style.marginTop = "10px";
    box.style.borderRadius = "4px";
    box.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px";
    myBoxes.push(box);
    console.log(myBoxes);
    divBoxes.append(...myBoxes);
  }
}

function destroyBoxes() {
  divBoxes.innerHTML = "";
  inputRef.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
