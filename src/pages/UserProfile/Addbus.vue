<template>
<div class="content">
    <div class="container-fluid">
        <card>
            <div class="row">
                <div class="col-md-7">
                    <h4 slot="header" class="card-title">Tambah Data Bus</h4>
                </div>
                <div class="col-md-5 text-right">
                    <router-link to="/admin/bus/"><button type="button" class="btn btn-primary btn-fill btn-sm"><i class="fa fa-backward" aria-hidden="true"></i></button></router-link>
                </div>
            </div><hr>
            <form>
                <div class="row">
                    <div class="col-md-3">
                    </div>
                    <div class="col-md-2">
                        <div class="form-group">
                            <label for="formGroupExampleInput" class="pt-2">ID Bus:</label>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <input type="text" class="form-control form-control-sm" v-model="idBus" placeholder="Id Bus">
                    </div>
                    <div class="col-md-3">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3">
                    </div>
                    <div class="col-md-2">
                        <div class="form-group">
                            <label class="pt-2">Jenis Kendaraan:</label>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div>
                            <input type="text" v-model="vechileType" placeholder="Jenis Kendaraan" class="form-control form-control-sm">
                        </div>
                    </div>
                    <div class="col-md-3">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3">
                    </div>
                    <div class="col-md-2">
                        <div class="form-group">
                            <label class="pt-2">No. Polisi:</label>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div>
                            <input type="text" v-model="policeNo" placeholder="DD1234TEST" class="form-control form-control-sm">
                        </div>
                    </div>
                    <div class="col-md-3">
                    </div>
                </div>
                <div class="col-md-12 text-center mt-3">
                    <button class="btn btn-success btn-sm" @click.prevent="saveBus"><i class="fa fa-floppy-o" aria-hidden="true"></i> simpan</button>
                </div>
            </form>
            
        </card>
    </div>
</div>
</template>

<script>
import notification from "@/components/NotificationPlugin/Notification.vue"
export default {
    data() {
        return {
            idBus: '',
            vechileType: '',
            policeNo: ''
        }
    },

    methods: {
        saveBus(){
            this.$axios({
                url: `/api/bus`,
                method: `post`,
                data: {
                    idBus: this.idBus,
                    vechileType: this.vechileType,
                    policeNo: this.policeNo
                },
                headers: {
                    token: localStorage.getItem('token')
                }
            })
            .then(response =>{
                this.idBus = ''
                this.vechileType = ''
                this.policeNo = ''
                this.$notify({
                    component: notification,
                    message: `Sukses menambah data bus`,
                    icon: 'fa fa-check',
                    type: 'success'
                })
            })
            .catch(err =>{
                this.$notify({
                    component: notification,
                    message: `Id Bus telah terdaftar`,
                    icon: 'fa fa-exclamation',
                    type: 'warning'
                })
            })
        }
    },

}
</script>

<style>

</style>
