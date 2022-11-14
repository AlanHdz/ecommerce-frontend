<template>
  <div class="bg-white shadow rounded overflow-hidden group">
    <!-- Product image -->
    <div class="relative">
      <img :src="imageProduct" class="w-full">
      <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
        <a href="#" class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
          <i class="fas fa-search"></i>
        </a>
        <a href="#" class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
          <i class="fas fa-heart"></i>
        </a>
      </div>
    </div>
    <!-- Product image end -->

    <!-- Product content -->
    <div class="pt-4 pb-3 px-4">
      <a href="#">
        <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Macbook Air</h4>
      </a>
      <div class="flex items-baseline mb-1 space-x-2 font-roboto">
        <p class="text-xl text-primary font-semibold">$45.00</p>
        <p class="text-sm text-gray-400 line-through">$55.00</p>
      </div>
    </div>
    <a href="#" class="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add to cart</a>
    <!-- Product content end -->
  </div>
</template>

<script setup>
import imageProduct from '@/assets/images/product.jpg'
</script>