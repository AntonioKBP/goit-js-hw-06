// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>

// В JavaScript есть массив строк.

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// Напиши скрипт, который для каждого элемента массива ingredients:

//     Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
//     Добавит название ингредиента как его текстовое содержимое.
//     Добавит элементу класс item.
//     После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const elements = ingredients.map((ingredient) => {
//   const itemEl = document.createElement("li");
//   itemEl.classList.add("item");
//   itemEl.textContent = ingredient;
//   return itemEl;
// });

// console.log(elements);

const createIngridientsList = (ingredients) => {
  return ingredients.map((ingredient) => {
    const itemEl = document.createElement("li");
    itemEl.classList.add("item");
    itemEl.textContent = ingredient;
    return itemEl;
  });
};

const elements = createIngridientsList(ingredients);

const listEl = document.querySelector("#ingredients");
listEl.append(...elements);

// const itemEl = document.createElement("li");
// itemEl.classList.add("item");
// itemEl.textContent = ingredients[0];
// console.log(itemEl);
// const newIngredients = [];
// for (let i = 0; i < ingredients.length; i += 1) {
//   const ingredientsItem = ingredients[i];
//   const itemEl = document.createElement("li");
//   itemEl.classList.add("item");
//   itemEl.textContent = ingredientsItem;
//   // console.log(itemEl);
//   newIngredients.push(itemEl);
// }
// console.log(newIngredients);

// console.log(listEl);
