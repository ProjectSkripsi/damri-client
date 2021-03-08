<template>
  <div>
    <navbar/>
    <section class="bg">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mt-5">
            <RouteTable />
          </div> 
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
  import RouteTable from './RouteTable'
  import Navbar from '../../layout/Navbar.vue';
  import Footer from '../../layout/Footer.vue';

  export default {
    components: {
      RouteTable,
      Navbar,
      Footer
    }
  }

</script>

<style scoped>
section {
  background: url('https://static.vecteezy.com/system/resources/thumbnails/000/626/167/original/Geometric_abstract_grey_background_for_bussines_templates_website_wallpapers.jpg') 
  no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
 
}





</style>
