import { defineStore } from 'pinia'

export const useProductStore = defineStore('ProductStore', () => {
  let products = ref([]) as any

  products = [
    { id: 1, src: '/img/product-03-a-400x525.jpg', name: 'Libero X350', price: 799.00, rate: 4 },
    { id: 2, src: '/img/product-04-a-400x525.jpg', name: 'Practico S2 Exclusive', price: 600.00, rate: 5 },
    { id: 3, src: '/img/product-15-a-400x525.jpg', name: 'U-Lock Force MAX', price: 75.00, rate: 3 },
    { id: 4, src: '/img/product-16-a-400x525.jpg', name: 'Unbeatable Lock 100', price: 69.00, rate: 4 },
  ]

  return { products }
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
    let newCartProduct = { ...product, count: 1 }
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
    setToCart
  }
})
