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
                            :fileList="fileList"
                            :customRequest="uploadfiles"
                            @change="handleChange"
                            :multiple="false"
                            :remove="removeFileList"
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

                <div class="row mt-4 ml-4">
               
                    <div class="image-area mr-4 mt-4" v-for="bust in imageUrl" :key=bust._id> 
                        <img :src=bust.url  alt="Preview"  class="center-block rounded">
                        <a  class="remove-image" @click.prevent="removeFile(bust._id)" style="display: inline;">&#215;</a>
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
import axios from 'axios';
export default {
    data() {
        return {
            editBus: {},
            imageUrl: [],
            fileList: []
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
                this.imageUrl = response.data.imageUrl || []
               
            })
            .catch(err =>{
                console.log(err);
            })
        },
        
        handleEdit(id){
            const dataImage = this.imageUrl.map(function(item) { 
                delete item._id; 
                return item; 
            });
            
            this.editBus.imageUrl = dataImage
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

        },

        uploadfiles({ onSuccess, onError, file }) {
            let formPicture = new FormData()
            formPicture.append('file', file)
           
            axios.post(`https://bp-paud.arul21.com/api/v1/upload/image`, formPicture,{
                headers: {
                    token: localStorage.getItem('token')
                }
            })
                
            .then((res) => {
                this.imageUrl.push({_id: file.uid, url: res.data.fileUrl})
                onSuccess(null, file);
            })
            .catch(() => {
                console.log('error');
            });
        },

        removeFile(e){
            this.imageUrl = this.imageUrl.filter((item) => item._id !== e)
           
        },

        test() {
            console.log('this.fileList')
        },

        handleChange(info) {
           
           
        },
        removeFileList(e){
           
        }
    },

    mounted() {
        this.getIdBus()
    },

}
</script>

<style scoped>
.image-area {
    position: relative;
    width: 20%;
    background: #333;
    border-radius: 5px
}
.image-area img{
    max-width: 100%;
    height: auto;
}
.remove-image {
    display: none;
    position: absolute;
    top: -10px;
    right: -10px;
    border-radius: 10em;
    padding: 2px 6px 3px;
    text-decoration: none;
    font: 700 21px/20px sans-serif;
    background: #555;
    border: 3px solid #fff;
    color: #FFF;
    box-shadow: 0 2px 6px rgba(0,0,0,0.5), inset 0 2px 4px rgba(0,0,0,0.3);
    text-shadow: 0 1px 2px rgba(0,0,0,0.5);
    -webkit-transition: background 0.5s;
    transition: background 0.5s;
}
.remove-image:hover {
    background: #E54E4E;
    padding: 3px 7px 5px;
    top: -11px;
    right: -11px;
}
.remove-image:active {
    background: #E54E4E;
    top: -10px;
    right: -11px;
}
</style>


