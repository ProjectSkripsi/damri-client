<template>
  <div :class="{'nav-open': $sidebar.showSidebar}">
    <notifications></notifications>
    <router-view>
    </router-view>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
      ...mapState(['user', 'token']),
		isLoggedIn : function(){
			return this.$store.getters.isLoggedIn
		}
	},

	methods: {
		cekLogin() {
      let token = localStorage.getItem('token')
      if(!token) {
        this.$router.push('/')
      } 
    },
  },

	mounted() {
    this.cekLogin()

  },


  created: function () {
    this.$axios.interceptors.response.use(undefined, function (err) {
      return new Promise(function (resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch('logout')
        }
        throw err;
      });
    });
    let token = localStorage.getItem('token')
     if(token) {
        this.$store.dispatch('cekLogin')
      } 
   
  }



}
</script>
<style lang="scss">
  .vue-notifyjs.notifications{
    .list-move {
      transition: transform 0.3s, opacity 0.4s;
    }
    .list-item {
      display: inline-block;
      margin-right: 10px;

    }
    .list-enter-active {
      transition: transform 0.2s ease-in, opacity 0.4s ease-in;
    }
    .list-leave-active {
      transition: transform 1s ease-out, opacity 0.4s ease-out;
    }

    .list-enter {
      opacity: 0;
      transform: scale(1.1);

    }
    .list-leave-to {
      opacity: 0;
      transform: scale(1.2, 0.7);
    }
  }
</style>
