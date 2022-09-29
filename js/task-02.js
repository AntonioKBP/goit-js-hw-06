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

console.log(ingredients);
const elements = [];

const ingredientsEl = document.createElement("li");

ingredientsEl.classList.add("item");
const ingredientText = document.createElement("p");
ingredientText.textContent = ingredients[0];

for (let i = 0; i < ingredients.length; i += 1) {
  console.log(ingredients[i]);
  const ingredientsEl = document.createElement("li");

  ingredientsEl.classList.add("item");
  const ingredientText = document.createElement("p");
  ingredientText.textContent = ingredients[i];
  elements.push(ingredientText);
}

console.log(elements);
