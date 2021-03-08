<template>

  <ul class="nav nav-mobile-menu">
    <li class="nav-item">
      <a class="nav-link">
        {{ this.lodash.get(user, 'username', '') }}
        <i class="fa fa-user-circle-o" aria-hidden="true"></i>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/" @click="doLogout">
        Log out
        <i class="fa fa-sign-out" aria-hidden="true"></i>
      </a>
    </li>
  </ul>
</template>
<script>

import { mapState } from 'vuex';


  export default {
    name: 'mobile-menu',
    methods: {
      doLogout(){
        this.$store.dispatch('logout')
      }
    },
    computed: {
      ...mapState(['user'])
    },
  }
</script>
<style>
</style>
