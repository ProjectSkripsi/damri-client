<template>
    <div class="content">
    <div class="container-fluid">
        <card>
            <div class="row">
                <div class="col-md-7">
                    <h4 slot="header" class="card-title">Edit Data Bus</h4>
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
                        <input type="text" class="form-control form-control-sm" v-model="editBus.idBus" placeholder="Id Bus">
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
                            <input type="text" v-model="editBus.vechileType" placeholder="Jenis Kendaraan" class="form-control form-control-sm">
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
                            <input type="text" v-model="editBus.policeNo" placeholder="DD1234TEST" class="form-control form-control-sm">
                        </div>
                    </div>
                    <div class="col-md-3">
                    </div>
                </div>
                <div class="col-md-12 text-center mt-3">
                    <button class="btn btn-success btn-sm" @click.prevent="handleEdit(editBus._id)"><i class="fa fa-floppy-o" aria-hidden="true"></i> simpan</button>
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
            editBus: {}
        }
    },
    methods: {
        getIdBus(){
            this.$axios({
                url: `/api/bus/${this.$route.params.id}`,
                method: `get`,
                headers: {
                    token: localStorage.getItem('token')
                }
            })
            .then(response=>{
                this.editBus = response.data
            })
            .catch(err =>{
                console.log(err);
            })
        },
        handleEdit(id){
            this.$axios({
                url: `/api/bus/${id}`,
                method: `put`,
                data: this.editBus,
                headers: {
                    token: localStorage.getItem('token')
                }
            })
            .then(response =>{
                this.$notify({
                    component: notification,
                    message: `Sukses update data bus`,
                    icon: 'fa fa-check',
                    type: 'success'
                })
                this.$router.go(-1)
            })
            .catch(err =>{
                this.$notify({
                    component: notification,
                    message: `Gagal update data bus`,
                    icon: 'fa fa-exclamation',
                    type: 'warning'
                })
            })

        }
    },

    mounted() {
        this.getIdBus()
    },

}
</script>

<style>

</style>
