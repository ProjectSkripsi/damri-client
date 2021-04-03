<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <DataTraining />
        </div>
        <div class="col-md-4">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import DataTraining from './DataTraining/index.vue'

  export default {
    name:'criteria',
    components: {
      DataTraining,
    }
  }

</script>
<style>

</style>
