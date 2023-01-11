const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listIngredientsEl = document.getElementById('ingredients');

const itemIngredientsEl = ingredients.map((ingredient, ingredients) => {
  let ingredientEl = document.createElement('li');
  ingredientEl.textContent = ingredient;
  ingredientEl.classList.add('item')
  return ingredientEl;

});

listIngredientsEl.append(...itemIngredientsEl)

// console.log(itemIngredientsEl);
// console.log(listIngredientsEl)