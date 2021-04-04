<template>
  <card>
        <div class="row">
      <div class="col-md-7">
        <h4 slot="header" class="card-title">Pembobotan Kriteria</h4>
      </div>
      <div class="col-md-5 text-right">
        <router-link :to="{ name: 'View Proccess'}"><button type="button" class="btn btn-primary btn-fill btn-sm"> Lihat Proses</button></router-link>
      </div>
    </div><hr>
    <div class="bus mt-4" v-cloak>
    <div v-show="isLoading" class="overlay">
      <div class="d-flex justify-content-center">  
        <div class="spinner-grow text-primary" role="status" style="width: 3rem; height: 3rem; z-index: 20;">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
      <v-client-table :columns="columns" :data="userList" :options="options">
        <template slot="Tindakan" slot-scope="props" class="text-center">
          <router-link :to="{ name: 'Add Criteria', params: { data: props.row, isUpdate: true }}"> <i class="fa fa-pencil-square-o"></i> </router-link>&nbsp;
         
        </template>
      </v-client-table>
    </div>
  </card>
</template>
<script>
  import notification from "@/components/NotificationPlugin/Notification.vue"
  import Card from 'src/components/Cards/Card.vue'

  export default {
    name: 'TableCriteria',
    components: {
      Card
    },
    data () {
      return {
        userList: [],
        columns: ['name', 'alias', 'oldWeight', 'repairWeight', 'Tindakan'],
        isLoading: false,
        
        options: {
          headings: {
            name: 'Kriteria',
            alias: 'Alias',
            oldWeight: 'Bobot Awal',
            repairWeight: 'Bobot Perbaikan'
           
          },
          requestAdapter(data) {
            return {
              sort: data.orderBy ? data.orderBy : initialWeight,
              direction: data.ascending ? 'asc' : 'desc'
            }
          },
          templates: {
          },
          base:'glyphicon', up:'glyphicon-chevron-up', down:'glyphicon-chevron-down', is:'glyphicon-sort',
          uniqueKey: '_id',
          perPage: 23,
          perPageValues:[23],
          sortable: ['name', 'initialWeight', ],
          filterable: ['name','initialWeight', ]
        }
      }
    },
    methods: {
      getCriteria(){
        this.isLoading = true
        this.$axios({
          url: `/api/criteria/test`,
          method: `get`,
          headers: {
            token: localStorage.getItem('token')
          }
        })
        .then(response=>{
          this.userList = response.data.data
          
          this.isLoading = false
        })
        .catch(err =>{
          console.log(err);
        })
      },

      handleDelete(id){
        swal({
          title: `Warning!`,
          text: 'Yakin menghapus data ini?',
          icon: 'warning',
          buttons: true,
          dangerMode: true
        })
        .then(willDelete =>{
          if(willDelete){
            this.$axios({
              url: `/api/criteria/${id}`,
              method: 'delete',
              headers: {
                token: localStorage.getItem('token')
              }
            })
            .then(response =>{
              this.$notify({
                component: notification,
                message: `Sukses! Menghapus data kriteria`,
                icon: 'fa fa-check',
                type: 'warning'
              })
              this.getCriteria()
            })
            .catch(err =>{
              this.$notify({
                component: notification,
                message: `Gagal , menghapus data kriteria`,
                icon: 'fa fa-check',
                type: 'danger'
              })
            })
          } else {
            this.$notify({
              component: notification,
              message: `Batal menghapus data kriteria`,
              icon: 'fa fa-trash-o',
              type: 'info'
            })
          }
        })
        .catch(err =>{
          console.log(`iniiii`);
        })
      }
    },


    mounted() {
      this.getCriteria()
    },


  }

</script>
<style>
.VuePagination {
  text-align: center;
  font-size: 12px;
}
.vue-pagination-ad {
  text-align: center;
  font-size: 10px;
}
.pagination{
  font-size: 12px;
}
.VuePagination__count{
  font-size: 12px;
}
[v-cloak] {
  display:none;
}
.vue-title {
  text-align: center;
  margin-bottom: 10px;
}
.card-body {
  font-size: 12px;
}

.overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 1000;
    top: 40%;
    left: 0px;
    opacity: 0.5;
    filter: alpha(opacity=50);
 }


</style>
