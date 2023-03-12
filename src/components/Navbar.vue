  <template>
    <nav class="bg-gray-800">
      <div class="flex justify-between px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <router-link to="/">
                <img
                  class="h-8 w-8"
                  src="https://www.pngmart.com/files/21/Hospital-Vector-PNG-Transparent.png"
                  alt="Workflow"
                />
              </router-link>
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline w-full justify-between">
                <router-link
                  to="/wards"
                  exact-active-class="active"
                  :class="{'bg-white text-gray-800': $route.path === '/wards'}"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Wards
                </router-link>
                <router-link
                  to="/branches"
                  exact-active-class="active"
                  :class="{'bg-white text-gray-800': $route.path === '/branches'}"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Branches
                </router-link>
                <router-link
                  to="/staff"
                  exact-active-class="active"
                  :class="{'bg-white text-gray-800': $route.path === '/staff'}"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Staff
                </router-link>
                <router-link
                  to="/laboratories"
                  exact-active-class="active"
                  :class="{'bg-white text-gray-800': $route.path === '/laboratories'}"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Laboratories
                </router-link>

                <router-link
                      to="/dashboard"
                      exact-active-class="active"
                      :class="{ 'bg-white text-gray-800': $route.path === '/dashboard' }"
                      class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Dashboard
                    </router-link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between  h-16">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div v-if="$store.state.user" className="inline-block relative">
                <button
                @click="$store.dispatch('logout')"
                  className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-300 rounded-b text-left text-gray-800 hover:text-gray-600"
                >
                  <svg
                    className="fill-current w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                    />
                  </svg>
                  Logout
                </button>
                <ul
                  className="dropdown-menu absolute hidden text-black  bg-[#1f2937] py-0 right-0"
                >
                  <li className="">
                    <router-link
                      to="/dashboard"
                      className="rounded-t bg-gray-100 hover:bg-gray-300 py-2 px-4 block whitespace-no-wrap"
                    >
                      Dashboard
                    </router-link>
                  </li>
                  <li cla ssName="">
                    <button
                      @click="logoutHandler"
                      className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-300 rounded-b text-left text-gray-800 hover:text-gray-600"
                    >
                      <svg
                        className="fill-current w-4 h-4 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                        />
                      </svg>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
              <router-link
                v-else
                to="/login"
                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Login
              </router-link>
              
            </div>
          </div>
        </div>
      </div>
    </nav>
  </template>
  <script>
    import { onBeforeMount } from 'vue'
    import { useStore } from 'vuex';
    export default {
      setup(){
        const store =  useStore();

        onBeforeMount(() => {
          store.dispatch('fetchUser');
        })

      
      }
  };
  </script>
  <style>
  .active {
    background-color: #f3f4f6;
    color: #4b5563;
  }</style>
