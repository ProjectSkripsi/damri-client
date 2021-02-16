<template>
    <card>
        <div class="row">
            <div class="col-md-7">
                <h4 slot="header" class="card-title">Hasil Pengecekan Bus</h4>
            </div>
            <div class="col-md-5 text-right">
                <!-- <router-link to="/admin/addteknisi/"><button type="button" class="btn btn-primary btn-fill btn-sm"><i class="fa fa-plus" aria-hidden="true"></i> teknisi</button></router-link> -->
            </div>
        </div><hr>
        <div class="bus mt-4" v-cloak>
            <v-client-table :columns="columns" :data="trueBus" :options="options">
                <template slot="Tindakan" slot-scope="props" class="text-center">
                    <router-link :to="{ name: 'pdfview', params: { id: props.row._id }}"> <i class="fa fa-file-pdf-o"></i> </router-link>
                    <a @click.prevent="handleDelete(props.row._id)" href="" class="fa fa-trash-o pt-1"></a>&nbsp;
                </template>
            </v-client-table>
        </div>
    </card>
</template>

<script>
import notification from "@/components/NotificationPlugin/Notification.vue"
import Card from 'src/components/Cards/Card.vue'
export default {
    components: {
        Card
    },

    data() {
        return {
            trueBus: [],
            columns: ['idBus','vechileType', 'policeNo', 'inspectionBy.name', 'updatedAt', 'result', 'Tindakan'],
            options: {
                headings: {
                    idBus: 'Kode Bus',
                    vechileType: 'Jenis Bus',
                    policeNo: 'No. Polisi',
                    inspectionBy: 'Pemeriksa',
                    updatedAt: 'Tanggal Pemeriksaan',
                    result: 'Hasil Pemeriksaan'
                },
                requestAdapter(data) {
                    return {
                    sort: data.orderBy ? data.orderBy : 'idBus',
                    direction: data.ascending ? 'asc' : 'desc'
                    }
                },
                templates: {
                },
                base:'glyphicon', up:'glyphicon-chevron-up', down:'glyphicon-chevron-down', is:'glyphicon-sort',
                uniqueKey: '_id',
                perPage: 10,
                perPageValues:[10],
                sortable: ['idBus', 'policeNo', 'updatedAt', 'result'],
                filterable: ['idBus','policeNo', 'inspectionBy', 'result']
            }
        }
    },

    methods: {
        inspectionResult(){
            this.$axios({
                url: `/api/bus/findtrue`,
                method: `get`,
                headers: {
                    token: localStorage.getItem('token')
                }
            })
            .then(response =>{
                this.trueBus = response.data
                // console.log(this.trueBus);
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
                        url: `/api/bus/${id}`,
                        method: `delete`,
                        headers: {
                            token: localStorage.getItem('token')
                        }
                    })
                    .then(response =>{
                        this.$notify({
                            component: notification,
                            message: `Sukses! Menghapus data bus`,
                            icon: 'fa fa-check',
                            type: 'warning'
                        })
                        this.inspectionResult()
                    })
                    .catch(err =>{
                        this.$notify({
                            component: notification,
                            message: `Gagal, menghapus data bus`,
                            icon: 'fa fa-check',
                            type: 'danger'
                        })
                    })
                } else {
                    this.$notify({
                        component: notification,
                        message: `Batal menghapus data teknisi`,
                        icon: 'fa fa-trash-o',
                        type: 'info'
                    })
                }
            })
            .catch(err =>{
                console.log(`err`);
            })
        },
    },

    mounted() {
        this.inspectionResult()
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