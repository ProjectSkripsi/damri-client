<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <BusTable />
        </div>
        <div class="col-md-4">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import BusTable from './MasterBus/BusTable.vue'
  
  export default {
    components: {
      BusTable,
  
    }
  }

</script>
<style>

</style>
