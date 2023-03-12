<template>
  <section
    class="cover bg-blue-teal-gradient relative px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 overflow-hidden py-48 flex items-center min-h-screen"
  >
    <div class="h-full absolute top-0 left-0 z-0 w-full">
      <img
        src="https://my.clevelandclinic.org/-/scassets/images/org/hero/home-hero-safe-care.jpg"
        alt=""
        class="w-full h-full object-cover"
      />
    </div>

    <div class="lg:w-3/4 xl:w-2/4 relative z-10 h-100 lg:mt-16">
      <div v-for="d in data" :key="d.id">
        <h1
          class="text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight"
        >
          {{ d.content[0].h1 }}
        </h1>
        <p class="text-blue-100 text-xl md:text-2xl leading-snug mt-4">
          Welcome to Migna
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Header",
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:3501/api/homePageContent")
      .then((response) => {
        this.data = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
