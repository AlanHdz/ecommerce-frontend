<template>
  <div class="bg-cover bg-no-repeat bg-center py-36" :style="`background-image: url(${imageBanner});`">
    <div class="container z-index">
      <h1 class="text-6xl text-gray-800 font-medium mb-4 capitalize">
        Best collection for <br> home decoration
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quia tempore maiores! <br>
        Explicabo distinctio excepturi necessitatibus ex.
      </p>
      <div class="mt-12">
        <a href="#" class="bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md hover:bg-transparent hover:text-primary">Shop Now</a>
      </div>
    </div>
  </div>
  <!-- Feature section -->
  <div class="container py-16">
    <div class="w-10/12 grid grid-cols-3 gap-6 mx-auto justify-center">
      <div class="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
        <i class="fa-solid fa-truck w-12 h-12 object-contain text-primary text-4xl"></i>
        <div>
          <h4 class="font-medium capitalize text-lg">Free shipping</h4>
          <p class="text-gray-500 text-sm">Order over $200</p>
        </div>
      </div>
      <div class="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
        <i class="fa-solid fa-truck w-12 h-12 object-contain text-primary text-4xl"></i>
        <div>
          <h4 class="font-medium capitalize text-lg">Free shipping</h4>
          <p class="text-gray-500 text-sm">Order over $200</p>
        </div>
      </div>
      <div class="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
        <i class="fa-solid fa-truck w-12 h-12 object-contain text-primary text-4xl"></i>
        <div>
          <h4 class="font-medium capitalize text-lg">Free shipping</h4>
          <p class="text-gray-500 text-sm">Order over $200</p>
        </div>
      </div>
    </div>
  </div>
  <!-- Feature section end -->

  <!-- Categories section -->
  <div class="container py-16">
    <h2 class="text-3xl font-medium text-gray-800 uppercase mb-6">Shop by category</h2>
    <div class="grid grid-cols-3 gap-3">
      
      <!-- Single category -->
      <div class="relative rounded-sm overflow-hidden">
        <img :src="imageBedroom" alt="" class="w-full">
        <a href="#" class="absolute inset-0 flex items-center justify-center text-xl font-roboto font-medium text-white">Beedroom</a>
      </div>
      <!-- Single category end -->

      <!-- Single category -->
      <div class="relative rounded-sm overflow-hidden">
        <img :src="imageDinings" alt="" class="w-full">
        <a href="#" class="absolute inset-0 flex items-center justify-center text-xl font-roboto font-medium text-white">Dinings</a>
      </div>
      <!-- Single category end -->
      
      <!-- Single category -->
      <div class="relative rounded-sm overflow-hidden">
        <img :src="imageMattres" alt="" class="w-full">
        <a href="#" class="absolute inset-0 flex items-center justify-center text-xl font-roboto font-medium text-white">Mattress</a>
      </div>
      <!-- Single category end -->
      
      <!-- Single category -->
      <div class="relative rounded-sm overflow-hidden">
        <img :src="imageOffice" alt="" class="w-full">
        <a href="#" class="absolute inset-0 flex items-center justify-center text-xl font-roboto font-medium text-white">Office</a>
      </div>
      <!-- Single category end -->
      
      <!-- Single category -->
      <div class="relative rounded-sm overflow-hidden">
        <img :src="imageOutdoor" alt="" class="w-full">
        <a href="#" class="absolute inset-0 flex items-center justify-center text-xl font-roboto font-medium text-white">Outdoor</a>
      </div>
      <!-- Single category end -->
      
      <!-- Single category -->
      <div class="relative rounded-sm overflow-hidden">
        <img :src="imageSofa" alt="" class="w-full">
        <a href="#" class="absolute inset-0 flex items-center justify-center text-xl font-roboto font-medium text-white">Sofa</a>
      </div>
      <!-- Single category end -->
    
    </div>
  </div>
  <!-- Categories end section -->

  <!-- Top new -->
  <div class="container pb-16">
    <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">Top new arrival</h2>
    <div class="grid grid-cols-4 gap-6">
      <Product />
    </div>
  </div>
  <!-- Top new end -->

  <!-- Product wrapper -->
  <!-- <div class="container pb-16">
    <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">Recomendado para ti</h2>
    <div class="grid grid-cols-4 gap-6">
      <Product />
    </div>
  </div> -->
  <!-- Product werapper end -->

  <footer class="bg-white pt-16 pb-12 border-t border-gray-100">
    <div class="container grid grid-cols-3">
      <!-- footer text -->
      <div class="col-span-1 space-y-8">
        <img :src="imageLogo" class="w-28" />
        <p class="text-gray-600 mt-1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
      </div>
      <!-- footer text end -->
      
      <!-- footer text -->
      <div class="col-span-2 grid grid-cols-2 gap-8">
        <div class="grid grid-cols-2 gap-8">
          <div>
            <h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider">Solutions</h3>
            <div class="mt-4 space-y-4">
              <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">Marketing</a>
              <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">Analytics</a>
              <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">Commerce</a>
              <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">Insights</a>
            </div>
          </div>
          <div>
            <h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider">Support</h3>
            <div class="mt-4 space-y-4">
              <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">Pricing</a>
              <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">Documentation</a>
              <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">Guides</a>
              <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">API status</a>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-8">
          <div>
            <h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider">Solutions</h3>
            <div class="mt-4 space-y-4">
              <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">Marketing</a>
              <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">Analytics</a>
              <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">Commerce</a>
              <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">Insights</a>
            </div>
          </div>
          <div>
            <h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider">Support</h3>
            <div class="mt-4 space-y-4">
              <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">Pricing</a>
              <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">Documentation</a>
              <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">Guides</a>
              <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">API status</a>
            </div>
          </div>
        </div>   
      </div>
      <!-- footer text end -->
    </div>
  </footer>
</template>

<script setup>
import Product from '../components/Product.vue'
import imageBanner from '@/assets/images/furniture.jpg'
import imageBedroom from '@/assets/images/categories/bedroom.jpg'
import imageDinings from '@/assets/images/categories/dinnings.jpg'
import imageMattres from '@/assets/images/categories/mattress.jpg'
import imageOffice from '@/assets/images/categories/office.jpg'
import imageOutdoor from '@/assets/images/categories/outdoor.jpg'
import imageSofa from '@/assets/images/categories/sofa.jpg'
import imageLogo from '@/assets/images/logo.png'




</script>