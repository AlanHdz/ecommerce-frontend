<template>
  
  <header class="py-4 shadow-sm bg-white">
    <div class="container flex items-center justify-between">
      <!-- Logo -->
      <a href="#">
        <img :src="imageLogo" class="w-32">
      </a>
      <!-- Search bar -->
      <div class="flex w-full max-w-xl relative">
        <span class="absolute left-4 top-3 text-lg text-gray-400">
          <i class="fas fa-search"></i>
        </span>
        <input type="text" class="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none" placeholder="Search" />
        <button class="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition">Search</button>
      </div>

      <!-- Icons -->

      <div class="flex items-center space-x-4">
        <a href="" class="text-center text-gray-700 hover:text-primary transition relative">
          <div class="text-2xl">
            <i class="far fa-heart"></i>
          </div>
          <div class="text-xs leading-3">Wish List</div>
          <span class="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">8</span>
        </a>
        <a href="" class="text-center text-gray-700 hover:text-primary transition relative">
          <div class="text-2xl">
            <i class="fas fa-shopping-bag"></i>
          </div>
          <div class="text-xs leading-3">Cart</div>
          <span class="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">8</span>
        </a>
        <a href="" class="text-center text-gray-700 hover:text-primary transition relative">
          <div class="text-2xl">
            <i class="far fa-user"></i>
          </div>
          <div class="text-xs leading-3">
            Account
          </div>
          <span class="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">8</span>
        </a>
      </div>

    </div>
  </header>

  <!-- navbar -->
  <nav class="bg-gray-800">
    <div class="container flex">
      
      <!-- All categories -->
      <div class="px-8 py-4 bg-primary flex items-center cursor-pointer relative group">
        <span class="text-white">
          <i class="fas fa-bars"></i>
        </span>
        
        <span class="capitalize ml-2 text-white">All categories</span>
        
        <div class="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
          <a href="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
            <i class="fa-solid fa-couch w-5 h-5 object-contain text-primary"></i>
            <span class="ml-6 text-gray-600 text-sm">Sofa</span>
          </a>
          <a href="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
            <i class="fa-solid fa-briefcase w-5 h-5 object-contain text-primary"></i>
            <span class="ml-6 text-gray-600 text-sm">Office</span>
          </a>
          <a href="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
            <i class="fa-solid fa-couch w-5 h-5 object-contain text-primary"></i>
            <span class="ml-6 text-gray-600 text-sm">Outdoor</span>
          </a>
          <a href="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
            <i class="fa-solid fa-couch w-5 h-5 object-contain text-primary"></i>
            <span class="ml-6 text-gray-600 text-sm">Mattres</span>
          </a>
          <a href="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
            <i class="fa-solid fa-couch w-5 h-5 object-contain text-primary"></i>
            <span class="ml-6 text-gray-600 text-sm">Dinning</span>
          </a>
        </div>

      </div>
      <!-- All categories end -->

      <!-- Navbar Links -->
      <div class="flex items-center justify-between flex-grow pl-12">
        <div class="flex items-center space-x-6 capitalize">
          <a href="#" class="text-gray-200 hover:text-white transition">Home</a>
          <a href="#" class="text-gray-200 hover:text-white transition">Shop</a>
          <a href="#" class="text-gray-200 hover:text-white transition">About us</a>
          <a href="#" class="text-gray-200 hover:text-white transition">Contact us</a>
        </div>
        <router-link :to="{ name: 'login' }" class="text-gray-200 hover:text-white transition">Login/Register</router-link>
      </div>
      <!-- End Navbar links -->
    </div>
  </nav>
  <!-- End navbar -->
</template>

<script setup>
import { RouterLink } from 'vue-router'
import imageLogo from '@/assets/images/logo.png'

</script>