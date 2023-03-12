<template>
  <section class="bg-white px-28 py-5">
    <div class="flex items-center justify-center">
      <h1 class="text-4xl font-bold text-[#0a5181]">Our Wards</h1>
    </div>
    <div
      class="my-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full text-black"
    >
      <router-link
        v-for="(data, index) in wards"
        :key="index"
        :to="'/wards/' + data.Name"
      >
        <div
          class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
        >
          <img
            class="object-cover w-full h-48"
            :src="data.Image"
            alt="Flower and sky"
          />
          <div
            class="hover:bg-gray-500 hover:text-white w-full h-full flex items-center justify-center opacity-60 absolute top-0 left-0 px-6 py-4"
          >
            <h4 class="text-4xl mb-3 font-semibold tracking-tight text-black">
              {{ data.Name }}
            </h4>
          </div>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      wards: [],
    };
  },
  created() {
    axios
      .get("http://localhost:3501/api/wards")
      .then((res) => {
        this.wards = res.data;
      })
      .catch((err) => console.log(err));
  },
};
</script>
