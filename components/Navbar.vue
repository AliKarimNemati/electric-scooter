<template>
  <header class="bg-white">
    <nav
      class="mx-auto flex max-w-full items-center justify-between p-4 px-7 lg:px-10 border border-b-2 border-gray-50"
      aria-label="Global"
    >
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white bg-red-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <PopoverGroup class="hidden lg:flex lg:gap-x-8">
        <NuxtLink
          to="/shop"
          class="text-sm font-semibold leading-6 text-gray-900 hover:text-red-700"
          >Shop All</NuxtLink
        >
        <NuxtLink
          to="/shop/electric-scooters"
          class="text-sm font-semibold leading-6 text-gray-900 hover:text-red-700"
          >Electric Scooters</NuxtLink
        >
        <NuxtLink
          to="/shop/accessories"
          class="text-sm font-semibold leading-6 text-gray-900 hover:text-red-700"
          >Accessories</NuxtLink
        >
        <NuxtLink
          to="/about"
          class="text-sm font-semibold leading-6 text-gray-900 hover:text-red-700"
          >About</NuxtLink
        >
        <NuxtLink
          to="/contact"
          class="text-sm font-semibold leading-6 text-gray-900 hover:text-red-700"
          >Contact</NuxtLink
        >
      </PopoverGroup>

      <div class="flex lg:flex-1 justify-center">
        <NuxtLink to="/" class="-m-1.5 p-1.5">
          <img class="lg:h-12 h-8 w-auto" src="/img/logo-regular.png" alt="" />
        </NuxtLink>
      </div>

      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <div class="w-2/5 mr-2">
          <input
            type="search"
            class="border rounded-sm h-10 border-gray-300 w-full p-2 py-3 outline-none focus:border-gray-500"
            placeholder="Search products…"
            list="searchResult"
            v-model="isSearching"
          />
          <datalist
            id="searchResult"
            class="w-full"
            v-if="isSearching.length > 0"
          >
            <option
              v-for="product in productStore.products"
              :key="product.id"
              :value="product.name"
            />
          </datalist>
        </div>
        <NuxtLink
          class="bg-red-700 w-8 text-white rounded-md hover:bg-black hover:text-white h-10"
          :to="isSearching ? '/search/' + isSearching : '/'"
        >
          <svg
            aria-hidden="true"
            role="img"
            focusable="false"
            class="text-white mx-auto h-full"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <path d="M6 15l5-5-5-5 1-2 7 7-7 7z"></path>
          </svg>
        </NuxtLink>
        <!-- user info btn  -->
        <button v-if="false">
          <svg
            version="1.1"
            class="w-4 ml-5"
            :class="{ 'mt-[12px]': store.getCountOfCart() != 0 }"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 120 120"
            enable-background="new 0 0 120 120"
            xml:space="preserve"
          >
            <path
              d="M84.6,62c-14.1,12.3-35.1,12.3-49.2,0C16.1,71.4,3.8,91,3.8,112.5c0,2.1,1.7,3.8,3.8,3.8h105c2.1,0,3.8-1.7,3.8-3.8 C116.2,91,103.9,71.4,84.6,62z"
            ></path>
            <circle cx="60" cy="33.8" r="30"></circle>
          </svg>
        </button>
        <!-- login & signup btn -->
        <div class="self-center">
          <NuxtLink to="/log-in" class="ml-5 font-semibold hover:text-red-700"
            >Log in</NuxtLink
          >
          <NuxtLink
            to="/sign-up"
            class="ml-5 font-semibold border-2 border-red-700 hover:bg-red-700 hover:text-white py-1 px-2 rounded-md"
            >Sign up</NuxtLink
          >
        </div>
      </div>
      <button class="text-red-700" @click="store.openCart()">
        <p
          class="ml-8 bg-red-700 text-white w-[18px] h-[18px] rounded-full text-xs font-bold mb-[-6px]"
          :class="{ hidden: store.getCountOfCart() == 0 }"
        >
          {{ store.getCountOfCart() }}
        </p>
        <svg
          class="ml-5"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="ast-basket-icon-svg"
          x="0px"
          y="0px"
          width="18"
          height="18"
          viewBox="826 826 140 140"
          enable-background="new 826 826 140 140"
          xml:space="preserve"
        >
          <path
            d="M955.418,887.512c2.344,0,4.343,0.829,6.002,2.486c1.657,1.659,2.486,3.659,2.486,6.002c0,2.343-0.829,4.344-2.486,6.001  c-1.659,1.658-3.658,2.487-6.002,2.487h-0.994l-7.627,43.9c-0.354,2.033-1.326,3.713-2.917,5.04  c-1.593,1.326-3.405,1.989-5.438,1.989h-84.883c-2.033,0-3.846-0.663-5.438-1.989c-1.591-1.327-2.564-3.007-2.918-5.04l-7.626-43.9  h-0.995c-2.343,0-4.344-0.829-6.001-2.487c-1.658-1.657-2.487-3.658-2.487-6.001c0-2.343,0.829-4.343,2.487-6.002  c1.658-1.658,3.659-2.486,6.001-2.486H955.418z M860.256,940.563c1.149-0.089,2.111-0.585,2.885-1.491  c0.773-0.907,1.116-1.936,1.028-3.085l-2.122-27.586c-0.088-1.15-0.585-2.111-1.492-2.885c-0.906-0.774-1.934-1.117-3.083-1.028  c-1.149,0.088-2.111,0.586-2.885,1.492s-1.116,1.934-1.028,3.083l2.122,27.587c0.088,1.105,0.542,2.034,1.359,2.785  c0.818,0.752,1.78,1.128,2.885,1.128H860.256z M887.512,936.319v-27.587c0-1.149-0.42-2.144-1.26-2.984  c-0.84-0.84-1.834-1.26-2.984-1.26s-2.144,0.42-2.984,1.26c-0.84,0.841-1.26,1.835-1.26,2.984v27.587c0,1.149,0.42,2.145,1.26,2.984  c0.84,0.84,1.835,1.26,2.984,1.26s2.144-0.42,2.984-1.26C887.092,938.464,887.512,937.469,887.512,936.319z M912.977,936.319  v-27.587c0-1.149-0.42-2.144-1.26-2.984c-0.841-0.84-1.835-1.26-2.984-1.26s-2.145,0.42-2.984,1.26  c-0.84,0.841-1.26,1.835-1.26,2.984v27.587c0,1.149,0.42,2.145,1.26,2.984s1.835,1.26,2.984,1.26s2.144-0.42,2.984-1.26  C912.557,938.464,912.977,937.469,912.977,936.319z M936.319,936.65l2.122-27.587c0.088-1.149-0.254-2.177-1.027-3.083  s-1.735-1.404-2.885-1.492c-1.15-0.089-2.178,0.254-3.084,1.028c-0.906,0.773-1.404,1.734-1.492,2.885l-2.122,27.586  c-0.088,1.149,0.254,2.178,1.027,3.085c0.774,0.906,1.736,1.402,2.885,1.491h0.332c1.105,0,2.066-0.376,2.885-1.128  C935.777,938.685,936.23,937.756,936.319,936.65z M859.66,855.946l-6.167,27.322h-8.753l6.698-29.245  c0.84-3.89,2.807-7.062,5.902-9.516c3.095-2.453,6.632-3.68,10.611-3.68h11.074c0-1.149,0.42-2.144,1.26-2.984  c0.84-0.84,1.835-1.26,2.984-1.26h25.465c1.149,0,2.144,0.42,2.984,1.26c0.84,0.84,1.26,1.834,1.26,2.984h11.074  c3.979,0,7.516,1.227,10.611,3.68c3.094,2.454,5.062,5.626,5.901,9.516l6.697,29.245h-8.753l-6.168-27.322  c-0.486-1.945-1.491-3.537-3.017-4.774c-1.525-1.238-3.282-1.857-5.272-1.857h-11.074c0,1.15-0.42,2.144-1.26,2.984  c-0.841,0.84-1.835,1.26-2.984,1.26h-25.465c-1.149,0-2.144-0.42-2.984-1.26c-0.84-0.84-1.26-1.834-1.26-2.984h-11.074  c-1.99,0-3.747,0.619-5.272,1.857C861.152,852.409,860.146,854,859.66,855.946z"
          ></path>
        </svg>
      </button>
    </nav>

    <!-- mobile mode -->
    <Dialog
      as="div"
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-10 h-screen" />
      <DialogPanel
        class="fixed inset-y-0 w-full left-0 z-10 overflow-y-auto bg-white py-3 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex m-3 items-center justify-end">
          <button
            type="button"
            class="rounded-md text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="divide-y divide-gray-500/10">
            <!-- user info btn -->
            <button class="mb-5 w-full" v-if="false">
              <svg
                version="1.1"
                class="w-4 ml-5"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 120 120"
                enable-background="new 0 0 120 120"
                xml:space="preserve"
              >
                <path
                  d="M84.6,62c-14.1,12.3-35.1,12.3-49.2,0C16.1,71.4,3.8,91,3.8,112.5c0,2.1,1.7,3.8,3.8,3.8h105c2.1,0,3.8-1.7,3.8-3.8 C116.2,91,103.9,71.4,84.6,62z"
                ></path>
                <circle cx="60" cy="33.8" r="30"></circle>
              </svg>
            </button>

            <!-- login & signup btn -->
            <div class="self-center mb-5">
              <NuxtLink
                @click="mobileMenuOpen = false"
                to="/log-in"
                class="ml-5 font-semibold hover:text-red-700"
                >Log in</NuxtLink
              >
              <NuxtLink
                @click="mobileMenuOpen = false"
                to="/sign-up"
                class="ml-5 font-semibold border-2 border-red-700 hover:bg-red-700 hover:text-white py-1 px-2 rounded-md"
                >Sign up</NuxtLink
              >
            </div>
            <div class="flex">
              <input
                type="search"
                class="border ml-4 mr-2 rounded-sm h-10 border-gray-300 w-4/5 p-2 py-3 outline-none focus:border-gray-500"
                placeholder="Search products…"
                v-model="isSearching"
                list="searchResult"
              />

              <NuxtLink
                class="bg-red-700 w-8 h-10 text-white rounded-md hover:bg-black hover:text-white align-middle mb-2"
                :to="isSearching ? '/search/' + isSearching : '/'"
                @click="mobileMenuOpen = false"
              >
                <svg
                  aria-hidden="true"
                  role="img"
                  focusable="false"
                  class="text-white mx-auto h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <path d="M6 15l5-5-5-5 1-2 7 7-7 7z"></path>
                </svg>
              </NuxtLink>
            </div>
            <div class="space-y-2 my-6 bg-slate-100">
              <NuxtLink
                to="/shop"
                class="border-t-2 border-gray-200 block py-3 px-6 text-base font-semibold leading-7 text-gray-500 hover:bg-gray-50"
                @click="mobileMenuOpen = false"
                >Shop All</NuxtLink
              >
              <NuxtLink
                to="/shop/electric-scooters"
                class="border-t-2 border-gray-200 block py-3 px-6 text-base font-semibold leading-7 text-gray-500 hover:bg-gray-50"
                @click="mobileMenuOpen = false"
                >Electric Scooters</NuxtLink
              >
              <NuxtLink
                to="/shop/accessories"
                class="border-t-2 border-gray-200 block py-3 px-6 text-base font-semibold leading-7 text-gray-500 hover:bg-gray-50"
                @click="mobileMenuOpen = false"
                >Accessories</NuxtLink
              >
              <NuxtLink
                to="/about"
                class="border-t-2 border-gray-200 block py-3 px-6 text-base font-semibold leading-7 text-gray-500 hover:bg-gray-50"
                >About</NuxtLink
              >
              <NuxtLink
                to="/contact"
                class="border-y-2 border-gray-200 block py-3 px-6 text-base font-semibold leading-7 text-gray-500 hover:bg-gray-50"
                >Contact</NuxtLink
              >
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
    <Cart v-if="store.isCartOpen" />
  </header>
</template>

<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/vue/20/solid";

import { useCartStore, useProductStore } from "../store/index";
import { log } from "console";
const store = useCartStore();
const productStore = useProductStore();
let isSearching = ref("");

const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

const mobileMenuOpen = ref(false);
const cartOpen = ref(false);

onMounted(() => {
  store.setToCart();
});
</script>