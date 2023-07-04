<template>
  <div class="flex justify-between mt-4 mx-3">
    <div class="flex">
      <div class="mr-3">
        <img :src="product.src" class="w-14 h-14" />
      </div>
      <div>
        <p>{{ product.name }}</p>
        <div
          class="border p-2 flex justify-between w-24 h-8 text-gray-600"
          style="align-items: center"
        >
          <span class="cursor-pointer" @click="store.minusCount(product.id)">-</span>
          <span>{{ product.count }}</span>
          <span class="cursor-pointer" @click="store.plusCount(product.id)">+</span>
        </div>
      </div>
    </div>
    <div class="flex flex-col" style="align-items: end;">
      <div class="border border-gray-400 rounded-full  w-5 h-5 cursor-pointer hover:border-black">
        <svg
          class="text-gray-400 w-5 h-5 p-[2px] hover:text-black"
          fill="currentColor"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          @click="store.removeFromCart(product.id)"
        >
          <path
            d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"
          ></path>
        </svg>
      </div>

      <p class="text-gray-600">${{product.price}}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useCartStore} from "../store/index";

const store = useCartStore()
defineProps({
  product: {
    type: Object,
    default: {},
  },
});
</script>
