<template>
    <div class="flex h-screen">
      <!-- Left menu -->
      <div class="flex-shrink-0 w-56 bg-gray-900 text-white">
        <div class="p-4 font-bold uppercase">Dashboard</div>
        <nav class="px-2 py-4">
          <ul>
            <a @click="selectedTab = 'homeDashboard'">
            <li :class="{ 'bg-gray-800': selectedTab === 'homeDashboard' }" class="cursor-pointer px-4 py-2 hover:bg-gray-800 relative">
              <a>Home</a>
            </li>
            </a>
            <a @click="selectedTab = 'allWards'">
            <li :class="{ 'bg-gray-800': selectedTab === 'loginScreen' }" class="cursor-pointer px-4 py-2 hover:bg-gray-800 relative">
              <a>All Wards</a>
            </li>
            </a>
            <a @click="selectedTab = 'allDoctors'">
             <li :class="{ 'bg-gray-800': selectedTab === 'loginScreen' }" class="cursor-pointer px-4 py-2 hover:bg-gray-800 relative">
                <a>All Doctors</a>
              </li>
              </a>
              <a @click="selectedTab = 'allDriver'">
              <li :class="{ 'bg-gray-800': selectedTab === 'loginScreen' }" class="cursor-pointer px-4 py-2 hover:bg-gray-800 relative">
                <a>All Ambulance drivers</a>
              </li>
              </a>
              <a @click="selectedTab = 'allLaborants'">
              <li :class="{ 'bg-gray-800': selectedTab === 'loginScreen' }" class="cursor-pointer px-4 py-2 hover:bg-gray-800 relative">
                <a>All Laborants</a>
              </li>
              </a>
              <a @click="selectedTab = 'allLaboratories'">
              <li :class="{ 'bg-gray-800': selectedTab === 'loginScreen' }" class="cursor-pointer px-4 py-2 hover:bg-gray-800 relative">
                <a>All Laboratories</a>
              </li>
              </a>
              <a @click="selectedTab = 'allmedicalTechnicians'">
              <li :class="{ 'bg-gray-800': selectedTab === 'loginScreen' }" class="cursor-pointer px-4 py-2 hover:bg-gray-800 relative">
                <a>All Medical technicians</a>
              </li>
              </a>
              <a @click="selectedTab = 'allNurses'">
              <li :class="{ 'bg-gray-800': selectedTab === 'loginScreen' }" class="cursor-pointer px-4 py-2 hover:bg-gray-800 relative">
                <a>All Nurses</a>
              </li>
              </a>
              <a @click="selectedTab = 'allPatients'">
              <li :class="{ 'bg-gray-800': selectedTab === 'loginScreen' }" class="cursor-pointer px-4 py-2 hover:bg-gray-800 relative">
                <a>All Patients </a>
              </li>
              </a>
              <a @click="selectedTab = 'allReceptionists'">
              <li :class="{ 'bg-gray-800': selectedTab === 'loginScreen' }" class="cursor-pointer px-4 py-2 hover:bg-gray-800 relative">
                <a >All Receptionists </a>
              </li>
               </a>
               <a @click="selectedTab = 'allSecurities'">
              <li :class="{ 'bg-gray-800': selectedTab === 'loginScreen' }" class="cursor-pointer px-4 py-2 hover:bg-gray-800 relative">
                <a>All Securities </a>
              </li>
              </a>
              <a @click="selectedTab = 'allTechnicians'">
              <li :class="{ 'bg-gray-800': selectedTab === 'loginScreen' }" class="cursor-pointer px-4 py-2 hover:bg-gray-800 relative">
                <a >All Technicians </a>
              </li>
              </a>

            
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
  import HomeDashboard from '../HomeDashboard.vue';
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
        selectedTab: 'homeDashboard'       
      };
    },
    components: {
      HomeDashboard,
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
  