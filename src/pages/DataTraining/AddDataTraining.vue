<template>
<div class="content">
    <div class="container-fluid">
        <card>
            <div class="row">
                <div class="col-md-7">
                    <h4 slot="header" class="card-title">Tambah Data Training</h4>
                </div>
                <div class="col-md-5 text-right">
                    <router-link to="/admin/data-training/"><button type="button" class="btn btn-primary btn-fill btn-sm"><i class="fa fa-backward" aria-hidden="true"></i></button></router-link>
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
                        <input type="text" class="form-control form-control-sm" v-model="training.name" placeholder="Nama Kriteria">
                    </div>
                    <div class="col-md-3">
                    </div>
                </div>
                
                <div class="row" v-for="item in data" :key=item._id>
                    <div class="col-md-3">
                    </div>
                    <div class="col-md-2">
                        <div class="form-group">
                            <label class="pt-2"> {{item.name}} :</label>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div>
                            <input type="number" v-model="item.initialWeight" placeholder="0" class="form-control form-control-sm">
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
    
    methods: {
        save(){
            const { training, data } =  this
            let obj = data.filter(o => o.initialWeight === '');
            const validItem = obj.length !== 0
            console.log(validItem);
            training.data = data
            if(validItem || training.name === '') {
                this.$notify({
                    component: notification,
                    message: `Silahkan masukkan data yang lengkap`,
                    icon: 'fa fa-check',
                    type: 'warning'
                })
            } else {
                this.$axios({
                    url: `/api/data-training`,
                    method: `post`,
                    data: this.training,
                    headers: {
                        token: localStorage.getItem('token')
                    }
                })
                .then(response =>{
                    this.$notify({
                        component: notification,
                        message: `Sukses menambahkan data `,
                        icon: 'fa fa-check',
                        type: 'success'
                    })
                    this.$router.go(-1)
                })
                .catch(err =>{
                    this.$notify({
                        component: notification,
                        message: `Terjadi Kesalahan`,
                        icon: 'fa fa-check',
                        type: 'danger'
                    })
                
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
    data() {
        return {
            training: {
                name: '',
            },
            data: [
            {
                name: 'Oli Mesin',
                alias: 'W1',
                initialWeight: '',
            },
            {
                
                name: 'Air Radiator',
                alias: 'W2',
                initialWeight: '',
            },
            {
                
                name: 'Minyak Rem',
                alias: 'W3',
                initialWeight: '',
            },
            {
                
                name: 'Air Baterai/Kondisi batteray',
                alias: 'W4',
                initialWeight: '',
               
            },
            {
                
                name: 'AC',
                alias: 'W5',
                initialWeight: '',
                
            },
            {
                
                name: 'Ban dan Tekanan Ban',
                alias: 'W6',
                initialWeight: '',
                
            },
            {
                
                name: 'Kotak P3K',
                alias: 'W7',
                initialWeight: '',
                
            },
            {
                
                name: 'Plat No Polisi',
                alias: 'W8',
                initialWeight: '',
               
            },
            {
                
                name: 'Lampu Besar',
                alias: 'W9',
                initialWeight: '',
                
            },
            {
                
                name: 'Lampu Rem',
                alias: 'W10',
                initialWeight: '',
                
            },
            {
                
                name: 'Lampu Bahaya',
                alias: 'W11',
                initialWeight: '',
                
            },
            {
                
                name: 'Klakson',
                alias: 'W12',
                initialWeight: '',
                
            },
            {
                
                name: 'Sabu Pengaman',
                alias: 'W13',
                initialWeight: '',
                
            },
            {
                
                name: 'Rem Tangan',
                alias: 'W14',
                initialWeight: '',
                
            },
            {
                
                name: 'Dongkrak',
                alias: 'W15',
                initialWeight: '',
                
            },
            {
                
                name: 'Kunci Roda',
                alias: 'W16',
                initialWeight: '',
                
            },
            {
                
                name: 'Segitiga Pengaman',
                alias: 'W17',
                initialWeight: '',
                
            },
            {
                
                name: 'Spion Luar Kiri dan Kanan',
                alias: 'W18',
                initialWeight: '',
                
            },
            {
                
                name: 'Spion Dalam',
                alias: 'W19',
                initialWeight: '',
                
            },
            {
                
                name: 'Lampu Sein Kiri dan Kanan',
                alias: 'W20',
                initialWeight: '',
                
            },
            {
                
                name: 'Target',
                alias: 'target',
                initialWeight: '',
                
            }],
            
        }
    },

}
</script>
