<template>
  <footer class="footer" v-show="user.role === 'admin'">
    <div class="container-fluid">
      <nav>
        <ul class="footer-menu">
          <li>
            <router-link :to="{path:'/admin'}">Dashboard</router-link>
          </li>
        </ul>
      </nav>
      <div class="copyright text-center">
        <a href="http://www.damri.co.id/" target="_blank">&copy; Damri</a> 2019
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
