<template>
  <section class="bg-blue-800">
    <div class="flex items-center justify-center text-white">
      <div
        class="w-96 px-2 py-14 shadow-2xl my-5 text-center border-r border-white"
      >
        <h1 class="text-2xl leading-9">Our Staff</h1>
        <p class="leading-9">Best staff in the city</p>
        <router-link
          to="/staff"
          class="items-center justify-center w-52 px-2 py-3 bg-white text-blue-600 rounded inline-block mt-8 font-semibold"
        >
          Staff <i class="fa-solid fa-arrow-right ml-2"></i>
        </router-link>
      </div>
      <div class="w-96 py-14 shadow-2xl my-5 text-center border-r border-white">
        <h1 class="text-2xl leading-9">Locations &amp; Directions</h1>
        <p class="leading-9">Find maps and more for all locations.</p>
        <a
          href="#"
          class="items-center justify-center w-52 px-2 py-3 bg-white text-blue-600 rounded inline-block mt-8 font-semibold"
        >
          Get Directions <i class="fa-solid fa-arrow-right ml-2"></i>
        </a>
      </div>
      <div class="px-14 py-14 shadow-2xl my-5 text-center">
        <h1 class="text-2xl leading-9">Our Branches</h1>
        <p class="leading-9">Choose by city</p>
        <router-link
          to="/branches"
          class="items-center justify-center w-52 px-2 py-3 bg-white text-blue-600 rounded inline-block mt-8 font-semibold"
        >
          Branches <i class="fa-solid fa-arrow-right ml-2"></i>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  components: {
    RouterLink,
  },
};
</script>

<style>
.fa-solid {
  font-family: "Font Awesome 6 Solid";
  font-weight: 900;
}
</style>
