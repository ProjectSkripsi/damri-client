<template>
    <div class="container-fluid mt-2">
        <card>
            <form-wizard @on-complete="onComplete" 
                        title="Cek Kendaraan"
                        stepSize="xs"
                        shape="tab"
                        color="#1E90FF"
                        subtitle="">
                <tab-content title="Info Kendaraan"
                     icon="fa fa-bus">
                    <div class="text-center">
                        <label>Jenis Kendaraan</label>
                        <select class="form-control form-control-sm" v-model="selected">
                            <option v-for="bust in listBus" :key=bust._id :value="bust">{{bust.vechileType}}</option>
                        </select>
                        <label class="pt-3">No. Polisi</label>
                        <input type="text" class="form-control form-control-sm" v-model="selected._id" form-control-sm hidden>
                        <input type="text" class="form-control form-control-sm" v-model="selected.policeNo" form-control-sm disabled>
                        <label class="pt-3">No. Bus</label>
                        <input type="text" class="form-control form-control-sm" v-model="selected.idBus" form-control-sm disabled>
                    </div>
                </tab-content>
                <tab-content title="Kelengkapan I"
                     icon="fa fa-briefcase">
                    <div class="text-center">
                        <label>First Aid Kit/P3K</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.firstAid">
                            <option :value="3">Bagus</option>
                            <option :value="2">Jelek</option>
                            <option :value="1">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">Plat No Depan</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.frontPlate">
                            <option :value="3">Bagus</option>
                            <option :value="2">Jelek</option>
                            <option :value="1">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">Plat No Belakang</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.rearPlate">
                            <option :value="3">Bagus</option>
                            <option :value="2">Jelek</option>
                            <option :value="1">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">Buku KIR</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.inspectionBook">
                            <option :value="3">Bagus</option>
                            <option :value="2">Jelek</option>
                            <option :value="1">Tidak Dijumpai</option>
                        </select>
                    </div>
                </tab-content>
                <tab-content title="Kelengkapan II"
                     icon="fa fa-sun-o">
                    <div class="text-center">
                        <label>Ban Cadangan</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.spareTire">
                            <option :value="3">Bagus</option>
                            <option :value="2">Jelek</option>
                            <option :value="1">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">Lampu Besar Jauh Kanan</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.headLightRight">
                            <option :value="3">Bagus</option>
                            <option :value="2">Jelek</option>
                            <option :value="1">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">Lampu Besar Jauh Kiri</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.headLightLeft">
                            <option :value="3">Bagus</option>
                            <option :value="2">Jelek</option>
                            <option :value="1">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">Lampu Plat</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.platLight">
                            <option :value="3">Bagus</option>
                            <option :value="2">Jelek</option>
                            <option :value="1">Tidak Dijumpai</option>
                        </select>
                    </div>
                </tab-content>
                <tab-content title="Kelengkapan III"
                     icon="fa fa-toggle-off">
                    <div class="text-center">
                        <label>Lampu tanda belok kanan depan</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.frontFlaserLightRight">
                            <option :value="3">Bagus</option>
                            <option :value="2">Jelek</option>
                            <option :value="1">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">Lampu tanda belok kiri depan</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.frontFlaserLightLeft">
                            <option :value="3">Bagus</option>
                            <option :value="2">Jelek</option>
                            <option :value="1">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">Lampu tanda belok kanan belakang</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.rearFlaserLightRight">
                            <option :value="3">Bagus</option>
                            <option :value="2">Jelek</option>
                            <option :value="1">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">Lampu tanda belok kiri belakang</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.rearFlaserLightLeft">
                            <option :value="3">Bagus</option>
                            <option :value="2">Jelek</option>
                            <option :value="1">Tidak Dijumpai</option>
                        </select>
                    </div>
                </tab-content>
                <tab-content title="Kelengkapan IV"
                     icon="fa fa-cog">
                    <div class="text-center">
                        <label>Lampu rem kanan</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.stopLightRight">
                            <option :value="3">Bagus</option>
                            <option :value="2">Jelek</option>
                            <option :value="1">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">Lampu rem kiri</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.stopLightLeft">
                            <option :value="3">Bagus</option>
                            <option :value="2">Jelek</option>
                            <option :value="1">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">Lampu mundur kanan</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.backupLightRight">
                            <option :value="3">Bagus</option>
                            <option :value="2">Jelek</option>
                            <option :value="1">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">Lampu mundur kiri</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.backupLightLeft">
                            <option :value="3">Bagus</option>
                            <option :value="2">Jelek</option>
                            <option :value="1">Tidak Dijumpai</option>
                        </select>
                    </div>
                </tab-content>
                <tab-content title="Kelengkapan V"
                     icon="fa fa-road">
                    <div class="text-center">
                        <label>Lampu bahaya</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.hazardLight">
                            <option :value="3">Bagus</option>
                            <option :value="2">Jelek</option>
                            <option :value="1">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">Klakson</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.horn">
                            <option :value="3">Bagus</option>
                            <option :value="2">Jelek</option>
                            <option :value="1">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">Sabuk pengaman depan</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.safetyBeltFront">
                            <option :value="3">Bagus</option>
                            <option :value="2">Jelek</option>
                            <option :value="1">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">Sabuk pengaman belakang</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.safetyBeltBack">
                            <option :value="3">Bagus</option>
                            <option :value="2">Jelek</option>
                            <option :value="1">Tidak Dijumpai</option>
                        </select>
                    </div>
                </tab-content>
                <tab-content title="Kelengkapan VI"
                     icon="fa fa-fire-extinguisher">
                    <div class="text-center">
                        <label>Rem Tangan</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.handBreake">
                            <option :value="3">Bagus</option>
                            <option :value="2">Jelek</option>
                            <option :value="1">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">Kaca spion dalam</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.cabinMirror">
                            <option :value="3">Bagus</option>
                            <option :value="2">Jelek</option>
                            <option :value="1">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">racun api</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.fireExtiungiser">
                            <option :value="3">Bagus</option>
                            <option :value="2">Jelek</option>
                            <option :value="1">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">tali kipas</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.fanBelt">
                            <option :value="3">Bagus</option>
                            <option :value="2">Jelek</option>
                            <option :value="1">Tidak Dijumpai</option>
                        </select>
                    </div>
                </tab-content>
                <tab-content title="Kelengkapan VII"
                     icon="fa fa-industry">
                    <div class="text-center">
                        <label>Dongkrak</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.jack">
                            <option :value="3">Bagus</option>
                            <option :value="2">Jelek</option>
                            <option :value="1">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">tangkai dongkrak</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.jackHandle">
                            <option :value="3">Bagus</option>
                            <option :value="2">Jelek</option>
                            <option :value="1">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">kunci roda</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.tireWrech">
                            <option :value="3">Bagus</option>
                            <option :value="2">Jelek</option>
                            <option :value="1">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">Segitiga pengaman</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.triangle">
                            <option :value="3">Bagus</option>
                            <option :value="2">Jelek</option>
                            <option :value="1">Tidak Dijumpai</option>
                        </select>
                    </div>
                </tab-content>
                <tab-content title="Kelengkapan VIII"
                     icon="fa fa-hourglass-start">
                    <div class="text-center">
                        <label>Kaca spion kanan</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.cutterMirrorRight">
                            <option :value="3">Bagus</option>
                            <option :value="2">Jelek</option>
                            <option :value="1">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">kaca spion kiri</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.cutterMirrorLeft">
                            <option :value="3">Bagus</option>
                            <option :value="2">Jelek</option>
                            <option :value="1">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">oli mesin</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.engineOil">
                            <option :value="3">Bagus</option>
                            <option :value="2">Jelek</option>
                            <option :value="1">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">air radiator</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.radiatorCooling">
                            <option :value="3">Bagus</option>
                            <option :value="2">Jelek</option>
                            <option :value="1">Tidak Dijumpai</option>
                        </select>
                    </div>
                </tab-content>
                <tab-content title="Kelengkapan IX"
                     icon="fa fa-life-ring">
                    <div class="text-center">
                        <label>minyak rem</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.brakeOil">
                            <option :value="3">Bagus</option>
                            <option :value="2">Jelek</option>
                            <option :value="1">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">air pembersih kaca</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.wiperWater">
                            <option :value="3">Bagus</option>
                            <option :value="2">Jelek</option>
                            <option :value="1">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">air battery</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.liquidBAttery">
                            <option :value="3">Bagus</option>
                            <option :value="2">Jelek</option>
                            <option :value="1">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">AC</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.airConditioner">
                            <option :value="3">Bagus</option>
                            <option :value="2">Jelek</option>
                            <option :value="1">Tidak Dijumpai</option>
                        </select>
                    </div>
                </tab-content>
                 <tab-content title="Kelengkapan X"
                     icon="fa fa-shield">
                    <div class="text-center">
                        <label>pengukur tekanan ban</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.tirePreasureTester">
                            <option :value="3">Bagus</option>
                            <option :value="2">Jelek</option>
                            <option :value="1">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">tekanan ban depan kanan & kiri</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.tirePreasureFront">
                            <option :value="3">Bagus</option>
                            <option :value="2">Jelek</option>
                            <option :value="1">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">tekanan ban belakang kanan & kiri</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.tirePreasureRear">
                            <option :value="3">Bagus</option>
                            <option :value="2">Jelek</option>
                            <option :value="1">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">Catatan</label>
                        <input type="text" class="form-control form-control-sm" v-model="selected.others" form-control-sm>
                    </div>
                </tab-content>
                <tab-content title="Last step"
                     icon="fa fa-paper-plane-o">
                    Laporkan pemeriksaan kendaraan?
                </tab-content>
            </form-wizard>
        </card>
    </div>
</template>



<script>
import notification from "@/components/NotificationPlugin/Notification.vue"
import Dropdown from 'src/components/BaseDropdown.vue'
import Card from 'src/components/Cards/Card.vue'
import {mapState} from 'vuex'
export default {
    components: {
        Card,
        Dropdown
    },

    data() {
        return {
            bus: {},
            selected: {}
        }
    },

    methods: {
        onComplete: function(){
            if(this.selected._id === undefined){
                this.$notify({
                component: notification,
                    message: `Silahkan masukkan data yang benar`,
                    horizontalAlign: 'center',
                    verticalAlign: 'top',
                    icon: 'fa fa-exclamation-triangle',
                    type: 'warning'
                })
            } else {
                this.$axios({
                    url: `/api/bus/inspection/${this.selected._id}`,
                    method: 'put',
                    data: this.selected,
                    headers: {
                        token: localStorage.getItem('token')
                    }
                })
                .then(response =>{
                    let good = 0.9
                    let bad = 0.4
                    let not = 0.1
                    let data ={
                        remTangan: this.selected.handBreake,
                        minyakRem: this.selected.brakeOil,
                        oliMesin: this.selected.engineOil,
                        airRadiator: this.selected.radiatorCooling,
                        AC: this.selected.airConditioner,
                        klakson: this.selected.horn,
                        tekananBanDepan: this.selected.tirePreasureFront,
                        tekananBanBelakang: this. selected.tirePreasureRear
                    }
                    let more = Object.values(data)
                    let temp = []
                    const reducer = (accumulator, currentValue) => accumulator + currentValue;
                    more.forEach(function(el){
                        if(el === 3){
                            el = good
                        } else if(el === 2){
                            el = bad
                        } else {
                            el = not
                        }
                        temp.push(el)
                    }) 
                    let calc = temp.reduce(reducer)/8
                    let result = calc.toFixed(1)
                    if(result >= 0.5 ){
                        swal("Good job!", "Kendaraan yang anda periksa Layak Jalan!", "success");
                        this.$axios({
                            url: `/api/bus/worthy/${this.selected._id}`,
                            method: 'patch',
                            headers: {
                                token: localStorage.getItem('token')
                            }
                        })
                        .then(response =>{  
                        })
                        .catch(err =>{
                        })
                        
                    } else if(result < 0.5) {
                        swal("Good job!", "Kendaraan yang anda periksa Tidak Layak Jalan!", "error");
                        this.$axios({
                            url: `/api/bus/notWorthy/${this.selected._id}`,
                            method: 'patch',
                            headers: {
                                token: localStorage.getItem('token')
                            }
                        })
                        .then(response =>{
                            
                        })
                        .catch(err =>{
                            
                        })
                    }
                    this.selected = {}
                    this.$router.replace('/')
                })
                .catch(err =>{
                    console.log(err);
                })
            }
        }
    },

    computed: {
        ...mapState(['listBus'])
    },

    mounted() {
        this.$store.dispatch('getBus')
    },
  
  

}
</script>

<style scoped>




</style>
