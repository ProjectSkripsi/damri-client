<template>
<div class="content">
    <div class="container-fluid">
        <card>
            <div class="row">
                <div class="col-md-7">
                    <h4 slot="header" class="card-title">Tambah Jadwal Bus</h4>
                </div>
                <div class="col-md-5 text-right">
                    <router-link to="/admin/schedule-bus"><button type="button" class="btn btn-primary btn-fill btn-sm"><i class="fa fa-backward" aria-hidden="true"></i></button></router-link>
                </div>
            </div><hr>
            <form>
                <div class="row">
                    <div class="col-md-3" > 
                    </div>
                    <div class="col-md-2">
                        <div class="form-group">
                            <label for="formGroupExampleInput" class="pt-2">Bus: </label>
                        </div>
                    </div>
                    <div class="col-md-4">
                      <select class="form-control" v-model="busId">
                        <option v-for="bus in buses" :value="bus._id" :key="bus._id">
                          {{ bus.idBus }} - {{  bus.policeNo }}
                        </option>
                      </select>
                    </div>
                    
                    <div class="col-md-3">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3">
                    </div>
                    <div class="col-md-2">
                        <div class="form-group">
                            <label class="pt-2">Hari:  </label>
                        </div>
                    </div>
                    <div class="col-md-4">
                      <select class="form-control" v-model="day">
                        <option v-for="day in days" :value="day" :key="day">
                          {{ day }}
                        </option>
                      </select>
                    </div>
                    <div class="col-md-3">
                    </div>
                </div>
                  <div class="row">
                    <div class="col-md-3">
                    </div>
                    <div class="col-md-2">
                        <div class="form-group">
                            <label class="pt-2">Jam Keberangkatan:</label>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div>
                            <input type="text" v-model="hoursDeparture" placeholder="13:00 - 18:00" class="form-control form-control-sm">
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
                            <label class="pt-2">Keberangkatan:</label>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div>
                          <select class="form-control" disabled>
                            <option> {{ departure }}</option>
                          </select>
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
                            <label class="pt-2">Tujuan:</label>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div>
                          <select class="form-control"  v-model="destination">
                            <option value="Toraja">Toraja</option>
                            <option value="Palopo">Palopo</option>
                            <option value="Mamuju">Mamuju</option>
                          </select>
                        </div>
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

export default {
    data() {
      return {
        busId: '',
        day: '',
        hoursDeparture: '',
        departure: 'Makassar',
        buses: [],
        destination: '',
        days: [
          'Senin',
          'Selasa',
          'Rabu',
          'Kamis',
          'Jumat',
          'Sabtu',
          'Minggu'
        ]
      }
    },

    methods: {
      saveBus(){
        if(this.busId && this.day && this.hoursDeparture && this.destination ) {
          this.$axios({
            url: `/api/schedule/add`,
            method: `post`,
            data: {
              busId: this.busId,
              day: this.day,
              hoursDeparture: this.hoursDeparture,
              departure: this.departure,
              destination:this.destination,
            },
            headers: {
              token: localStorage.getItem('token')
            }
          })
          .then(response =>{
            this.busId = ''
            this.day = ''
            this.hoursDeparture = ''
            this.destination= ''
            this.$notify({
              component: notification,
              message: `Sukses menambah jadwal bus`,
              icon: 'fa fa-check',
              type: 'success'
            })
            window.location='/#/admin/schedule-bus/'
          })
          .catch(err =>{
            this.$notify({
              component: notification,
              message: `Terjadi kesalahan`,
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

    getBuses() {
      this.$axios({
        url: `/api/bus/buses`,
        method: `get`,
      })
      .then(response=>{
        this.buses = response.data
      })
      .catch(err =>{
        console.log(err);
      })
    }
      
  },

  mounted() {
    this.getBuses()
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
