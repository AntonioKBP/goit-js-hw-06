// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories,
//     найдет и выведет в консоль текст заголовка элемента(тега < h2 >) и количество элементов в
// категории(всех вложенных в него < li >).

// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const catToFind = document.querySelectorAll(".item");
const catToFindNumber = catToFind.length;

console.log(`Number of categories: ${catToFindNumber}`);

const categoryName = document.querySelectorAll("h2");
