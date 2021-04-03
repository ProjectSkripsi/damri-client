<template>
  <card>
   
    <div class="row">
      <div class="col-md-7">
        <h4 slot="header" class="card-title">Data Training</h4>
      </div>
      <div class="col-md-5 text-right">
        <router-link to="/admin/data-training/add-data-training/"><button type="button" class="btn btn-primary btn-fill btn-sm"><i class="fa fa-plus" aria-hidden="true"></i> Data Training</button></router-link>
      </div>
    </div><hr>
    <div class="bus mt-4" v-cloak>
      <v-client-table :columns="columns" :data="userList" :options="options">
        <template slot="Tindakan" slot-scope="props" class="text-center">
           <router-link :to="{ path: '/admin/data-training/view-data-training', query: { id: props.row._id }}" > <i class="fa fa-eye"></i> </router-link>&nbsp;&nbsp;&nbsp;&nbsp;
         
          <a v-show="userList.length > 2" @click.prevent="handleDelete(props.row._id)" href="" class="fa fa-trash-o pt-1"></a>&nbsp;
        </template>
      </v-client-table>
    </div>
  </card>
</template>
<script>
  import notification from "@/components/NotificationPlugin/Notification.vue"
  import Card from 'src/components/Cards/Card.vue'

  export default {
    name: 'DataTraining',
    components: {
      Card
    },
    data () {
      return {
        userList: [],
        columns: ['name',   'Tindakan'],
        options: {
          headings: {
            name: 'Kriteria',
                    
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
          perPage: 20,
          perPageValues:[20],
          sortable: ['name'],
          filterable: ['name' ]
        }
      }
    },
    methods: {
      getCriteria(){
        this.$axios({
          url: `/api/data-training`,
          method: `get`,
          headers: {
            token: localStorage.getItem('token')
          }
        })
        .then(response=>{
          
          this.userList = response.data
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
              url: `/api/data-training/${id}`,
              method: 'delete',
              headers: {
                token: localStorage.getItem('token')
              }
            })
            .then(response =>{
              this.$notify({
                component: notification,
                message: `Sukses! Menghapus data `,
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


</style>
