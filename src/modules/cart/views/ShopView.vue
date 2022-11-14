<template>
  <!-- Shop wrapper -->
  <div class="container grid grid-cols-4 gap-6 pt-4 pb-16 items-start mt-5">
    <!--- Sidebar -->
    <div class="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden">
      <div class="divide-y divide-gray-200 space-y-5">
        
        <!-- Category filter -->
        <div>
          <h3 class="text-xl text-gray-800 uppercase font-medium">Categories</h3>
          <div class="space-y-2">
            <!-- Single Category -->
            <div class="flex items-center">
              <input type="checkbox" id="cat-1" class="text-primary focus:ring-0">
              <label for="cat-1" class="text-gray-600 ml-3 cursor-pointer">Bedroom</label>
              <div class="ml-auto text-gray-600 text-sm">(15)</div>
            </div>
            <!-- Single category end -->
            <!-- Single Category -->
            <div class="flex items-center">
              <input type="checkbox" id="cat-1" class="text-primary focus:ring-0">
              <label for="cat-1" class="text-gray-600 ml-3 cursor-pointer">Sofa</label>
              <div class="ml-auto text-gray-600 text-sm">(15)</div>
            </div>
            <!-- Single category end -->
            <!-- Single Category -->
            <div class="flex items-center">
              <input type="checkbox" id="cat-1" class="text-primary focus:ring-0">
              <label for="cat-1" class="text-gray-600 ml-3 cursor-pointer">Office</label>
              <div class="ml-auto text-gray-600 text-sm">(15)</div>
            </div>
            <!-- Single category end -->
            <!-- Single Category -->
            <div class="flex items-center">
              <input type="checkbox" id="cat-1" class="text-primary focus:ring-0">
              <label for="cat-1" class="text-gray-600 ml-3 cursor-pointer">Outdoor</label>
              <div class="ml-auto text-gray-600 text-sm">(15)</div>
            </div>
            <!-- Single category end -->
          </div>
        </div>
        <!-- Category filter end -->
        
        <!-- Brand Filter -->
        <div class="pt-4">
          <h3 class="text-xl text-gray-800 uppercase font-medium">Brands</h3>
          <div class="space-y-2">
            <!-- Single Category -->
            <div class="flex items-center">
              <input type="checkbox" id="cat-1" class="text-primary focus:ring-0">
              <label for="cat-1" class="text-gray-600 ml-3 cursor-pointer">Dominik</label>
              <div class="ml-auto text-gray-600 text-sm">(15)</div>
            </div>
            <!-- Single category end -->
            <!-- Single Category -->
            <div class="flex items-center">
              <input type="checkbox" id="cat-1" class="text-primary focus:ring-0">
              <label for="cat-1" class="text-gray-600 ml-3 cursor-pointer">Karl</label>
              <div class="ml-auto text-gray-600 text-sm">(15)</div>
            </div>
            <!-- Single category end -->
            <!-- Single Category -->
            <div class="flex items-center">
              <input type="checkbox" id="cat-1" class="text-primary focus:ring-0">
              <label for="cat-1" class="text-gray-600 ml-3 cursor-pointer">Maxing</label>
              <div class="ml-auto text-gray-600 text-sm">(15)</div>
            </div>
            <!-- Single category end -->
            <!-- Single Category -->
            <div class="flex items-center">
              <input type="checkbox" id="cat-1" class="text-primary focus:ring-0">
              <label for="cat-1" class="text-gray-600 ml-3 cursor-pointer">Ernest</label>
              <div class="ml-auto text-gray-600 text-sm">(15)</div>
            </div>
            <!-- Single category end -->
          </div>
        </div>
        <!-- Brand filter end -->

        <!-- Price filter-->
        <div class="pt-4">
          <h3 class="text-xl text-gray-800 uppercase font-medium">Price</h3>
          <div class="mt-4 flex items-center">
            <input type="text" class="w-full border-gray focus:border-primary focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded" placeholder="min">
            <span class="mx-3 text-gray-500">-</span>
            <input type="text" class="w-full border-gray focus:border-primary focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded" placeholder="max">
          </div>
        </div>
        <!-- Price filter end -->
      </div>
    </div>
    <!-- Sidebar end -->
  </div>
  <!-- End shop wrapper -->
</template>


<script setup>

</script>