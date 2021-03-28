<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <tabel-technician>
          </tabel-technician>
        </div>
        <div class="col-md-4">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import TabelTechnician from './Technician/TabelTechnician.vue'
  import UserCard from './MasterBus/UserCard.vue'

  export default {
    components: {
      TabelTechnician,
      UserCard
    }
  }

</script>
<style>

</style>
