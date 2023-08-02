<template>
  <div class="m-5 flex flex-wrap">
    <div class="md:w-2/5 w-full md:p-10">
      <h1 class="md:text-[36px] text-2xl font-semibold">Items:</h1>
      <ul v-if="saleProducts.length > 0">
        <li
          v-for="(saleProduct, i) in saleProducts"
          :key="saleProduct.id"
          class="border border-red-700 my-3 p-2 rounded-sm"
        >
          <h2 class="font-bold">{{ i + 1 + ") " + saleProduct.name }}</h2>
          <p class="text-gray-600">count: {{ saleProduct.count }}</p>
          <p class="text-gray-600">price:{{ saleProduct.price }}</p>
        </li>
      </ul>

      <div class="mt-6 flex flex-col items-center justify-center gap-x-6">
        <p class="text-gray-600 font-bold text-xl">Total: ${{ sum }}</p>
        <PrimaryBtn
          type="submit"
          @click.prevent="handleBuy"
          class="rounded-md bg-red-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          content="buy"
        />
      </div>
    </div>
    <div class="md:w-3/5 w-full md:p-10">
      <p class="md:text-[36px] text-2xl md:mt-1 mt-5 font-semibold leading-6">
        Tell me about your information
      </p>
      <form>
        <div class="space-y-12">
          <div class="flex flex-wrap">
            <div class="mt-5 w-1/2 px-2">
              <div class="sm:col-span-3">
                <label
                  for="name"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >name <span class="text-red-700 font-bold">*</span></label
                >
                <div class="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-700 focus:outline-0 sm:text-sm sm:leading-6 p-2"
                    v-model="costumerInfo.name"
                  />
                </div>
                <p class="text-red-700 text-sm font-semibold" v-if="nameError">
                  name is required
                </p>
              </div>
            </div>

            <div class="mt-5 w-1/2 px-2">
              <div class="sm:col-span-3">
                <label
                  for="phone-number"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >phone number
                  <span class="text-red-700 font-bold">*</span></label
                >
                <div class="mt-2">
                  <input
                    type="text"
                    name="phone-number"
                    id="phone-number"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-700 focus:outline-0 sm:text-sm sm:leading-6 p-2"
                    v-model="costumerInfo.phone"
                  />
                </div>
                <p class="text-red-700 text-sm font-semibold" v-if="phoneError">
                  phone is required
                </p>
              </div>
            </div>

            <div class="mt-5 w-full px-2">
              <div class="sm:col-span-3">
                <label
                  for="address"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >address <span class="text-red-700 font-bold">*</span></label
                >
                <div class="mt-2">
                  <textarea
                    type="text"
                    name="address"
                    id="address"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-700 focus:outline-0 sm:text-sm sm:leading-6 p-2"
                    v-model="costumerInfo.address"
                  />
                </div>
                <p
                  class="text-red-700 text-sm font-semibold"
                  v-if="addressError"
                >
                  address is required
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "../store/index";

const store = useCartStore();
let saleProducts = ref(store.cartProducts);

let sum = ref(0);

let nameError = ref(false);
let phoneError = ref(false);
let addressError = ref(false);

let costumerInfo = ref({
  name: "",
  phone: "",
  address: "",
});

let router = useRouter();

function handleBuy() {
  nameError.value = costumerInfo.value.name.length === 0 ? true : false;
  phoneError.value = costumerInfo.value.phone.length === 0 ? true : false;
  addressError.value = costumerInfo.value.address.length === 0 ? true : false;
  
  if (!nameError.value && !phoneError.value && !addressError.value) {
    localStorage.removeItem("cart");
    router.push("./");
  }
}

onMounted(() => {
  store.closeCart();
  saleProducts.value = store.cartProducts;
  sum.value = store.calSum();
  store.clearCart();
});
</script>
