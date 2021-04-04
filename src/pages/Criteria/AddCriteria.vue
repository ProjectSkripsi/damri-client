<template>
<div class="content">
    <div class="container-fluid">
        <card>
            <div class="row">
                <div class="col-md-7">
                    <h4 slot="header" class="card-title">Tambah Kriteria</h4>
                </div>
                <div class="col-md-5 text-right">
                    <router-link to="/admin/criteria/"><button type="button" class="btn btn-primary btn-fill btn-sm"><i class="fa fa-backward" aria-hidden="true"></i></button></router-link>
                </div>
            </div><hr>
            <form>
                <div class="row">
                    <div class="col-md-3">
                    </div>
                    <div class="col-md-2">
                        <div class="form-group">
                            <label for="formGroupExampleInput" class="pt-2">Nama Kriteria:</label>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <input type="text" class="form-control form-control-sm" v-model="criteria.name" placeholder="Nama Kriteria">
                    </div>
                    <div class="col-md-3">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3">
                    </div>
                    <div class="col-md-2">
                        <div class="form-group">
                            <label class="pt-2">Alias:</label>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div>
                            <input type="text" v-model="criteria.alias" placeholder="Alias" class="form-control form-control-sm">
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
                            <label class="pt-2">Bobot Sementara:</label>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div>
                            <input type="number" v-model="criteria.initialWeight" placeholder="Bobot Sementara" class="form-control form-control-sm">
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
            criteria: {}
        }
    },
    methods: {
        save(){
            const { isUpdate } = this.$route.params
            if (!isUpdate) {
                this.$axios({
                    url: `/api/criteria`,
                    method: `post`,
                    data: this.criteria,
                    headers: {
                        token: localStorage.getItem('token')
                    }
                })
                .then(response =>{
                    
                    this.criteria = {}
                    this.$notify({
                        component: notification,
                        message: `Sukses menambahkan data kriteria`,
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
                            message: `Error`,
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
                
                this.$axios({
                    url: `/api/criteria/${this.criteria._id}`,
                    method: `PUT`,
                    data: this.criteria,
                    headers: {
                        token: localStorage.getItem('token')
                    }
                })
                .then(response =>{
                    this.criteria = {}
                    this.$notify({
                        component: notification,
                        message: `Sukses update data kriteria`,
                        icon: 'fa fa-check',
                        type: 'success'
                    })
                     this.$router.go(-1)
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
            this.criteria = this.$route.params.data

        }
    },

}
</script>
