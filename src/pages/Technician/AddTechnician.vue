<template>
<div class="content">
    <div class="container-fluid">
        <card>
            <div class="row">
                <div class="col-md-7">
                    <h4 slot="header" class="card-title">Tambah Data Teknisi</h4>
                </div>
                <div class="col-md-5 text-right">
                    <router-link to="/admin/teknisi/"><button type="button" class="btn btn-primary btn-fill btn-sm"><i class="fa fa-backward" aria-hidden="true"></i></button></router-link>
                </div>
            </div><hr>
            <form>
                <div class="row">
                    <div class="col-md-3">
                    </div>
                    <div class="col-md-2">
                        <div class="form-group">
                            <label for="formGroupExampleInput" class="pt-2">Nama Lengkap:</label>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <input type="text" class="form-control form-control-sm" v-model="technician.name" placeholder="Nama Lengkap">
                    </div>
                    <div class="col-md-3">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3">
                    </div>
                    <div class="col-md-2">
                        <div class="form-group">
                            <label class="pt-2">ID Teknisi:</label>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div>
                            <input type="text" v-model="technician.username" placeholder="Username" class="form-control form-control-sm">
                        </div>
                    </div>
                    <div class="col-md-3">
                    </div>
                </div>
                <!-- <div class="row">
                    <div class="col-md-3">
                    </div>
                    <div class="col-md-2">
                        <div class="form-group">
                            <label class="pt-2">Password:</label>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div>
                            <input type="password" v-model="technician.password" placeholder="Password" class="form-control form-control-sm">
                            <small class="text-muted">minimal 6 karakter</small>
                        </div>
                    </div>
                    <div class="col-md-3">
                    </div>
                </div> -->
                <div class="row">
                    <div class="col-md-3">
                    </div>
                    <div class="col-md-2">
                        <div class="form-group">
                            <label class="pt-2">Alamat:</label>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div>
                            <input type="text" v-model="technician.address" placeholder="Alamat" class="form-control form-control-sm">
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
                            <label class="pt-2">No. Handphone:</label>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div>
                            <input type="text" v-model="technician.contact" placeholder="No.Handphone" class="form-control form-control-sm">
                        </div>
                    </div>
                    <div class="col-md-3">
                    </div>
                </div>
                <div class="col-md-12 text-center mt-3">
                    <button class="btn btn-success btn-sm" @click.prevent="save"><i class="fa fa-floppy-o" aria-hidden="true"></i> simpan</button>
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
            technician: {}
        }
    },
    methods: {
        save(){
            const { isUpdate } = this.$route.params
            if (!isUpdate) {
                this.$axios({
                    url: `/api/users/add-technician`,
                    method: `post`,
                    data: this.technician,
                    headers: {
                        token: localStorage.getItem('token')
                    }
                })
                .then(response =>{
                    
                    this.technician = {}
                    this.$notify({
                        component: notification,
                        message: `Sukses menambahkan data teknisi`,
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
                    } else if (err.response.status === 400) {
                        this.$notify({
                            component: notification,
                            message: `Username telah terdaftar`,
                            icon: 'fa fa-check',
                            type: 'warning'
                        })
                    } else if (err.response.status === 500) {
                        this.$notify({
                            component: notification,
                            message: `Silahkan masukkan data yang lengkap`,
                            icon: 'fa fa-check',
                            type: 'danger'
                        })
                    }
                })
            } else {
                console.log('update');
                this.$axios({
                    url: `/api/users/update-technician/${this.technician._id}`,
                    method: `post`,
                    data: this.technician,
                    headers: {
                        token: localStorage.getItem('token')
                    }
                })
                .then(response =>{
                    this.technician = {}
                    this.$notify({
                        component: notification,
                        message: `Sukses update data teknisi`,
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
                    } else if (err.response.status === 400) {
                        this.$notify({
                            component: notification,
                            message: `Username telah terdaftar`,
                            icon: 'fa fa-check',
                            type: 'warning'
                        })
                    } else if (err.response.status === 500) {
                        this.$notify({
                            component: notification,
                            message: `Silahkan masukkan data yang lengkap`,
                            icon: 'fa fa-check',
                            type: 'danger'
                        })
                    }
                })
            }
        }
    },
    mounted() {
  
        const { isUpdate } = this.$route.params
        if (isUpdate) {
            this.technician = this.$route.params.data

        }
    },

}
</script>
