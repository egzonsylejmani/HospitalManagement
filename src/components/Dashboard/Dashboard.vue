<template>
    <div class="flex h-screen">
      <!-- Left menu -->
      <div class="flex-shrink-0 w-56 bg-gray-900 text-white">
        <div class="p-4 font-bold uppercase">Dashboard</div>
        <nav class="px-2 py-4">
          <ul>
            <li :class="{ 'bg-gray-800': selectedTab === 'wards' }" class="cursor-pointer px-4 py-2 hover:bg-gray-800 relative">
              <a @click="selectedTab = 'wards'">Home</a>
            </li>
            <li :class="{ 'bg-gray-800': selectedTab === 'loginScreen' }" class="cursor-pointer px-4 py-2 hover:bg-gray-800 relative">
              <a @click="selectedTab = 'allWards'">AllWards</a>
            </li>
             <li :class="{ 'bg-gray-800': selectedTab === 'loginScreen' }" class="cursor-pointer px-4 py-2 hover:bg-gray-800 relative">
                <a @click="selectedTab = 'allDoctors'">All Doctors</a>
              </li>
              <li :class="{ 'bg-gray-800': selectedTab === 'loginScreen' }" class="cursor-pointer px-4 py-2 hover:bg-gray-800 relative">
                <a @click="selectedTab = 'allDriver'">All Ambulance drivers</a>
              </li>
              <li :class="{ 'bg-gray-800': selectedTab === 'loginScreen' }" class="cursor-pointer px-4 py-2 hover:bg-gray-800 relative">
                <a @click="selectedTab = 'allLaborants'">All Laborants</a>
              </li>
              <li :class="{ 'bg-gray-800': selectedTab === 'loginScreen' }" class="cursor-pointer px-4 py-2 hover:bg-gray-800 relative">
                <a @click="selectedTab = 'allLaboratories'">All Laboratories</a>
              </li>
              <li :class="{ 'bg-gray-800': selectedTab === 'loginScreen' }" class="cursor-pointer px-4 py-2 hover:bg-gray-800 relative">
                <a @click="selectedTab = 'allmedicalTechnicians'">All Medical technicians</a>
              </li>
              <li :class="{ 'bg-gray-800': selectedTab === 'loginScreen' }" class="cursor-pointer px-4 py-2 hover:bg-gray-800 relative">
                <a @click="selectedTab = 'allNurses'">All Nurses</a>
              </li>
              <li :class="{ 'bg-gray-800': selectedTab === 'loginScreen' }" class="cursor-pointer px-4 py-2 hover:bg-gray-800 relative">
                <a @click="selectedTab = 'allPatients'">All Patients </a>
              </li>
              <li :class="{ 'bg-gray-800': selectedTab === 'loginScreen' }" class="cursor-pointer px-4 py-2 hover:bg-gray-800 relative">
                <a @click="selectedTab = 'allReceptionists'">All Receptionists </a>
              </li>
              <li :class="{ 'bg-gray-800': selectedTab === 'loginScreen' }" class="cursor-pointer px-4 py-2 hover:bg-gray-800 relative">
                <a @click="selectedTab = 'allSecurities'">All Securities </a>
              </li>
              <li :class="{ 'bg-gray-800': selectedTab === 'loginScreen' }" class="cursor-pointer px-4 py-2 hover:bg-gray-800 relative">
                <a @click="selectedTab = 'allTechnicians'">All Technicians </a>
              </li>

            <li :class="{ 'bg-gray-800': selectedTab === 'settings' }" class="cursor-pointer px-4 py-2 hover:bg-gray-800 relative">
              <a @click="selectedTab = 'settings'">Settings</a>
            </li>
            
          </ul>
        </nav>
      </div>
  
      <!-- Right content -->
      <div class="flex-1 p-4">
        <component :is="selectedTab" />
      </div>
    </div>
  </template>
  
  <script>
  import Wards from '../Wards/Wards.vue';
  import AllWards from '../Wards/AllWards.vue'
  import AllDoctors from '../Doctors/AllDoctors.vue';
  import AllDriver from '../AmbulanceDrivers/AllDriver.vue';
  import AllLaborants from '../Laborants/AllLaborants.vue';
  import AllLaboratories from '../Laboratories/AllLaboratories.vue';
  import AllmedicalTechnicians from '../MedicalTechnicians/AllmedicalTechnicians.vue'
  import AllNurses from '../Nurses/AllNurses.vue'
  import AllPatients from '../Patients/AllPatients.vue'
  import AllReceptionists from '../Receptionists/AllReceptionists.vue'
  import AllSecurities from '../Securities/AllSecurities.vue'
  import AllTechnicians from '../Technicians/AllTechnicians.vue'
  export default {
    data() {
      return {
        selectedTab: 'allWards'        
        // ,selectedTab: 'allDoctors'

      };
    },
    components: {
      Wards,
      AllWards,
      AllDoctors,
      AllDriver,
      AllLaborants,
      AllLaboratories,
      AllmedicalTechnicians,
      AllNurses,
      AllPatients,
      AllReceptionists,
      AllSecurities,
      AllTechnicians
    }
  };
  </script>
  
  <style>
  a {
    color: #ffffff;
    text-decoration: none;
  }
  a:hover {
    color: #ffffff;
  }
  </style>
  