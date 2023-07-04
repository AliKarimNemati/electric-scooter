<template>
  <Dialog as="div" @close="store.closeCart()" :open="store.isCartOpen">
    <div class="fixed inset-0 z-10 h-screen" />
    <DialogPanel
      class="fixed inset-y-0 lg:w-1/4 md:w-3/4 w-full right-0 z-10 bg-white py-3 sm:ring-1 sm:ring-gray-900/10"
    >
      <div class="flex m-3 items-center justify-between border-b pb-2">
        <p>Shopping Cart</p>
        <button
          type="button"
          class="rounded-md text-gray-700"
          @click="store.closeCart()"
        >
          <span class="sr-only">Close menu</span>
          <XMarkIcon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div v-if="store.getCountOfCart() != 0">
        <div class="overflow-y-auto md:h-[66vh] h-[73vh]">
          <ul class="flex-1">
            <li v-for="cartProduct in store.cartProducts" :key="cartProduct.id">
              <CartCard :product="cartProduct" />
            </li>
          </ul>
        </div>
        <div class="absolute bottom-0 w-full bg-white">
          <div class="border-y flex justify-between py-2 px-4">
            <span class="text-sm">Subtotal:</span>
            <span class="text-gray-600">${{ store.calSum() }}</span>
          </div>
          <div class="text-center">
            <button
              class="w-[95%] rounded-md bg-red-700 text-white hover:bg-black p-3 mt-3"
            >
              View cart
            </button>
            <button
              class="w-[95%] rounded-md bg-red-700 text-white hover:bg-black p-3 my-3"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>

      <div>
        <p class="text-center flex flex-col justify-center h-[80vh]">No products in the cart.</p>
        <div class="text-center">
          <PrimaryBtn content="Continue Shopping" />
        </div>
      </div>
    </DialogPanel>
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
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

import { useCartStore } from "../store/index";

const store = useCartStore();

const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];
</script>