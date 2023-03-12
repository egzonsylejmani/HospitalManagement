
<template>

    <div class="md:grid grid-cols-4 mt-12 mb-12 rounded-full">
        <div v-for="(item, index) in data" :key="index" class="md:px-4 my-3 rounded-full">
            <div class="bg-white rounded-full border-grey-300">
                <div class="w-full h-72 rounded-t-lg overflow-hidden bg-gray-300">
                    <img class="rounded-t-lg w-full h-full object-cover" :src="item.Image" />
                </div>
                <div class="p-2">
                    <router-link :to="
                        item.role == 'Doctor'
                            ? '/doctors/' + item._id
                            : item.role == 'Nurse'
                                ? '/nurses/' + item._id
                                : item.role == 'Receptionist'
                                    ? '/receptionist/' + item._id
                                    : item.role == 'Ambulance Driver'
                                        ? '/ambulance-drivers/' + item._id
                                        : item.role == 'Laborant'
                                            ? '/laborants/' + item._id
                                            : '/medical-technicians/' + item._id
                    " class="text-lg font-semibold mt-1 text-left">
                        {{ item.Firstname }} {{ item.Lastname }}
                    </router-link>
                    <p class="text-sm font-semibold mt-1 text-left">{{ item.role }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue'
import axios from 'axios'

export default {
    name: 'SpecificLaboratories',
    data() {
        return {
            lab: null,
            data: [],
        };
    },
    created() {

        const lab = this.$route.params.laboratory;
        this.lab = lab;
        console.log(lab)
        const data = ref([]);
        const returnAllBasedOnLab = async () => {
            try {
                const res = await axios.get(`http://localhost:3501/api/laboratories/specific/${this.lab}`);
                data.value = res.data;
            } catch (error) {
                alert(error);
            }
        };

        returnAllBasedOnLab();
        this.data = data;
    },
};
</script>