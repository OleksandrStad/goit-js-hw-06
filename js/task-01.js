
const categoriesEl = document.querySelectorAll('.item');
console.log(`Number of categories:${categoriesEl.length}`);

for (const category of categoriesEl) {

    console.log(`Category: ${(category.querySelector('h2')).textContent}`);
    console.log(`Elements: ${(category.querySelectorAll('li')).length}`);

};