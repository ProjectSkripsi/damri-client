<template>
  <card>
    <div class="row">
      <div class="col-md-7">
        <h4 slot="header" class="card-title">Jadwal Bus</h4>
      </div>
      <div class="col-md-5 text-right">
       
        <!-- <router-link to="/admin/add-schedule-bus/"><button type="button" class="btn btn-primary btn-fill btn-sm"><i class="fa fa-plus" aria-hidden="true"></i> Jadwal</button></router-link> -->
      </div>
    </div><hr>
    <div class="bus mt-4" v-cloak>
      <v-client-table :columns="columns" :data="schedules" :options="options">
        <template slot="No. Polisi" slot-scope="props" class="text-center">
          
          <router-link v-show="_.get(props, 'row.busId.result', '')" :to="{ name: 'BusDetail', params: { id: _.get(props, 'row.busId._id', '') }}"> {{props.row.busId.policeNo}} </router-link>&nbsp;
         
          <div v-show="!props.row.busId.result"> {{ props.row.busId.policeNo}} </div>
          
        </template>
      </v-client-table>
    </div>
  </card>
</template>
<script>
  import _ from 'lodash'
  import Card from '@/components/Cards/Card.vue'
  import notification from "@/components/NotificationPlugin/Notification.vue"
  export default {
    components: {
      Card
    },
    data () {
      return {
        busList: [],
        columns: ['day', 'busId.idBus', 'departure', 'destination', 'hoursDeparture', 'busId.result' , 'No. Polisi'],
        options: {
          headings: {
            'busId.idBus': 'Id Bus',
            departure: 'Keberangkatan',
            destination: 'Tujuan',
            hoursDeparture: 'Jam Berangkat',
            'busId.result': 'HASIL PEMERIKSAAN',
            day: 'Hari'
          },
          requestAdapter(data) {
            return {
              sort: data.orderBy ? data.orderBy : 'day',
              direction: data.ascending ? 'asc' : 'desc'
            }
          },
          templates: {
          },
          uniqueKey: '_id',
          perPage: 10,
          perPageValues:[10],
          sortable: ['day', 'busId.idBus', 'destination'],
          filterable: ['day','busId.idBus', 'destination']
        },
        schedules: []
      }
    },

    methods: {
      getSchedules(){
        this.$axios.get(`/api/schedule`, {
          headers: {
            token: localStorage.getItem('token')
          }
        })
        .then(response =>{
          
          this.schedules = response.data
        })
        .catch(err =>{
          console.log(`inixxxx`,err);
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
              url: `/api/schedule/${id}`,
              method: `delete`,
              headers: {
                token: localStorage.getItem('token')
              }
            })
            .then(response =>{
              this.$notify({
                component: notification,
                message: `Sukses! Menghapus jadwal`,
                icon: 'fa fa-check',
                type: 'warning'
              })
              this.getSchedules()
            })
            .catch(err =>{
              this.$notify({
                component: notification,
                message: `Gagal , menghapus jadwal`,
                icon: 'fa fa-check',
                type: 'danger'
              })
            })
          } else {
            this.$notify({
              component: notification,
              message: `Batal menghapus jadwal`,
              icon: 'fa fa-trash-o',
              type: 'info'
            })
          }
        })
        .catch(err =>{
          console.log(`iniiii`);
        })
      },
    },

    created() {
      this.getSchedules()
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
