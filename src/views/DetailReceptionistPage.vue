
<template>
    <div class="px-14 container flex items-center justify-center flex-col">
        <div class="lg:flex flex-col my-10">
            <div class="lg:w-96 lg:h-96 rounded mr-10">
                <img :src="data.Image" class="w-full h-full object-cover" />
            </div>
            <div>
                <div class="my-5 flex items-center justify-center font-bold text-3xl">
                    <h1>
                        Dr. {{ data.Firstname }} {{ data.Lastname }}
                    </h1>
                </div>
                <h1 class="my-4 font-bold border-b-4 border-gray-300">
                    Departamenti <span class="font-thin">{{ data.Ward }}</span>
                </h1>
                <h1 class="my-4 font-bold border-b-4 border-gray-300">
                    Email <span class="font-thin">{{ data.Email }}</span>
                </h1>
                <h1 class="my-4 font-bold border-b-4 border-gray-300">
                    Phone <span class="font-thin">{{ data.Phone }}</span>
                </h1>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'

export default {
    data() {
        return {
            nurseID: null,
            data: [],
        };
    },
    created() {
        const id = this.$route.params.id;
        const data = ref([]);
        let api_call_link = this.$route.path.split("/")[1]
        const returnAllBasedOnPerson = async (id, api) => {
            try {
                const res = await axios.get(`http://localhost:3501/api/${api}/${id}`);

                data.value = res.data;
            } catch (error) {
                console.log(error);
            }
        };

        returnAllBasedOnPerson(id, api_call_link);
        this.data = data;
    },
};
</script>
