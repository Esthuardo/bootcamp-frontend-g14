const url_categories = 'https://fakestoreapi.com/products/categories'

const categoriesSection = document.querySelector('.categories')

let categoryButtons = ''

async function renderCategories () {
    const response = await fetch(url_categories)
    const categories = await response.json()
    console.log(categories)
    categories.forEach(category => {
        categoryButtons = categoryButtons + `<button class="category__button">${category}</button>`
    });
    categoriesSection.innerHTML = categoryButtons
    const buttonsCategory = document.querySelectorAll('.category__button')
    buttonsCategory.forEach(button => {
        button.addEventListener('click',(event)=>{
            categorieName = event.target.textContent
            fetchByCategories(categorieName)
        })
    });
}

async function fetchByCategories(categorieName){
    const response = await fetch(`https://fakestoreapi.com/products/category/${categorieName}`)
    const products = await response.json()

    const productSection = document.querySelector('.products')
    let productElements = ''

    products.forEach(product => {
        productElements += `
        <article class="product">
            <img class="product__image" src="${product.image}" alt=""/>
            <div class="product__description">
                <h2 class="product__title">${product.title}</h2>
                <p class="product__price">${product.price}</p>
            </div>
        </article>`
    });
    productSection.innerHTML = productElements
}
renderCategories()