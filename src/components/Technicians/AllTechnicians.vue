<template>
    <div class="flex justify-between mb-4">
        <h1 class="text-2xl font-bold mb-4">Users</h1>

        <router-link to="/wards" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add User
        </router-link>
    </div>
    <div class="container mx-auto flex flex-col">
        <div class="overflow-x-auto">
            <table class="table-auto w-full border">
                <thead>
                    <tr>
                        <th class="border px-4 py-2">Name</th>
                        <th class="border px-4 py-2">Surname</th>
                        <th class="border px-4 py-2">Phone</th>
                        <th class="border px-4 py-2">Ward</th>
                        <th class="border px-4 py-2">Email</th>
                        <th class="border px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in displayedUsers" :key="user.id">
                        <td class="border px-4 py-2">{{ user.Firstname }}</td>
                        <td class="border px-4 py-2">{{ user.Lastname }}</td>
                        <td class="border px-4 py-2">{{ user.Phone }}</td>
                        <td class="border px-4 py-2">{{ user.Email }}</td>
                         <td class="border px-4 py-2">{{ user.Ward }}</td>

                        <td class="border px-4 py-2 flex">
                            <button @click="editUser(user)"
                                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                                Edit
                            </button>
                            <button @click="deleteUser(user)"
                                class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="flex justify-end mt-4">
            <pagination :data="users" :per-page="perPage" @pagination-change-page="setCurrentPage"></pagination>
        </div>
    </div>
</template>

<script>
import Pagination from "@/components/Pagination.vue";
import axios from "axios";

export default {
    components: {
        Pagination,
    },
    data() {
        return {
            users: [],
            currentPage: 1,
            perPage: 10,
        };
    },
    computed: {
        displayedUsers() {
            const start = (this.currentPage - 1) * this.perPage;
            const end = start + this.perPage;
            return this.users.slice(start, end);
        },
    },
    methods: {
        editUser(user) {
            this.$router.push(`http://localhost:3501/api/technicians/${user._id}`);
        },
        deleteUser(user) {
            if (
                confirm(`Are you sure you want to delete ${user.Name} ${user.Image}?`)
            ) {
                axios
                    .delete(`http://localhost:3501/api/technicians/${user._id}`)
                    .then(() => {
                        this.users.splice(this.users.indexOf(user), 1);
                        this.$toast.success(
                            `${user.Name} ${user.Image} deleted successfully.`
                        );
                    })
                    .catch(() => {
                        this.$toast.error(
                            `Failed to delete ${user.Name} ${user.Image}. Please try again later.`
                        );
                    });
            }
        },
        setCurrentPage(page) {
            this.currentPage = page;
        },
        getUsers() {
            axios
                .get("http://localhost:3501/api/technicians/")
                .then((response) => {
                    this.users = response.data;
                })
                .catch(() => {
                    this.$toast.error("Failed to get users. Please try again later.");
                });
        },
    },
    mounted() {
        this.getUsers();
    },
};
</script>

<style>
/* Styles for the table */
table {
    border-collapse: collapse;
    width: 100%;
}

th,
td {
    text-align: left;
}

th,
td {
    border: 1px solid #ddd;
    padding: 8px;
}

th {
    background-color: #f2f2f2;
}

/* Styles for the pagination component */
.pagination {
    display: flex;
    justify-content: flex-end;
}

.pagination-button {
    background-color: #f2f2f2;
    border: 1px solid #ddd;
    color: #333;
    cursor: pointer;
    font-size: 14px;
    padding: 6px 12px;
    text-align: center;
    transition: background-color 0.3s ease;
}

.pagination-button:hover {
    background-color: #ddd;
}
</style>
