<template>
    <div class="py-16 px-16">
        <div class="flex items-center justify-center">
            <h1 class="text-4xl font-bold text-[#0a5181]">Branches</h1>
        </div>
        <div class="md:grid grid-cols-4 mt-12">
            <div v-for="(data, index) in data" :key="index" class="md:px-4 my-3">
                <router-link :to="'/'">
                    <div class="bg-white rounded-lg border border-gray-300">
                        <div class="w-full h-48 rounded-t-lg overflow-hidden bg-gray-300">
                            <img class="rounded-t-lg" :src="data.Image" />
                        </div>
                        <div class="p-2">
                            <p class="text-xl font-semibold mt-1 ml-7">{{ data.Name }}</p>
                            <p class="text-l font-semibold mt-1 ml-7">{{ data.City }}</p>
                            <p class="text-sm font-semibold mt-1 ml-7">{{ data.Country }}</p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "Branches",
    data() {
        return {
            data: [],
        };
    },
    mounted() {
        axios
            .get("http://localhost:3501/api/branches")
            .then((res) => {
                this.data = res.data;
            })
            .catch((err) => console.log(err));
    },
};
</script>
