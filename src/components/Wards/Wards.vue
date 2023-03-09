<template>
    <div class="max-w-md mx-auto">
      <div
        v-if="successMessage"
        class="bg-green-200 text-green-800 border-l-4 border-green-500 py-2 px-4 mb-4"
        role="alert"
      >
        <p class="font-bold">Success:</p>
        <p>{{ successMessage }}</p>
      </div>
      <div
        v-if="errorMessage"
        class="bg-red-200 text-red-800 border-l-4 border-red-500 py-2 px-4 mb-4"
        role="alert"
      >
        <p class="font-bold">Error:</p>
        <p>{{ errorMessage }}</p>
      </div>
      <form
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        @submit.prevent="submitForm"
      >
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
            Name
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            v-model="name"
            placeholder="Enter your name"
          />
          <span class="text-red-500 text-xs italic" v-if="nameError">{{
            nameError
          }}</span>
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Image
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image"
            type="text"
            v-model="image"
            placeholder="Image"
          />
          <span class="text-red-500 text-xs italic" v-if="imageError">{{
            imageError
          }}</span>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        name: "",
        email: "",
        nameError: "",
        imageError: "",
        successMessage: "",
        errorMessage: "",
      };
    },
    methods: {
      validateForm() {
        // Reset errors
        this.nameError = "";
        this.imageError = "";
  
        // Validate name
        if (!this.name) {
          this.nameError = "Name is required";
          return false;
        }
  
        // Validate email
        if (!this.image) {
          this.imageError = "Image is required";
          return false;
        } 
  
        return true;
      },
      submitForm() {
        if (this.validateForm()) {
          // Create the payload
          const payload = {
            Name: this.name,
            Image: this.image,
          };
  
          // Make the POST request
          axios
            .post("http://localhost:3501/api/wards/", payload)
            .then((response) => {
              // Handle the response
              if (response.status === 201) {
                this.successMessage = "Wards created successfully";
                this.name = '';
                this.image = '';
              }
            })
            .catch((error) => {
              // Handle the error
              if (error.response) {
                this.errorMessage = error.response.data.message;
              } else if (error.request) {
                this.errorMessage = "Unable to connect to the server";
              } else {
                this.errorMessage = "An unknown error occurred";
              }
            });
        }
      },
    },
  };
  </script>
  