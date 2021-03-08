<template>
  <footer class="footer" >
    <div class="container-fluid">
      <nav>
        <ul class="footer-menu">
          <li>
            <router-link :to="{path:'/admin'}">Dashboard</router-link>
          </li>
        </ul>
      </nav>
      <div class="copyright text-center">
        <a href="https://djaduls.dev/" target="_blank">&copy; Litha & Co</a> 2021
      </div>
    </div>
  </footer>
</template>
<script>
import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState(['user'])
    },
  }

</script>
<style>

</style>
