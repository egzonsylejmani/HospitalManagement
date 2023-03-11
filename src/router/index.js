import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ErrorPage from "../components/pages/errorpage.vue";
import Unauthorized from "../components/pages/Unauthorized .vue";
import Wards from "../components/Wards/Wards.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Dashboard from "../components/Dashboard/Dashboard.vue";
import { auth } from "../components/firebase/index";
import firebase from "firebase/app";

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
        requiresAuth: false,
        // requiresAdmin: true
      },
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
    },
    {
      path: "/Unauthorized ",
      name: "Unauthorize",
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
      .getIdTokenResult()
      .then((idTokenResult) => {
        if (idTokenResult.claims.admin === true) {
          next();
        } else {
          next("/Unauthorized");
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
      .getIdTokenResult()
      .then((idTokenResult) => {
        if (idTokenResult.claims.doctor === true) {
          next();
        } else {
          next("/Unauthorized");
        }
      })
      .catch((error) => {
        console.error(error);
        next("/Unauthorized");
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
