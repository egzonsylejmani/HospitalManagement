<template>
  <footer class="relative bg-gray-900 text-white px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-12 lg:py-24">
    <div class="flex flex-col md:flex-row">
      <div class="w-full lg:w-2/6 lg:mx-4 lg:pr-8">
        <h3 class="font-bold text-2xl">Migna</h3>
        <p class="text-gray-400">A better life starts with our Hospital</p>

        <form class="flex items-center mt-6" @submit.prevent="">
          <div class="w-full">
            <label class="py-3 block uppercase tracking-wide text-gray-600 text-xs font-bold" for="grid-last-name">
              Subscribe for our Newsletter
            </label>
            <div class="relative">
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="email"
                placeholder="Enter Your Email Address"
              />

              <button type="submit" class="bg-teal-500 hover:bg-teal-400 text-white px-4 py-2 text-sm font-bold rounded absolute top-0 right-0 my-2 mr-2">
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>

     <div class="w-full lg:w-1/6 mt-8 lg:mt-0 lg:mx-4">
    <h5 class="uppercase tracking-wider font-semibold text-gray-500">Treatments</h5>
    <ul class="mt-4">
      <li class="mt-2">
        <a href="#" title="" class="opacity-75 hover:opacity-100">
          General Dentistry
        </a>
      </li>
      <li class="mt-2">
        <a href="#" title="" class="opacity-75 hover:opacity-100">
          Cosmetic Dentistry
        </a>
      </li>
      <li class="mt-2">
        <a href="#" title="" class="opacity-75 hover:opacity-100">
          Oral Health
        </a>
      </li>
      <li class="mt-2">
        <a href="#" title="" class="opacity-75 hover:opacity-100">
          Oncology
        </a>
      </li>
      <li class="mt-2">
        <a href="#" title="" class="opacity-75 hover:opacity-100">
          Pediatrics
        </a>
      </li>
      <li class="mt-2">
        <a href="#" title="" class="opacity-75 hover:opacity-100">
          Emergency
        </a>
      </li>
    </ul>
  </div>