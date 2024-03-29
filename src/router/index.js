import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ErrorPage from "../components/pages/errorpage.vue";
import Unauthorized from "../components/pages/Unauthorized.vue";
import Wards from "../components/Wards/Wards.vue";
import Branches from "../components/Branches/Branches.vue";
import Staff from "../components/Staff/Staff.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Dashboard from "../components/Dashboard/Dashboard.vue";
import { auth } from "../components/firebase/index";
import Laboratory from "../components/Laboratories/Laboratory.vue";
import DetailNursePage from "../views/DetailNursePage.vue";
import SpecificWards from "../components/Wards/SpecificWards.vue";
import DetailReceptionistPage from "../views/DetailReceptionistPage.vue";
import DetailMedicalPage from "../views/DetailMedicalPage.vue";
import DetailLaborantPage from "../views/DetailLaborantPage.vue";
import DetailDriverPage from "../views/DetailDriverPage.vue";
import DetailDoctorPage from "../views/DetailDoctorPage.vue";
import SpecificLaboratory from "../components/Laboratories/SpecificLaboratory.vue";

const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/forgotpassword",
      name: "forgotpassword",
      component: HomeView,
    },
    {
      path: "/404",
      name: "404",
      component: ErrorPage,
    },
    {
      path: "/wards",
      name: "Wards",
      component: Wards,
      meta: {
        requiresAuth: true,
        requiresAdmin: false,
      },
    },
    {
      path: "/wards/:ward",
      name: "SpecificWards",
      component: SpecificWards,
      props: true,
      meta: {
        requiresAuth: true,
        requiresAdmin: false,
      },
    },
    {
      path: "/laboratories/:laboratory",
      name: "SpecificLaboratory",
      component: SpecificLaboratory,
      props: true,
      meta: {
        requiresAuth: true,
        requiresAdmin: false,
      },
    },

    {
      path: "/nurses/:id",
      name: "DetailNursePage",
      component: DetailNursePage,
      props: true,
      meta: {
        requiresAuth: true,
        requiresAdmin: false,
      },
    },

    {
      path: "/receptionist/:id",
      name: "DetailReceptionistPage",
      component: DetailReceptionistPage,
      props: true,
      meta: {
        requiresAuth: true,
        requiresAdmin: false,
      },
    },

    {
      path: "/ambulance-drivers/:id",
      name: "DetailDriverPage",
      component: DetailDriverPage,
      props: true,
      meta: {
        requiresAuth: true,
        requiresAdmin: false,
      },
    },

    {
      path: "/doctors/:id",
      name: "DetailDoctorPage",
      component: DetailDoctorPage,
      props: true,
      meta: {
        requiresAuth: true,
        requiresAdmin: false,
      },
    },

    {
      path: "/laborants/:id",
      name: "DetailLaborantPage",
      component: DetailLaborantPage,
      props: true,
      meta: {
        requiresAuth: true,
        requiresAdmin: false,
      },
    },

    {
      path: "/medical-technicians/:id",
      name: "DetailMedicalPage",
      component: DetailMedicalPage,
      props: true,
      meta: {
        requiresAuth: true,
        requiresAdmin: false,
      },
    },

    {
      path: "/branches",
      name: "Branches",
      component: Branches,
      meta: {
        requiresAuth: true,
        requiresAdmin: false,
      },
    },
    {
      path: "/staff",
      name: "Staff",
      component: Staff,
      meta: {
        requiresAuth: true,
        requiresAdmin: false,
      },
    },
    {
      path: "/laboratories",
      name: "Laboratories",
      component: Laboratory,
      meta: {
        requiresAuth: true,
        requiresAdmin: false,
      },
    },

    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
      meta: {
        requiresAuth: true,
        requiresAdmin: true,
      },
    },
    {
      path: "/unauthorized",
      name: "Unauthorized",
      component: Unauthorized,
    },
  ],
});
router.beforeEach((to, from, next) => {
  if (to.path === "/login" && auth.currentUser) {
    next("/");
    return;
  }

  if (to.matched.some((record) => record.meta.requiresAuth) && !auth.currentUser) {
    next("/login");
    return;
  }
  if (router.options.routes.some((route) => route.path === to.path)) {
    next();
  } else if (router.options.routes.some((route) => route.path === to.matched[0]?.path)) {
    next();
  } else {
    // if the route doesn't exist, redirect to your 404 page
    next({ name: "404" });
  }
  next();
  // check if the route being navigated to exists in your routes
});
router.beforeEach((to, from, next) => {
  const requiresAdmin = to.matched.some((record) => record.meta.requiresAdmin);
  const currentUser = auth.currentUser;

  if (requiresAdmin && currentUser) {
    currentUser
      .getIdTokenResult(true) // pass true to force token refresh
      .then((idTokenResult) => {
        if (idTokenResult.claims.admin === true) {
          next();
        } else {
          next("/unauthorized");
        }
      })
      .catch((error) => {
        console.error(error);
        next("/");
      });
  } else {
    next();
  }
});
// Navigation guard to check if the user is a doctor
router.beforeEach((to, from, next) => {
  const requiresDoctor = to.matched.some((record) => record.meta.requiresDoctor);
  const currentUser = auth.currentUser;

  if (requiresDoctor && currentUser) {
    currentUser
      .getIdTokenResult(true) // pass true to force token refresh
      .then((idTokenResult) => {
        if (idTokenResult.claims.doctor === true) {
          next();
        } else {
          next("/unauthorized");
        }
      })
      .catch((error) => {
        console.error(error);
        next("/unauthorized");
      });
  } else {
    next();
  }
});

// Navigation guard to check if the user is a receptionist
router.beforeEach((to, from, next) => {
  const requiresReceptionist = to.matched.some((record) => record.meta.requiresReceptionist);
  const currentUser = auth.currentUser;

  if (requiresReceptionist && currentUser) {
    currentUser
      .getIdTokenResult()
      .then((idTokenResult) => {
        if (idTokenResult.claims.receptionist === true) {
          next();
        } else {
          next("/");
        }
      })
      .catch((error) => {
        console.error(error);
        next("/");
      });
  } else {
    next();
  }
});

export default router;
