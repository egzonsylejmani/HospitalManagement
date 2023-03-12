<template>
     <div>
             <div className="flex items-center justify-start mt-5">
            <h1 className="text-4xl text-left font-bold text-[#0a5181]"> Dashboard</h1>
          </div>
              <div className='grid grid-cols-4'>
                  
                  <div class="pl-1 my-5 w-72 h-20 max-w-md	 bg-green-400 rounded-lg shadow-md mx-2">
                        <div class="flex w-full h-full py-2 px-4  bg-white rounded-lg justify-between">
                          <div class="my-auto">
                            <p class="font-bold">Appointments</p>
                            <p class="text-lg">{{appointments.length}}</p>
                          </div>
                          <div class="my-auto">
                          <i class="fa-solid fa-calendar-check"></i>     
                          </div>
                        </div>
                  </div>
                  <div class="pl-1 my-5 w-72 h-20 max-w-md bg-green-400 rounded-lg shadow-md mx-2">
                    <div class="flex w-full h-full py-2 px-4  bg-white rounded-lg justify-between">
                      <div class="my-auto">
                        <p class="font-bold">Doctors</p>
                        <p class="text-lg">{{doctors.length}}</p>
                      </div>
                      <div class="my-auto">
                      <i class="fa-solid fa-user-doctor"></i>     
                      </div>
                    </div>
                  </div>
                  <div class="pl-1 my-5 w-72 h-20 max-w-md bg-green-400 rounded-lg shadow-md mx-2">
                    <div class="flex w-full h-full py-2 px-4  bg-white rounded-lg justify-between">
                      <div class="my-auto">
                        <p class="font-bold">Nurses</p>
                        <p class="text-lg">{{nurses.length}}</p>
                      </div>
                      <div class="my-auto">
                      <i class="fa-solid fa-user-nurse"></i>    
                      </div>
                    </div>
                  </div>
                  <div class="pl-1 my-5 w-72 h-20 max-w-md bg-green-400 rounded-lg shadow-md mx-2">
                    <div class="flex w-full h-full py-2 px-4  bg-white rounded-lg justify-between">
                      <div class="my-auto">
                        <p class="font-bold">Patients</p>
                        <p class="text-lg">{{patients.length}}</p>
                      </div>
                      <div class="my-auto">
                      <i class="fa-solid fa-bed"></i>    
                      </div>
                    </div>
                  </div>
                  <div class="pl-1 my-5 w-72 h-20 max-w-md	 bg-green-400 rounded-lg shadow-md mx-2">
                    <div class="flex w-full h-full py-2 px-4  bg-white rounded-lg justify-between">
                      <div class="my-auto">
                        <p class="font-bold">Wards</p>
                        <p class="text-lg">{{wards.length}}</p>
                      </div>
                      <div class="my-auto">
                      <i class="fa-solid fa-book-journal-whills"></i>       
                      </div>
                    </div>
                  </div>
              </div>
          
        </div>

</template>

<script>
import axios from "axios";

export default {
    name: "Dashboard",
    data() {
        return {
            doctors: [],
            patients: [],
            appointments: [],
            nurses: [],
            wards: [],
            DOCTORS: "http://localhost:3501/api/doctors",
            WARDS: "http://localhost:3501/api/wards",
            NURSES: "http://localhost:3501/api/nurses",
            PATIENTS: "http://localhost:3501/api/patients",
            APPOINTMENTS: "http://localhost:3501/api/appointments",
        };
    },
    mounted() {
        axios
            .get(this.DOCTORS)
            .then(response => {
                window.globalInformation = response.data;
                this.doctors = response.data;
            })
            .catch(error => console.log(error));
        axios
            .get(this.NURSES)
            .then(response => {
                window.globalInformation = response.data;
                this.nurses = response.data;
            })
            .catch(error => console.log(error));
        axios
            .get(this.WARDS)
            .then(response => {
                window.globalInformation = response.data;
                this.wards = response.data;
            })
            .catch(error => console.log(error));
       
        axios
            .get(this.APPOINTMENTS)
            .then(response => {
                window.globalInformation = response.data;
                this.appointments = response.data;
            })
            .catch(error => console.log(error));
        axios
            .get(this.PATIENTS)
            .then(response => {
                window.globalInformation = response.data;
                this.patients = response.data;
            })
            .catch(error => console.log(error));
    }
};
</script>