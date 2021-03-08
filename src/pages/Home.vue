<template>
    <div >
        <navbar/>
        <div class="slide">
            <div class="container">
                <carousel :per-page="1" :navigate-to="1" :mouse-drag="false" autoplay loop paginationPosition="top-overlay" :paginationEnabled="false" :navigationEnabled="true">
                    <slide>
                        <img src="img/bus1.jpeg" width="100%" >
                    </slide>
                    <slide>
                        <img src="img/bus2.jpeg" width="100%" >
                    </slide>
                    <slide>
                        <img src="img/bus3.jpeg" width="100%" >
                    </slide>
                </carousel>
            </div>
        </div>
        
        <!-- <div class="content" >
            halo
            hdisad
            adsa
            dsa
        </div> -->
        
        <Footer />
       
    </div>
</template>

<script>

import Navbar from '../layout/Navbar.vue';
import Footer from '../layout/Footer.vue';

export default {
  components: { Navbar, Footer },
    name: "Home",
  
};
</script>

<style scoped>
.slide {
  background: url('https://static.vecteezy.com/system/resources/thumbnails/000/626/167/original/Geometric_abstract_grey_background_for_bussines_templates_website_wallpapers.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
 
}

/* .content {
  background: url('https://static.vecteezy.com/system/resources/thumbnails/000/626/167/original/Geometric_abstract_grey_background_for_bussines_templates_website_wallpapers.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
 
} */

</style>
