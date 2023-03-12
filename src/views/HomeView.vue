<template>
  <div>
    <Header />
    <Links />
    <HomeWards />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Links from "./Links.vue";
import HomeWards from "./HomeWards.vue";

export default {
  name: "HomePage",
  components: {
    Header,
    Links,
    HomeWards,
  },
};
</script>
