<template>
  <div class="col-md-4 mt-5">
    <div class="jurnal-item" @click="modals.modal1 = true">
      <a data-fancybox data-toggle="modal" href="javascript:;">
        <div class="jurnal-featured"><img :src="cover" alt="galeri" class="img-fluid img-gallery" style="border-radius: 10px"></div>
      </a>
    </div> 
    <modal :show.sync="modals.modal1">
      <div class="img-lightbox">
        <img :src="cover" class="img-fluid">
      </div>
      <div class="content-lightbox">
        <div class="content-lightbox-date">{{ idBus }}</div>
        <div class="content-lightbox-title">{{ policeNo }}</div>
        <div class="content-lightbox-desc">
          {{ vechileType }}
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
export default {
  components:{
    Modal
  },
  props: [
    'createdAt',
    'idBus',
    'vechileType',
    'cover',
    'modalId',
    'modalTarget',
    'id',
    'policeNo'
  ],
  data() {
    return {
      modals: {
        modal1: false,
      }
    };
  }, 
}
</script>

<style>
</style>