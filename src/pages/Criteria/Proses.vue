<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
            <card>
                <div class="row">
                <div class="col-md-7">
                    <h4 slot="header" class="card-title">Proses Pembobotan</h4>
                </div>
                <div class="col-md-5 text-right">
                    <router-link to="/admin/criteria/"><button type="button" class="btn btn-primary btn-fill btn-sm"><i class="fa fa-backward" aria-hidden="true"></i></button></router-link>
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
                    <v-client-table :columns="columns" :data="result || []" :options="options">
                    <template slot="Tindakan" slot-scope="props" class="text-center">
                    <a  @click="selectInput(props.row)"> Lihat Detail   </a>&nbsp; 
                    <a  @click="selectInput(props.row)" v-show="props.index % allData.iterations  === 0"> | &nbsp; Weight Error: {{props.row.weightError}} | Total Error: {{props.row.totalError}} </a>&nbsp; 
                        </template>
                    </v-client-table>
                </div>
            </card>
            </div>
          <div class="col-md-4">
        </div>
      </div>
    </div>
    

    <div class="modal fade "
        v-show="show" 
        :class="[{'show d-block': show}, {'d-none': !show}]"
        id="exampleModal" 
        tabindex="-1" 
        aria-labelledby="exampleModalLabel" 
        aria-hidden="show"
      >
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel"> View Data Proses </h5>
            </div>
            
            <div class="modal-body container">
                
                Data Awal
                <table class="table table-striped" style='font-family:"Courier New", Courier, monospace; font-size:65%' >
                    <thead>
                        <tr>
                            <th v-for="item in initialData" :key=item._id scope="col">{{item.alias}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td v-for="item in initialData" :key=item._id>{{item.initialWeight}}</td>
                    </tbody> 
                </table>

                Data W Baru
                <table class="table table-striped" style='font-family:"Courier New", Courier, monospace; font-size:65%'>
                    <thead>
                        <tr>
                            <th v-for="item in selectView.wNew" :key=item._id scope="col">{{item.alias}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td v-for="item in selectView.wNew" :key=item._id>{{item.initialWeight}}</td>
                    </tbody> 
                </table>

                Data Pakar Input
                <table class="table table-striped" style='font-family:"Courier New", Courier, monospace; font-size:65%'>
                    <thead>
                        <tr>
                            <th v-for="item in selectView.wInput" :key=item._id scope="col">{{item.alias}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td v-for="item in selectView.wInput" :key=item._id>{{item.initialWeight}}</td>
                    </tbody> 
                </table>

                 Data WN * XN
                <table class="table table-striped" style='font-family:"Courier New", Courier, monospace; font-size:65%'>
                    <thead>
                        <tr>
                            <th v-for="item in selectView.wnxn" :key=item._id scope="col">{{item.alias}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td v-for="item in selectView.wnxn" :key=item._id>{{item.initialWeight}}</td>
                    </tbody> 
                </table>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal" @click="closeModal">Close</button>
              <!-- <button type="button" class="btn btn-primary btn-sm" @click="saveUpdate">Simpan</button> -->
            </div>
          </div>
        </div>
      </div>
    
  </div>
 
</template>
<script>
  import notification from "@/components/NotificationPlugin/Notification.vue"
  import Card from 'src/components/Cards/Card.vue'
  import _ from 'lodash'
  export default {
    name: 'ViewData',
    components: {
      Card,
     
    },
    data () {
      return {
        show: false,
        result: [],
        title: 'halooo',
        data: {},
        selectView: {},
        isLoading: false,
        selectUpdated: {},
        show: false,
        initialData: [],
        allData: {},
        columns: ['name',  'yIn', 'yOut', 'weightError', 'Tindakan'],
        options: {
          headings: {
            name: 'Kriteria',
            initialWeight: 'Bobot Awal',
            yIn: 'y In',
            yOut: 'y Output',
            weightError: 'Weight Error (y-t)'
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
          
          this.result = response.data.result
          this.initialData = response.data.data
          this.allData = response.data
          this.isLoading = false
       
        })
        .catch(err =>{
          console.log(err);
        })
      },

        selectInput(data){
            this.show = true
            this.selectView=data
           
        },

        closeModal() {
            this.show = false
            this.selectView=[]
        },

        

      
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

.modal {
   position: absolute;
   top: 10px;
   right: 100px;
   bottom: 0;
   left: 0;
   z-index: 10040;
   overflow: auto;
   overflow-y: auto;
}


</style>
