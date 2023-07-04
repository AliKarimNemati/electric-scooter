<template>
  <div class="md:p-20 py-10">
    <div class="grid grid-cols-12 gap-2 m-4" v-if="curProducts.length !== 0">
      <ProductCard
        :product="product"
        v-for="(product, i) in curProducts"
        :key="i"
      />
    </div>

    <div v-if="curProducts.length == 0">
      <p class="text-gray-600 text-6xl text-center">Not Found</p>
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from "../../store/index";
const store = useProductStore();
let curProducts = ref(store.products);
const route = useRoute();
onMounted(() => {
  curProducts.value = curProducts.value.filter((p) =>
    p.name.toLocaleLowerCase().includes(route.params.id.toLocaleLowerCase())
  );
});
</script>
