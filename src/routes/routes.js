import DashboardLayout from "../layout/DashboardLayout.vue";
// GeneralViews
import NotFound from "../pages/NotFoundPage.vue";
// import Home from "../pages/Home.vue";
// Admin pages
import Overview from "src/pages/Overview.vue";
import Bus from "src/pages/Bus.vue";
import AddBus from "src/pages/UserProfile/Addbus.vue";
import AddTechnician from "src/pages/Technician/AddTechnician.vue";
import EditBus from "src/pages/UserProfile/EditBus.vue";
import Technician from "src/pages/Technician.vue";
import Result from "src/pages/Result.vue";
import Notifications from "src/pages/Notifications.vue";
import Login from "src/pages/Login.vue";
import InputPage from "src/pages/InputPage.vue";
import PdfResult from "src/pages/PdfResult.vue";
import Home from "src/pages/Home.vue";
import Armada from "src/pages/Galery.vue";
import About from "src/pages/About.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/armada",
    name: "Armada",
    component: Armada
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  // {
  //   path: "/login",
  //   component: DashboardLayout,
  //   redirect: "/admin/overview"
  // },
  {
    path: "/admin",
    component: DashboardLayout,
    redirect: "/admin/overview",
    children: [
      {
        path: "overview",
        name: "Overview",
        component: Overview
      },
      {
        path: "bus",
        name: "Bus",
        component: Bus
      },
      {
        path: "addbus",
        name: "Add Bus",
        component: AddBus
      },
      {
        path: "/admin/bus/:id",
        name: "EditBus",
        component: EditBus
      },
      {
        path: "teknisi",
        name: "Technician",
        component: Technician
      },
      {
        path: "addteknisi",
        name: "AddTechnician",
        component: AddTechnician
      },
      {
        path: "cek",
        name: "InputPage",
        component: InputPage
      },
      {
        path: "result",
        name: "Result",
        component: Result
      },
      {
        path: "/admin/result/:id",
        name: "pdfview",
        component: PdfResult
      }
    ]
  },
  { path: "*", component: NotFound }
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
