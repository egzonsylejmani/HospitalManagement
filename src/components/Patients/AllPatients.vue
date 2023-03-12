<template>
    <div class="flex justify-between mb-4">
        <h1 class="text-2xl font-bold mb-4">Patients</h1>
        <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/5" @click="showAddModal = true">Add Patients</button>
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
      <div class="modal" v-if="editingUser">
          <div class="modal-content">
            <h2>Edit Patient</h2>
            <form>
              <div v-for="(value, key) in editingUser" :key="key" class="form-group">
                <div v-if="key != '_id' && key != '__v' && key != 'updatedAt' && key != 'createdAt'" class="form-group">
                <label :for="key">{{ key }}:</label>
                <input type="text" v-model="editingUser[key]" :id="key">
                </div>
              </div>
              <button @click.prevent="saveUser">{{ editingUser.id ? 'Save' : 'Add' }}</button>
              <button @click.prevent="cancelEdit">Cancel</button>
            </form>
          </div>
        </div>
    <div class="modal" v-if="showAddModal">
        <div class="modal-content">
          <h2>Add Patient</h2>
          <form>
            <div class="form-group">
              <label for="name">Name:</label>
              <input type="text" v-model="newUser.Firstname" id="name">
            </div>
            <div class="form-group">
                <label for="name">Last Name:</label>
                <input type="text" v-model="newUser.Lastname" id="lastname">
              </div>
            <div class="form-group">
              <label for="image">Phone:</label>
              <input type="text" v-model="newUser.Phone" id="phone">
            </div>
            <div class="form-group">
                <label for="image">Ward:</label>
                <input type="text" v-model="newUser.Ward" id="ward">
              </div>
              <div class="form-group">
                <label for="image">Email:</label>
                <input type="text" v-model="newUser.Email" id="email">
              </div>
              <div class="form-group">
                <label for="image">Birthdate</label>
                <input type="text" v-model="newUser.BirthDate" id="birthdate">
              </div>
              <div class="form-group">
                <label for="image">Image</label>
                <input type="text" v-model="newUser.Image" id="Image">
              </div>
            
            <button @click.prevent="addUser">Save</button>
            <button @click.prevent="showAddModal = false">Cancel</button>
          </form>
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
            editingUser: null,
            newUser: {
      },
      showAddModal: false
        };
    },
    computed: {
        displayedUsers() {
            const start = (this.currentPage - 1) * this.perPage;
            const end = start + this.perPage;
            return this.users.slice(start, end);
        },
    },
    methods:{
    addUser() {
      axios.post('http://localhost:3501/api/patients', this.newUser)
        .then(response => {
          if(response.data.message.includes("with success")){
            this.getUsers()

            this.newUser = {};
            this.showAddModal = false;
          }else{
            alert("Failed to add this user")
          }
        })
        .catch(error => {
           alert(error.response.data[Object.keys(error.response.data)[0]])

          console.log(error);
        });
    },
     saveUser() {
      axios.put(`http://localhost:3501/api/patients/${this.editingUser._id}`, this.editingUser)
        .then(() => {
          this.editingUser = null;
          this.getUsers();
          this.$toast.success("User updated successfully.");
        })
        .catch(() => {
          this.$toast.error("Failed to update user. Please try again later.");
        });
    },
    cancelEdit() {
      this.editingUser = null;
    },
    editUser(user) {
      this.editingUser = { ...user };

    },
    deleteUser(user) {
      if (
        confirm(`Are you sure you want to delete ${user.Firstname} ${user.Lastname}?`)
      ) {
        axios
          .delete(`http://localhost:3501/api/patients/${user._id}`)
          .then(() => {
            this.users.splice(this.users.indexOf(user), 1);
            alert(
              `${user.Firstname} ${user.Lastname} deleted successfully.`
            );
          })
          .catch((e) => {
          alert(e)
          });
      }
    },
        setCurrentPage(page) {
            this.currentPage = page;
        },
        getUsers() {
            axios
                .get("http://localhost:3501/api/patients/")
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
