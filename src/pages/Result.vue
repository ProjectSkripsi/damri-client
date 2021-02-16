<template>
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <card>
                        <table-hasil/>
                    </card>
                </div>
                <div class="col-md-4">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  
import UserCard from './UserProfile/UserCard.vue'
import TableHasil from './Result/TableHasil.vue'

export default {
    components: {
        UserCard,
        TableHasil
    }
}

</script>
<style>

</style>
