<template>
    <div >
        <navbar/>
        <section id="galeri" >
          <div class="container">
            <div class="row">
              <div class="row"  style="margin-bottom: 100px;">
                <Galery v-for="galeri in galeries" :key="galeri._id"
                  :idBus="galeri.idBus"
                  :policeNo="galeri.policeNo"
                  :cover="_.get(galeri, 'imageUrl[0].url', '')"
                  :vechileType="galeri.vechileType"
                />
              </div>
             
            </div>
          </div>
        </section>
      <Footer />
    </div>
</template>

<script>
import _ from 'lodash'
import Navbar from '../layout/Navbar.vue';
import Footer from '../layout/Footer.vue';
import Galery from '../components/GaleryItem'
export default {
  components: { Navbar, Footer, Galery },
  name: "Galeri",
  data() {  
    return {
      galeries: [],
    }
  },

  methods: {
    getData() {
      this.$axios({
          url: `/api/bus/buses`,
          method: `get`,
          
        })
        .then(response=>{
          
          this.galeries = response.data
        })
        .catch(err =>{
          console.log(err);
        })
    }
  },
    mounted() {
      this.getData()
    },
  
};
</script>

<style scoped>
section {
  background: url('https://static.vecteezy.com/system/resources/thumbnails/000/626/167/original/Geometric_abstract_grey_background_for_bussines_templates_website_wallpapers.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
  
 
}

</style>
