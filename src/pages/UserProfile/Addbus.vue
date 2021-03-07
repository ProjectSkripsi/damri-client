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
                    <div class="col-md-3" >
                        
                    </div>
                    <div class="col-md-2">
                        <div class="form-group">
                            <label for="formGroupExampleInput" class="pt-2">ID Bus: </label>
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
                <div class="row">
                    <div class="col-md-3">
                    </div>
                    <div class="col-md-2">
                        <div class="form-group">
                            <label class="pt-2">Foto Bus:</label>
                        </div>
                    </div>
                    <div class="col-md-4">                           
                        <a-upload
                            list-type="picture"
                            :default-file-list="fileList"
                            :customRequest="uploadfiles"
                            @change="handleChange"
                            :multiple="false"
                            :remove="removeFile"
                            :download="test"
                            accept="image/png, image/jpeg"
                        >
                        <a-button> 
                            <a-icon type="upload" /> upload </a-button>
                        </a-upload>
                        
                    </div>
                    <div class="col-md-3">
                    </div>
                </div>
                <div class="col-md-12 text-center mt-3">
                    <button class="btn btn-success btn-sm" @click.prevent="saveBus"><i class="fa fa-floppy-o" aria-hidden="true"></i> simpan</button>
                    <!-- <button class="btn btn-success btn-sm" @click.prevent="test"><i class="fa fa-floppy-o" aria-hidden="true"></i> test</button> -->
                </div>
            </form>
            
        </card>
    </div>
</div>
</template>

<script>
import notification from "@/components/NotificationPlugin/Notification.vue"
import axios from 'axios';
export default {
    data() {
        return {
            idBus: '',
            vechileType: '',
            policeNo: '',
            imageUrl: [],
            fileList: [],
            
        }
    },

    methods: {
        test() {
            console.log('this.fileList')
        },
        removeFile(e){
            console.log('delete', e);
        },
        saveBus(){
            if(this.idBus && this.vechileType && this.policeNo && this.imageUrl ) {
                this.$axios({
                    url: `/api/bus`,
                    method: `post`,
                    data: {
                        idBus: this.idBus,
                        vechileType: this.vechileType,
                        policeNo: this.policeNo,
                        imageUrl: this.imageUrl
                    },
                    headers: {
                        token: localStorage.getItem('token')
                    }
                })
                .then(response =>{
                    this.idBus = ''
                    this.vechileType = ''
                    this.policeNo = ''
                    this.imageUrl= []
                    this.$notify({
                        component: notification,
                        message: `Sukses menambah data bus`,
                        icon: 'fa fa-check',
                        type: 'success'
                    })
                    window.location='/#/admin/bus/'
                })
                .catch(err =>{
                    this.$notify({
                        component: notification,
                        message: `Id Bus telah terdaftar`,
                        icon: 'fa fa-exclamation',
                        type: 'warning'
                    })
                })

            } else {
                this.$notify({
                    component: notification,
                    message: `Silahkan lengkapi data`,
                    icon: 'fa fa-exclamation',
                    type: 'warning'
                })
            }
        },
        uploadfiles({ onSuccess, onError, file }) {
            let formPicture = new FormData()
            formPicture.append('file', file)
             axios.post(`http://localhost:4000/api/upload/image`, formPicture,{
                headers: {
                    token: localStorage.getItem('token')
                }
             })
                
            .then((res) => {
                // console.log('response',res);
                this.imageUrl.push({url: res.data.url })
                onSuccess(null, file);
            })
            .catch(() => {
                console.log('error');
            });
        },

        handleChange(info) {
            // console.log('info', info);
            // this.fileList.push(info.file)
            // const status = info.file.status;
            // if (status !== 'uploading') {
            // // show update progress console.log(info.file, info.fileList);
            // }
            // if (status === 'done') {
            // // show success message
            // } else if (status === 'error') {
            // // show error message
            // }
        }
    },

}
</script>

<style scoped>
/* tile uploaded pictures */
.upload-list-inline >>> .ant-upload-list-item {
  float: left;
  width: 200px;
  margin-right: 8px;
}
.upload-list-inline >>> .ant-upload-animate-enter {
  animation-name: uploadAnimateInlineIn;
}
.upload-list-inline >>> .ant-upload-animate-leave {
  animation-name: uploadAnimateInlineOut;
}
</style>
