<template>
    <div >
        <navbar/>
        
        <section class="about" >
        <div class="container">
           <div class="rows" >
            <div class="card border-0 shadow my-5">
              <div class="card-body p-5">
                <div class="text-center">
                	<img src="/img/litha.png" width="180px" height="40px">
                </div>
                <h4 class="font-weight-light"><b>Ringkasan: Litha and Co</b></h4>
                <p style="text-align: justify;"><b>Litha & Co</b> merupakan Perusahaan Otobus (PO) yang berdiri sejak 1967. Operator bus ini pernah mendapatkan penghargaan dari Menteri Perhubungan Republik Indonesia sebagai perusahaan angkutan Antar Kota Antar Provinsi (AKAP) dengan pelayanan ekonomi terbaik. 
                  Namun, tidak hanya kelas ekonomi, Litha & Co juga menyediakan bus kelas ekonomi AC, VIP, dan eksekutif. Semua kelas tersebut bisa dinikmati di seluruh rute AKAP wilayah Sulawesi Selatan, Sulawesi Barat, dan Sulawesi Tengah.</p>
                <p class="lead mt-5"><b>Tentang Litha and Co</b></p>
                <p style="text-align: justify;">
                  Perusahaan Otobus (PO) Litha & Co didirikan di Makale, Tana Toraja, oleh Litha Brent pada 1967. Berawal dari kegiatan menjual dan mengangkut barang-barang konsumsi harian dengan truk bermerek Dodge, armada tersebut akhirnya diubah dan dikomersilkan menjadi angkutan umum. Jasa pelayanan dengan jurusan Tana Toraja – Ujung Pandang atau sebaliknya ini dilakukan untuk memenuhi kebutuhan masyarakat terhadap minimnya angkutan umum di Tana Toraja.</p>
                <p style="text-align: justify;">
                  Dalam perkembangan selanjutnya, Litha & Co berubah menjadi badan usaha berbentuk firma. Perubahan tersebut dilakukan pada 1970 karena adanya penambahan jumlah pemilik perusahaan. Dengan perubahan status tersebut, Firma Litha & Co akhirnya resmi menjadi penyedia jasa angkutan darat pada 1972 dengan melayani trayek jarak pendek Makassar – Tana Toraja.
                </p>
                <p style="text-align: justify;">
                  Sejak saat itu, jaringan Litha & Co terus bertambah luas. Litha & Co pun menambah armada bus baru miliknya demi perluasan bisnis di masa yang akan datang. Litha & Co pun menggunakan hanya bus Mercedes-Benz untuk membentuk armadanya. Hal ini dilakukan sesuai dengan misi Litha & Co untuk memberikan pelayanan maksimal kepada masyarakat, sekaligus mempertahankan kualitas dan kenyamanan yang ditawarkannya.
                </p>
                <p style="text-align: justify;">
                  Kini, Litha & Co sudah memiliki ratusan armada untuk melayani 18 trayek di tiga provinsi di Sulawesi, yaitu Sulawesi Selatan, Sulawesi Barat, dan Sulawesi Tengah. Meskipun begitu, Litha & Co tetap menjalankan bisnis dari kantor pusatnya yang berlokasi di Jl. Urip Sumoharjo No. 15, Tello Baru, Panakkukang, Kota Makassar, Sulawesi Selatan.
                </p>
                <p style="text-align: justify;">
                  Dari ratusan armadanya tersebut, Litha & Co menawarkan empat tipe kelas bus, yaitu ekonomi non-AC, ekonomi AC, VIP, dan eksekutif. Bus ekonomi non-AC paling banyak dicari karena menawarkan tarif terjangkau dengan kapasitas kursi 30 – 40 unit. Agar dapat merasakan kenyamanan lebih dalam perjalanan kelas ekonomi, pengguna juga bisa melakukan perjalanan dengan tiket kelas ekonomi AC yang menawarkan tambahan fasilitas AC dan hiburan.
                </p>
                <p style="text-align: justify;">
                  Di sisi lain, penumpang kelas VIP dapat menikmati fasilitas AC, TV LED, bantal, selimut, dan kursi yang dilengkapi dengan sandaran kaki. Sementara itu, layanan bus eksekutif dapat memberikan pengalaman perjalanan yang terasa mewah dan nyaman bagi setiap penumpang, terutama dalam perjalanan jarak jauh, berkat tersedianya area kursi paling luas dibandingkan kelas bus lainnya.
                </p>
                <p style="text-align: justify;">
                  Berkat kualitas pelayanan yang baik dan konsisten, Litha & Co berhasil dikenal sebagai operator bus terbaik di Sulawesi pada 1990-an. Selain itu, Litha & Co juga senantiasa berusaha memperbaiki kualitasnya hingga berhasil meraih sejumlah penghargaan bergengsi, seperti penghargaan sebagai perusahaan angkutan AKAP dengan pelayanan ekonomi terbaik dari Menteri Perhubungan Republik Indonesia pada 2012 dan 2014, Certificate of Excellence pada 2015 dan 2017 dari Mercedes-Benz Bus Club of Millionaires, dan Bus AKAP Terbaik 2017 versi Bismania.
                </p>
                <hr/>
                <div class='row'>
                  <div class='col-md-5 mr-3'>
                    <GmapMap 
                      :center="this.center"
                      :zoom="15" 
                      style="width: 100%; height: 300px"> 
                      <GmapMarker
                      :position="this.center"
                        :clickable="false"
                        :draggable="false"
                      />
                    </GmapMap>
                  </div>
                  <div class='col-md-6'>
                    <h4>LITHA & Co</h4>
                    
                      <address>
                       
                        <a  style="font-size:15px" href="https://www.google.com/maps/search/litha+%26+co/@-5.1464086,119.4662099,18z" target="_blank"> <i class="fa fa-map-marker text-info"> </i> Jl. Urip Sumoharjo No.km.7</a><br>
                        <a style="font-size:15px" href="https://www.instagram.com/bus_litha/"  target="_blank"><i class="fa fa-instagram text-primary"></i>LITHA & Co</a><br>
                        <a style="font-size:15px" href="mailto:lithaup@yahoo.com"><i class="fa fa-envelope text-danger"></i> lithaup@yahoo.com</a><br>
                        <a style="font-size:15px" href="tel:082233999963"><i class="fa fa-mobile text-success"></i>0822-3399-9963</a><br>
                        <a style="font-size:15px" href="tel:082233999946"><i class="fa fa-mobile text-success"></i>0822-3399-9946</a><br>
                        <a style="font-size:15px" href="tel:0411442263"><i class="fa fa-mobile text-success"></i>0411 - 442263</a><br>
                      </address>
                    
                  </div>
                </div>
                
                <div></div>
              
              </div>
            </div>
           </div>
        </div>
        </section>
      <Footer />
    </div>
</template>

<script>

import { gmapApi } from 'gmap-vue';
import Navbar from '../layout/Navbar.vue';
import Footer from '../layout/Footer.vue';
import Galery from '../components/GaleryItem'
export default {
  components: { Navbar, Footer, Galery },
  name: "Galeri",
  data() {
    return {
      center: { lat: -5.146233,  lng: 119.467343 },
      markers: [],
      
    }
  },
  methods: {
    
  },
  computed: {
    // The below example is the same as writing
    // google() {
    //   return gmapApi();
    // },
    google: gmapApi,
  },
  
};
</script>

<style scoped>
.about {
  background: url('https://static.vecteezy.com/system/resources/thumbnails/000/626/167/original/Geometric_abstract_grey_background_for_bussines_templates_website_wallpapers.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
 
}
.rows {
   padding-bottom: 80px;
}
</style>

