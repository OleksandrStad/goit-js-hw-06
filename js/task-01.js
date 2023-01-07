
const categoriesEl = document.querySelectorAll('.item');
console.log(`Number of categories:${categoriesEl.length}`);

console.log(`Category: ${(categoriesEl[0].querySelector('h2')).textContent}`);
console.log(`Elements: ${(categoriesEl[0].querySelectorAll('li')).length}`);


console.log(`Category: ${(categoriesEl[1].querySelector('h2')).textContent}`);
console.log(`Elements: ${(categoriesEl[1].querySelectorAll('li')).length}`);


console.log(`Category: ${(categoriesEl[2].querySelector('h2')).textContent}`);
console.log(`Elements: ${(categoriesEl[2].querySelectorAll('li')).length}`);