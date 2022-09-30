const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// Напиши скрипт для создания галереи изображений по массиву данных. В HTML есть список ul.gallery.

// <ul class="gallery"></ul>

// Используй массив объектов images для создания элементов <img> вложенных в <li>.
// Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

//     Все элементы галереи должны добавляться в DOM за одну операцию вставки.
//     Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.

// const itemEl = document.createElement("li");
// const imgEl = document.createElement("img");
// imgEl.src = images.url;
// imgEl.alt = images.alt;

// itemEl.appendChild(imgEl);
// console.log(itemEl);

// const imagesCreation = (images) => {
//   return images.map((image) => {
//     const itemEl = document.createElement("li");
//     itemEl.classList.add("task-3-item");
//     const imgEl = document.createElement("img");
//     imgEl.classList.add("task-3-img");
//     imgEl.src = image.url;
//     imgEl.alt = image.alt;

//     itemEl.appendChild(imgEl);
//     return itemEl;
//   });
// };

// const elements = imagesCreation(images);

// const ulEl = document.querySelector(".gallery");
// ulEl.append(...elements);

const list = document.querySelector(".gallery");

let markup = "";
markup = images.map(
  (image) =>
    `<li class="task-3-item"><img class="task-3-img" src="${image.url}" alt="${image.alt}"></i>`
);

list.insertAdjacentHTML("afterbegin", markup);
