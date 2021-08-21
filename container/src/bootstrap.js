import { mount as productsMount} from 'products/ProductsIndex'
import { mount as cartMount} from 'cart/ShowCart'

console.log('object')

productsMount(document.querySelector('#container-products'))
cartMount(document.querySelector('#container-cart'))