<template>
  <div class="w-full max-w-xs m-auto bg-white-100 rounded p-5">
    <header>
      <img
        class="w-45 mx-auto mb-5"
        src="https://i.pinimg.com/originals/33/e0/c5/33e0c5ff9c271eb7bfeb0fe7b0b91d68.jpg"
      />
    </header>
    <div>
      <h1 class="text-3xl font-bold text-indigo-500 my-10 text-center">
        Register
      </h1>
    </div>
    <p v-if="error" class="text-red-500 text-center">{{ error }}</p>
    <form class="login" @submit.prevent="register">
      <div>
        <label class="block mb-2 text-indigo-500" for="email"> Email </label>
        <input
          class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-grey-300"
          type="email"
          name="email"
          id="email"
          v-model="register_form.email"
        />
      </div>
      <div>
        <label class="block mb-2 text-indigo-500" for="password">
          Password
        </label>
        <input
          class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
          type="password"
          name="password"
          id="password"
          v-model="register_form.password"
        />
      </div>
      <div>
        <input
          type="submit"
          class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg hover:bg-red-700 focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        />
      </div>
    </form>
    <footer>
      <router-link
        to="/"
        class="text-indigo-700 hover:text-yellow-700 text-sm float-left"
        >Forgot Password?</router-link
      >
      <router-link
        to="/register"
        class="text-indigo-700 hover:text-yellow-700 text-sm float-right"
        >Register</router-link
      >
    </footer>
  </div>
</template>
<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const register_form = ref({});
    const store = useStore();
    const error = ref(null);

    const register = async () => {
      try {
        await store.dispatch("register", register_form.value);
      } catch (err) {
        let errorMessage = "";
        switch (err.code) {
          case "auth/email-already-in-use":
            errorMessage = "This email is already registered.";
            break;
          case "auth/invalid-email":
            errorMessage = "The email address is invalid.";
            break;
          case "auth/weak-password":
            errorMessage =
              "The password is too weak. It should include one Uppercase and !@#$%^";
            break;
          default:
            errorMessage =
              "An error occurred while trying to register. Please try again later.";
            break;
        }
        error.value = errorMessage;
        setTimeout(() => {
          error.value = null;
        }, 5000);
      }
    };

    return {
      register_form,
      register,
      error,
    };
  },
};
</script>
