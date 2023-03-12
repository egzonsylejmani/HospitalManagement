<template>
    <div class="py-16 px-16">
        <div class="flex items-center justify-center">
            <h1 class="text-4xl font-bold text-[#0a5181]">Laboratories</h1>
        </div>
        <div class="md:grid grid-cols-4 mt-12">
            <div v-for="(laboratory, index) in data" :key="index" class="md:px-4 my-3">
                <router-link :to="`/laboratories/`+ laboratory.Ward">
                    <div class="bg-white rounded-lg border border-gray-300">
                        <div class="w-full h-48 rounded-t-lg overflow-hidden bg-gray-300">
                            <img class="rounded-t-lg" :src="laboratory.Image" />
                        </div>
                        <div class="p-2">
                            <p class="text-lg font-semibold mt-1 text-center">{{ laboratory.Ward }} Laboratory</p>
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
    name: "Laboratories",
    data() {
        return {
            data: [],
        };
    },
    mounted() {
        axios
            .get("http://localhost:3501/api/laboratories")
            .then((res) => {
                this.data = res.data;
            })
            .catch((err) => console.log(err));
    },
};
</script>
