<template>

  <div class="content">
    
      <div class="modal fade"
        v-show="show" 
        :class="[{'show d-block': show}, {'d-none': !show}]"
        id="exampleModal" 
        tabindex="-1" 
        aria-labelledby="exampleModalLabel" 
        aria-hidden="show"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel"> {{selectUpdated.name}} </h5>
            </div>
            <hr/>
            <div class="modal-body">
              <div class="row">
                    <div class="col-md-3">
                    </div>
                    <div class="col-md-2">
                        <div class="form-group">
                            <label class="pt-2">Bobot:</label>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div>
                            <input type="number" v-model="selectUpdated.initialWeight  " placeholder="Bobot" class="form-control form-control-sm">
                        </div>
                    </div>
                    <div class="col-md-3">
                    </div>
                </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal" @click="closeModal">Batal</button>
              <button type="button" class="btn btn-primary btn-sm" @click="saveUpdate">Simpan</button>
            </div>
          </div>
        </div>
      </div>
  
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
            <card>
                <div class="row">
                <div class="col-md-7">
                    <h4 slot="header" class="card-title">{{data.name}}</h4>
                </div>
                <div class="col-md-5 text-right">
                    <router-link to="/admin/data-training/"><button type="button" class="btn btn-primary btn-fill btn-sm"><i class="fa fa-backward" aria-hidden="true"></i></button></router-link>
                </div>
                </div><hr>
                <div class="bus mt-4" v-cloak>
                <v-client-table :columns="columns" :data="itemData || []" :options="options">
                  <template slot="Tindakan" slot-scope="props" class="text-center">
                  <a  @click="selectUpdate(props.row)"> <i class="fa fa-pencil-square-o"></i> </a>&nbsp;
                    </template>
                </v-client-table>
                </div>
            </card>
            </div>
          <div class="col-md-4">
        </div>
      </div>
    </div>
    
    
  </div>
 
</template>
<script>
  import notification from "@/components/NotificationPlugin/Notification.vue"
  import Card from 'src/components/Cards/Card.vue'
  
  export default {
    name: 'ViewData',
    components: {
      Card,
     
    },
    data () {
      return {
        itemData: [],
        title: 'halooo',
        data: {},
        selectUpdated: {},
        show: false,
        columns: ['name', 'alias', 'initialWeight',  'Tindakan'],
        options: {
          headings: {
            name: 'Kriteria',
            alias: 'Alias',
            initialWeight: 'Bobot Awal',
            
           
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
          perPage: 21,
          perPageValues:[21],
          sortable: ['name', 'initialWeight', ],
          filterable: ['name','initialWeight', ]
        }
      }
    },
    methods: {
      getTrainingById(){
        const { id } = this.$route.query
        this.$axios ({
          url: `/api/data-training/${id}`,
          method: `get`,
          headers: {
            token: localStorage.getItem('token')
          }
        })
        .then(response=>{
         
          this.itemData = response.data.data
          this.data = response.data
        })
        .catch(err =>{
          console.log(err);
        })
      },

      selectUpdate (data) {
        this.show = true
        this.selectUpdated = data
        console.log(this.selectUpdated);
      },
      
      closeModal() {
        this.show = false
        this.selectUpdated={}
      },

      saveUpdate() {
        const temp = this.itemData
        const newItem = []
        newItem.push(this.selectUpdated)
        const  res = temp.map(obj => newItem.find(o => o._id === obj._id) || obj);
        this.data.data = res
       
        this.$axios({
          url: `/api/data-training/${this.data._id}`,
          method: `PUT`,
          data: this.data,
          headers: {
              token: localStorage.getItem('token')
          }
        })
        .then(response =>{
          this.selectUpdated={}
          this.show = false
          this.getTrainingById()
          this.$notify({
            component: notification,
            message: `Sukses update data `,
            icon: 'fa fa-check',
            type: 'success'
          })
        })
        .catch(err =>{
          if(err.response.status === 403){
            this.$notify({
              component: notification,
              message: `Silahkan masukkan data yang lengkap`,
              icon: 'fa fa-check',
              type: 'warning'
            })
          }  else if (err.response.status === 500) {
            this.$notify({
              component: notification,
              message: `Silahkan masukkan data yang lengkap`,
              icon: 'fa fa-check',
              type: 'danger'
            })
          }
        })
      }      
    },


    mounted() {
      this.getTrainingById()
     
      this.$route.params.data
      
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
