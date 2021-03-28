<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <TableCriteria />
        </div>
        <div class="col-md-4">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import TableCriteria from './Criteria/index.vue'

  export default {
    name:'criteria',
    components: {
      TableCriteria,
    }
  }

</script>
<style>

</style>
