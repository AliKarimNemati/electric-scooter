<template>
  <div
    class="md:col-span-3 col-span-6 hover:outline-1 hover:outline-red-700 hover:outline-dotted"
    id="card"
  >
    <div class="relative">
      <img :src="product.src" alt="product.name" />
      <div
        class="absolute top-1 left-2 shadow-md py-1 px-2 bg-white rounded-2xl text-gray-500"
        v-if="product.discount"
      >
        sale!
      </div>

      <div class="absolute top-1 right-2 hidden" id="card-top-items">
        <ul>
          <li class="cursor-pointer flex">
            <span
              class="text-white h-6 text-xs mt-2 mr-2 hidden"
              style="align-self: center"
              ><span class="bg-black p-1">Add to cart</span
              ><span id="triangle-right"></span
            ></span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="ast-basket-icon-svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="826 826 140 140"
              enable-background="new 826 826 140 140"
              xml:space="preserve"
              class="text-gray-600 bg-white p-[6px] shadow-md rounded-full mt-2"
              @click="
                store.addToCart(product);
                showAlert();
              "
            >
              <path
                d="M955.418,887.512c2.344,0,4.343,0.829,6.002,2.486c1.657,1.659,2.486,3.659,2.486,6.002c0,2.343-0.829,4.344-2.486,6.001  c-1.659,1.658-3.658,2.487-6.002,2.487h-0.994l-7.627,43.9c-0.354,2.033-1.326,3.713-2.917,5.04  c-1.593,1.326-3.405,1.989-5.438,1.989h-84.883c-2.033,0-3.846-0.663-5.438-1.989c-1.591-1.327-2.564-3.007-2.918-5.04l-7.626-43.9  h-0.995c-2.343,0-4.344-0.829-6.001-2.487c-1.658-1.657-2.487-3.658-2.487-6.001c0-2.343,0.829-4.343,2.487-6.002  c1.658-1.658,3.659-2.486,6.001-2.486H955.418z M860.256,940.563c1.149-0.089,2.111-0.585,2.885-1.491  c0.773-0.907,1.116-1.936,1.028-3.085l-2.122-27.586c-0.088-1.15-0.585-2.111-1.492-2.885c-0.906-0.774-1.934-1.117-3.083-1.028  c-1.149,0.088-2.111,0.586-2.885,1.492s-1.116,1.934-1.028,3.083l2.122,27.587c0.088,1.105,0.542,2.034,1.359,2.785  c0.818,0.752,1.78,1.128,2.885,1.128H860.256z M887.512,936.319v-27.587c0-1.149-0.42-2.144-1.26-2.984  c-0.84-0.84-1.834-1.26-2.984-1.26s-2.144,0.42-2.984,1.26c-0.84,0.841-1.26,1.835-1.26,2.984v27.587c0,1.149,0.42,2.145,1.26,2.984  c0.84,0.84,1.835,1.26,2.984,1.26s2.144-0.42,2.984-1.26C887.092,938.464,887.512,937.469,887.512,936.319z M912.977,936.319  v-27.587c0-1.149-0.42-2.144-1.26-2.984c-0.841-0.84-1.835-1.26-2.984-1.26s-2.145,0.42-2.984,1.26  c-0.84,0.841-1.26,1.835-1.26,2.984v27.587c0,1.149,0.42,2.145,1.26,2.984s1.835,1.26,2.984,1.26s2.144-0.42,2.984-1.26  C912.557,938.464,912.977,937.469,912.977,936.319z M936.319,936.65l2.122-27.587c0.088-1.149-0.254-2.177-1.027-3.083  s-1.735-1.404-2.885-1.492c-1.15-0.089-2.178,0.254-3.084,1.028c-0.906,0.773-1.404,1.734-1.492,2.885l-2.122,27.586  c-0.088,1.149,0.254,2.178,1.027,3.085c0.774,0.906,1.736,1.402,2.885,1.491h0.332c1.105,0,2.066-0.376,2.885-1.128  C935.777,938.685,936.23,937.756,936.319,936.65z M859.66,855.946l-6.167,27.322h-8.753l6.698-29.245  c0.84-3.89,2.807-7.062,5.902-9.516c3.095-2.453,6.632-3.68,10.611-3.68h11.074c0-1.149,0.42-2.144,1.26-2.984  c0.84-0.84,1.835-1.26,2.984-1.26h25.465c1.149,0,2.144,0.42,2.984,1.26c0.84,0.84,1.26,1.834,1.26,2.984h11.074  c3.979,0,7.516,1.227,10.611,3.68c3.094,2.454,5.062,5.626,5.901,9.516l6.697,29.245h-8.753l-6.168-27.322  c-0.486-1.945-1.491-3.537-3.017-4.774c-1.525-1.238-3.282-1.857-5.272-1.857h-11.074c0,1.15-0.42,2.144-1.26,2.984  c-0.841,0.84-1.835,1.26-2.984,1.26h-25.465c-1.149,0-2.144-0.42-2.984-1.26c-0.84-0.84-1.26-1.834-1.26-2.984h-11.074  c-1.99,0-3.747,0.619-5.272,1.857C861.152,852.409,860.146,854,859.66,855.946z"
              ></path>
            </svg>
          </li>
          <li class="cursor-pointer flex" @click="isQuickView = true">
            <span
              class="text-white h-6 text-xs mt-2 mr-2 hidden"
              style="align-self: center"
              ><span class="bg-black p-1">Quick View</span
              ><span id="triangle-right"></span
            ></span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              class="text-gray-600 bg-white p-[6px] shadow-md rounded-full mt-2"
              width="30"
              height="30"
            >
              <path
                d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
              ></path>
            </svg>
          </li>
        </ul>
      </div>
      <div class="p-3">
        <div class="flex gap-[2px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            v-for="i in product.rate"
            :key="i"
            class="text-yellow-500"
          >
            <path
              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-star text-gray-300"
            viewBox="0 0 16 16"
            v-for="i in 5 - product.rate"
            :key="i"
          >
            <path
              d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
            />
          </svg>
        </div>
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
    </div>
  </div>
  <productQuickView
    :product="product"
    :closeQuickView="closeQuickView"
    v-if="isQuickView"
  />
</template>

<script setup lang="ts">
import { useCartStore } from "../store/index";
import  {useShowAlert} from "../composable/useShowAlert"
const {showAlert} = useShowAlert();

const store = useCartStore();


let isQuickView = ref(false);

function closeQuickView() {
  isQuickView.value = false;
}



defineProps({
  product: {
    type: Object,
    default: {},
  },
});
</script>