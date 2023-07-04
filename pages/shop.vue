<template>
  <div class="md:p-20 py-10">
    <div class="m-4 text-gray-600">
      <NuxtLink class="mr-1 hover:text-black"  to="/">Home</NuxtLink>/<span class="ml-1">Shop</span>
    </div>
    <div class="m-4">
      <Listbox as="div" v-model="selected" @click="handleFilter">
        <div class="relative mt-2">
          <ListboxButton
            class="relative md:w-1/4 w-1/2 cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-red-700 sm:text-sm sm:leading-6"
          >
            <span class="flex items-center">
              <span class="ml-3 block truncate">{{ selected.name }}</span>
            </span>
            <span
              class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2"
            >
              <ChevronUpDownIcon
                class="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </ListboxButton>

          <transition
            leave-active-class="transition ease-in duration-100"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <ListboxOptions
              class="absolute z-10 mt-1 max-h-56 md:w-1/4 w-1/2 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            >
              <ListboxOption
                as="template"
                v-for="filter in filters"
                :key="filter.id"
                :value="filter"
                v-slot="{ active, selected }"
              >
                <li
                  :class="[
                    active ? 'bg-red-700 text-white' : 'text-gray-900',
                    'relative cursor-default select-none py-2 pl-3 pr-9',
                  ]"
                >
                  <div class="flex items-center">
                    <span
                      :class="[
                        selected ? 'font-semibold' : 'font-normal',
                        'ml-3 block truncate',
                      ]"
                      >{{ filter.name }}</span
                    >
                  </div>

                  <span
                    v-if="selected"
                    :class="[
                      active ? 'text-white' : 'text-red-700',
                      'absolute inset-y-0 right-0 flex items-center pr-4',
                    ]"
                  >
                    <CheckIcon class="h-5 w-5" aria-hidden="true" />
                  </span>
                </li>
              </ListboxOption>
            </ListboxOptions>
          </transition>
        </div>
      </Listbox>
    </div>

    <div class="grid grid-cols-12 gap-2 m-4">
      <ProductCard
        :product="product"
        v-for="(product, i) in curProducts"
        :key="i"
      />
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from "../store/index";
import { ref } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";

const filters = [
  {
    id: 1,
    name: "Default sorting",
  },
  {
    id: 2,
    name: "Sort by average rating",
  },
  {
    id: 3,
    name: "Sort by price: low to high",
  },
  {
    id: 4,
    name: "Sort by price: high to low",
  },
];

const selected = ref(filters[0]);
const store = useProductStore();
let curProducts = ref(store.products);

function handleFilter() {
  switch (selected.value.id) {
    case 1:
      curProducts.value = curProducts.value.sort((a, b) => a.id - b.id);
      break;
    case 2:
      curProducts.value = curProducts.value.sort((a, b) => b.rate - a.rate);
      break;
    case 3:
      curProducts.value = curProducts.value.sort((a, b) => a.price - b.price);
      break;
    case 4:
      curProducts.value = curProducts.value.sort((a, b) => b.price - a.price);
      break;
    default:
      curProducts.value = curProducts.value.sort((a, b) => a.id - b.id);
      break;
  }
}

</script>
