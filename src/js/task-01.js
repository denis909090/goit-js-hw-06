// first
const categories = document.querySelectorAll(".item")
console.log(`Number of categories: ${categories.length}`);
// second
categories.forEach(item => {
    const title = item.querySelector('h2')
    const elems = item.querySelectorAll('li')
    console.log(`Category: ${title.textContent}`); 
    console.log(`Elements: ${elems.length}`); 
});

