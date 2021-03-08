<template>
    <div class="content">
    <div class="container-fluid">
        <card>
            <div class="row">
                <div class="col-md-7">
                    <h4 slot="header" class="card-title">Edit Jadwal Bus</h4>
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
                      <select class="form-control" v-model="scheduleBus.busId._id" disabled>
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
                      <select class="form-control" v-model="scheduleBus.day">
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
                            <input type="text" v-model="scheduleBus.hoursDeparture" placeholder="13:00 - 18:00" class="form-control form-control-sm">
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
                            <option> {{ scheduleBus.departure }}</option>
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
                          <select class="form-control"  v-model="scheduleBus.destination">
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
                    <button class="btn btn-success btn-sm" @click.prevent="handleEdit(scheduleBus._id)"><i class="fa fa-floppy-o" aria-hidden="true"></i> simpan</button>
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
            editBus: {},
            scheduleBus: {busId: {_id: 'a'}},
            buses: [],
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
        getIdBus(){
            this.$axios({
                url: `/api/schedule/${this.$route.params.id}`,
                method: `get`,
                headers: {
                    token: localStorage.getItem('token')
                }
            })
            .then(response=>{
                this.editBus = response.data
                this.scheduleBus= response.data
            })
            .catch(err =>{
                console.log(err);
            })
        },

        handleEdit(id){
            this.$axios({
                url: `/api/schedule/${id}`,
                method: `put`,
                data: {
                  busId: this.editBus.busId._id,
                  day: this.editBus.day,
                  hoursDeparture: this.editBus.hoursDeparture,
                  departure: this.editBus.departure,
                  destination:this.editBus.destination,
                },
                headers: {
                    token: localStorage.getItem('token')
                }
            })
            .then(response =>{
                this.$notify({
                    component: notification,
                    message: `Sukses update jadwal bus`,
                    icon: 'fa fa-check',
                    type: 'success'
                })
                this.$router.go(-1)
            })
            .catch(err =>{
                this.$notify({
                    component: notification,
                    message: `Gagal jadwal data bus`,
                    icon: 'fa fa-exclamation',
                    type: 'warning'
                })
            })

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
        this.getIdBus()
        this.getBuses()
    },

}
</script>

<style>

</style>
