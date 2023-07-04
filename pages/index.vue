<template>
  <div class="mt-32">
    <HeroSection />
    <div class="grid grid-cols-12 gap-2 m-4">
      <ProductCard
        :product="product"
        v-for="(product, i) in products"
        :key="i"
      />
    </div>
    <AboutUs />
    <WhyChooseUs />
  </div>
</template>

<script setup>
import { useProductStore } from "../store/index";

const { products } = useProductStore();


</script>

<style>
</style>