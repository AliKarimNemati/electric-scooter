<template>
  <div
    class="fixed w-full z-20 top-0 left-0 h-[100vh] bg-[#0000007a] text-center overflow-auto"
  >
    <div
      class="lg:w-2/5 md:w-3/5 w-4/5 flex flex-col p-8 items-center bg-white border border-black mt-10 justify-center mx-auto"
    >
      <span
        class="self-end mb-5 cursor-pointer hover:text-slate-600"
        @click="closeQuickView()"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
          class="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          ></path></svg
      ></span>
      <div class="flex flex-wrap">
        <div class="md:w-2/5 w-full">
          <img :src="product.src" class="w-full" />
        </div>
        <div class="flex flex-col md:w-3/5 w-full">
          <div class="p-3">
            <NuxtLink :to="'/shop/' + product.id" class="font-bold">{{
              product.name
            }}</NuxtLink>


            <p class="font-bold text-sm text-gray-500" v-if="!product.discount">
              ${{ product.price + ".00" }}
            </p>
            <p class="font-bold text-sm text-gray-500" v-if="product.discount">
              <span class="text-gray-300" style="text-decoration: line-through"
                >${{ product.realPrice + ".00" }}</span
              >
              ${{ product.price + ".00" }}
            </p>
          </div>

          <p class="text-gray-600 mb-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
            aperiam voluptatibus dicta tempora, eveniet ea?
          </p>
      <div class="flex flex-col items-center">
        <div
          class="border p-2 flex justify-between w-32 h-9 text-gray-600 mb-3"
          style="align-items: center"
        >
          <span
            class="cursor-pointer"
            @click="
              cartStore.getProductById(product.id)
                ? cartStore.minusCount(product.id)
                : productCount > 1 && productCount--
            "
            >-</span
          >
          <span>{{
            cartStore.getProductById(product.id)
              ? cartStore.getProductById(product.id).count
              : productCount
          }}</span>
          <span
            class="cursor-pointer"
            @click="
              cartStore.getProductById(product.id)
                ? cartStore.plusCount(product.id)
                : productCount++
            "
            >+</span
          >
        </div>

        <button
          class="bg-red-700 p-2 px-6 text-white rounded-md"
          :class="{
            'bg-red-700 hover:bg-black': !cartStore.getProductById(product.id),
            'bg-red-500 cursor-not-allowed': cartStore.getProductById(
              product.id
            ),
          }"
          @click="cartStore.addToCart({ ...product, count: productCount })"
          :disabled="cartStore.getProductById(product.id)"
        >
          {{ cartStore.getProductById(product.id) ? "ADDED" : "ADD TO CART" }}
        </button>
      </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "../store/index";

const cartStore = useCartStore();
let productCount = ref(1);
defineProps({
  product: {
    type: Object,
    default: {},
  },
  closeQuickView: {
    type: Function,
  },
});
</script>
