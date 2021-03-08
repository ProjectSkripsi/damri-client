<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <ScheduleList>
          </ScheduleList>
        </div>
        <div class="col-md-4">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import ScheduleList from './ScheduleTable'
  

  export default {
    components: {
      ScheduleList,
     
    }
  }

</script>
<style>

</style>
