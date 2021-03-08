<template>
  <div class="wrapper">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/admin/overview">
        <i class="nc-icon nc-chart-pie-35"></i>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/admin/bus" >
        <i class="fa fa-bus"></i>
        <p>Data Bus</p>
      </sidebar-link>
      <sidebar-link to="/admin/schedule-bus" >
        <!-- <i class="fa fa-oclock"></i> -->
         <i class="nc-icon nc-compass-05"></i>
        <p>Jadwal Bus</p>
      </sidebar-link>
      <sidebar-link to="/admin/teknisi" >
        <i class="fa fa-users"></i>
        <p>Data Teknisi</p>
      </sidebar-link>
      <sidebar-link to="/admin/result" >
        <i class="fa fa-file-text"></i>
        <p>Hasil Pengecekan</p>
      </sidebar-link>
      <sidebar-link to="/admin/cek" >
        <i class="fa fa-file-text-o"></i>
        <p>Cek Kendaraan</p>
      </sidebar-link>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  import MobileMenu from './MobileMenu.vue'
  import {mapState} from 'vuex'
  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent,
      MobileMenu
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    },

    computed: {
      ...mapState(['user'])
    },
  }

</script>
