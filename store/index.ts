import { defineStore } from 'pinia'

export const useProductStore = defineStore('ProductStore', () => {
  let products = ref([]) as any

  products.value = [
    { id: 1, src: '/img/product-12-a-400x525.jpg', name: 'Booster Brave F1', price: 700.00, rate: 5, type: 'scooter', discount:false },
    { id: 2, src: '/img/product-13-a-400x525.jpg', name: 'GoodLock J10', price: 95.00, rate: 3, type: 'lock', discount:false },
    { id: 3, src: '/img/product-17-a-400x525.jpg', name: 'Hammer Scooter Lock', price: 75.00, rate: 4, type: 'lock', discount:false },
    { id: 4, src: '/img/product-01-a-400x525.jpg', name: 'Libero X150', price: 750.00, rate: 4, type: 'scooter', discount:false },
    { id: 5, src: '/img/product-02-a-400x525.jpg', name: 'Libero X250', price: 750.00, rate: 4, type: 'scooter', discount:false },
    { id: 6, src: '/img/product-03-a-400x525.jpg', name: 'Libero X350', price: 799.00, rate: 4, type: 'scooter', discount:true, realPrice: 875.00  },
    { id: 7, src: '/img/product-18-a-400x525.jpg', name: 'MAX3 Scooter Lock', price: 90.00, rate: 4, type: 'lock', discount:false },
    { id: 8, src: '/img/product-11-a-400x525.jpg', name: 'North Booster 1', price: 725.00, rate: 3, type: 'scooter', discount:false },
    { id: 9, src: '/img/product-10-a-400x525.jpg', name: 'North D Booster 2000', price: 870.00, rate: 4, type: 'scooter', discount:false },
    { id: 10, src: '/img/product-06-a-400x525.jpg', name: 'Practico PRO 500', price: 699.00, rate: 4, type: 'scooter', discount:false },
    { id: 11, src: '/img/product-04-a-400x525.jpg', name: 'Practico S2 Exclusive', price: 600.00, rate: 5, type: 'scooter', discount:true, realPrice: 750.00 },
    { id: 12, src: '/img/product-05-a-400x525.jpg', name: 'Practico Z50 Exclusive', price: 750.00, rate: 4, type: 'scooter', discount:false },
    { id: 13, src: '/img/product-09-a-400x525.jpg', name: 'SilverPath C1', price: 725.00, rate: 4, type: 'scooter', discount:false },
    { id: 14, src: '/img/product-07-a-400x525.jpg', name: 'SilverPath MAX1', price: 699.00, rate: 2, type: 'scooter', discount:false },
    { id: 15, src: '/img/product-08-a-400x525.jpg', name: 'SilverPath MAX2', price: 575.00, rate: 5, type: 'scooter', discount:false },
    { id: 16, src: '/img/product-14-a-400x525.jpg', name: 'U-Lock Force', price: 99.00, rate: 5, type: 'lock', discount:false },
    { id: 17, src: '/img/product-15-a-400x525.jpg', name: 'U-Lock Force MAX', price: 75.00, rate: 3 , type: 'lock', discount:true, realPrice: 90.00 },
    { id: 18, src: '/img/product-16-a-400x525.jpg', name: 'Unbeatable Lock 100', price: 69.00, rate: 4 , type: 'lock', discount:true, realPrice: 80.00 },  
  ]

  function getProductById(id:number) {
    return products.value.find((product:any) => product.id == id)
  }

  return { products, getProductById }
})

export const useCartStore = defineStore('CartStore', () => {
  let isCartOpen = ref(false)
  let cartProducts = ref([]) as any

  function openCart() {
    isCartOpen.value = true
  }

  function closeCart() {
    isCartOpen.value = false
  }

  function addToCart(product: any) {
    let newCartProduct = product.count > 1 ? product :{ ...product, count: 1 }
    let currentproduct = cartProducts.value.find((p:any) => p.id == product.id)

    if (currentproduct) {
      currentproduct.count++
    } else {
      cartProducts.value.push(newCartProduct)
    }

    localStorage.setItem('cart', JSON.stringify(cartProducts.value))
  }

  function removeFromCart(id: number) {
    cartProducts.value = cartProducts.value.filter((prod:any) => {
      return prod.id !== id
    })
    localStorage.setItem('cart', JSON.stringify(cartProducts.value))

  }

  function plusCount(id: number) {
    let product = cartProducts.value.find((prod:any) => prod.id === id)
    product.count++
    localStorage.setItem('cart', JSON.stringify(cartProducts.value))

  }

  function minusCount(id: number) {
    let product = cartProducts.value.find((prod:any) => prod.id === id)
    if (product.count == 1) {
      removeFromCart(id)
    } else {
      product.count--
      localStorage.setItem('cart', JSON.stringify(cartProducts.value))
    }

  }

  function setToCart(){
    cartProducts.value = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') as string) : []
  }

  function calSum() {
    let sum = 0;
    cartProducts.value.forEach((p:any) => {
      sum = sum + (p.price * p.count)
    })
    return sum;
  }

  function getCountOfCart() {
    let sum = 0;
    cartProducts.value.forEach((p:any) => {
      sum = sum + p.count
    })
    return sum;
  }

  function getProductById(id: number) {
    return cartProducts.value.find((p:any) => p.id == id)
  }


  return {
    openCart,
    closeCart,
    isCartOpen,
    cartProducts,
    addToCart,
    removeFromCart,
    plusCount,
    minusCount,
    calSum,
    getCountOfCart,
    setToCart,
    getProductById
  }
})
