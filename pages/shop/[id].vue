<template>
  <div
    class="lg:w-4/5 w-full mx-auto md:p-10 p-5 flex flex-wrap justify-between"
  >
    <div class="relative md:w-6/12 w-full">
      <img :src="product.src" class="w-full h-[500px]" />
      <div
        class="absolute top-1 left-2 shadow-md py-1 px-2 bg-white rounded-2xl text-gray-500"
        v-if="product.discount"
      >
        sale!
      </div>
    </div>
    <div class="md:w-6/12 w-full md:pl-10">
      <NuxtLink
        to="/shop/electric-scooters"
        class="text-red-700 font-semibold"
        v-if="product.type == 'scooter'"
        >Electric Scooters</NuxtLink
      >
      <NuxtLink
        to="/shop/accessories"
        class="text-red-700"
        v-if="product.type == 'lock'"
        >Accessories</NuxtLink
      >
      <h1 class="text-3xl font-bold mt-3">{{ product.name }}</h1>
      <p class="text-2xl text-black mt-5" v-if="!product.discount">
        ${{ product.price + ".00" }}
        <span class="text-base text-gray-500"> & Free Shipping</span>
      </p>
      <p class="text-2xl text-black mt-5 font-semibold" v-if="product.discount">
        <span class="text-gray-400" style="text-decoration: line-through"
          >${{ product.realPrice + ".00" }}</span
        >
        ${{ product.price + ".00" }}
        <span class="text-base text-gray-500"> & Free Shipping</span>
      </p>

      <p class="text-gray-600 mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis.
      </p>

      <div class="mt-5 flex">
        <div
          class="border p-2 flex justify-between w-24 h-8 text-gray-600"
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
          class="bg-red-700 p-2 px-6 text-white rounded-md ml-8"
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

      <ul class="mt-5">
        <li class="flex">
          <svg
            class="w-[15px] h-[15px] text-gray-600 self-center mr-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
            ></path>
          </svg>
          <span>No-Risk Money Back Guarantee!</span>
        </li>

        <li class="flex">
          <svg
            class="w-[15px] h-[15px] text-gray-600 self-center mr-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
            ></path>
          </svg>
          <span>No Hassle Refunds</span>
        </li>
        <li class="flex">
          <svg
            class="w-[15px] h-[15px] text-gray-600 self-center mr-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
            ></path>
          </svg>
          <span>Secure Payments</span>
        </li>
      </ul>
    </div>

    <div class="w-full">
      <div>
        <button
          class="text-gray-600 mt-10"
          :class="{ 'border-t-2 border-red-700 text-black': desOpen }"
          @click="desOpen = true"
        >
          Description
        </button>
        <button
          class="text-gray-600 ml-5"
          :class="{ 'border-t-2 border-red-700': !desOpen }"
          @click="desOpen = false"
        >
          Reviews
        </button>
      </div>
      <div class="mt-10" v-if="desOpen">
        <h1 class="text-3xl font-bold mb-10">Description</h1>
        <p class="text-lg font-bold text-gray-700 mb-4">{{ product.name }}</p>
        <p class="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ac massa eget urna tempor vehicula vel id nisi. Pellentesque sed felis
          auctor, molestie lectus vitae, elementum orci. In et nunc consequat,
          semper tellus eget, euismod quam.
        </p>

        <p class="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ac massa eget urna tempor vehicula vel id nisi. Pellentesque sed felis
          auctor, molestie lectus vitae, elementum orci. In et nunc consequat,
          semper tellus eget, euismod quam.
        </p>
      </div>

      <div class="mt-10" v-if="!desOpen">
        <form class="border-2 p-6">
          <h2 class="text-gray-600 text-xl">
            Be the first to review “{{ product.name }}”
          </h2>
          <p class="text-gray-600">
            Your email address will not be published. Required fields are marked
            *
          </p>
          <div class="flex mt-5">
            <span class="text-lg text-gray-700">Your rating *</span>
            <div class="flex gap-[2px] self-center ml-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                v-for="i in formRate"
                :key="i"
                class="text-yellow-500"
                @mouseover="handleRate(i, true)"
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
                v-for="i in 5 - formRate"
                :key="i"
                @mouseover="handleRate(i, false)"
              >
                <path
                  d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                />
              </svg>
            </div>
          </div>
          <div class="mt-5">
            <span class="text-lg text-gray-700">Your review *</span>
            <textarea class="border w-full h-[70px]"></textarea>
          </div>
          <div class="mt-5">
            <span class="text-lg text-gray-700">Name *</span>
            <input class="border w-full py-3" type="text" />
          </div>
          <div class="mt-5">
            <span class="text-lg text-gray-700">Email *</span>
            <input class="border w-full py-3" type="email" />
          </div>

          <PrimaryBtn content="SUBMIT" class="mt-5"/>
        </form>
      </div>
    </div>

    <div class="pt-10 my-10 border-t w-full border-red-700">
      <h1 class="lg:text-4xl text-3xl font-bold mb-5">Related products</h1>
      <div class="grid grid-cols-12 gap-2">
        <ProductCard
          :product="pro"
          v-for="(pro, i) in store.products
            .filter((p) => p.type == product.type)
            .slice(1, 5)"
          :key="i"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from "../../store/index";
import { useCartStore } from "../../store/index";
const route = useRoute();
const store = useProductStore();
const cartStore = useCartStore();
const product = store.getProductById(route.params.id);
let productCount = ref(1);
const desOpen = ref(true);
let formRate = ref(0);

function handleRate(i, isYellow) {
  !isYellow ? (formRate.value += i) : (formRate.value = i);
}
</script>
