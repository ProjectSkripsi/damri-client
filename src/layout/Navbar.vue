<template>
  <nav class="navbar navbar-expand-lg navbar-light static-top shadow" >
    <div class="container">
        <router-link to="/">
          <a class="navbar-brand mr-2" href="#">
            <img src="img/litha.png" width="150" height="30" class="d-inline-block align-top" alt="">
          </a>
        </router-link>
        <button class="navbar-toggler" type="button"  @click.prevent="click" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse text-right" v-bind:class="{ show: isShow }" id="navbarNavDropdown"> <a v-show="isShow" @click.prevent="click" > x </a>
        <ul class="navbar-nav mt-1">
          <li class="nav-item">
            <router-link to="/route"> <a class="nav-link" href="#">Rute  <span class="sr-only"></span></a></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/armada"> <a class="nav-link" href="#">Armada <span class="sr-only">(current)</span></a></router-link>
          </li>
          <li class="nav-item">
             <router-link to="/about"><a class="nav-link" href="#">About Us</a></router-link>
          </li>
          <li class="nav-item">
             <router-link to="/login"><a class="nav-link" href="#">Login</a></router-link>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isShow: false,
     
    }
  },
  methods: {
    click(){
      this.isShow = this.isShow === true ? false : true
      
    },
  }
}


</script>


<style scoped>
.navbar {
  background: url('https://static.vecteezy.com/system/resources/thumbnails/000/626/167/original/Geometric_abstract_grey_background_for_bussines_templates_website_wallpapers.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
 
}

</style>
