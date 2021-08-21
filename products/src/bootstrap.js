import faker from 'faker'

const mount = el => { //takes in a reference to an html elem bc there's no guarantee it exists in the container it exports to
    let products = ''
    for (let i = 0; i < 5; i++) {
        const name = faker.commerce.productName()
        products += `<div>${name}</div>`
    }

    el.innerHTML = products
}

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-products')
    if (el) { // assuming container doesnt have an element with id dev-products
        mount(el) // running in isolation and not through container
    }
}

// file runs through container
export {mount} // will not be immediately called. container must invoke mount and pass el arg to avoid undefined error