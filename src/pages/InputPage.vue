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
                            <option v-for="bust in listBus" :key=bust._id :value="bust">{{bust.idBus}} - {{bust.policeNo}} </option>
                        </select>
                        <label  class="pt-3">Teknisi</label>
                        <select class="form-control form-control-sm" v-model="selected.inspectionBy">
                            <option v-for="technisy in tecnicians" :key=technisy._id :value="technisy._id">{{technisy.name}}</option>
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
                            <option :value="1">Bagus</option>
                            <option :value="0.5">Jelek</option>
                            <option :value="0">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">Plat No Depan</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.frontPlate">
                            <option :value="1">Bagus</option>
                            <option :value="0.5">Jelek</option>
                            <option :value="0">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">Plat No Belakang</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.rearPlate">
                            <option :value="1">Bagus</option>
                            <option :value="0.5">Jelek</option>
                            <option :value="0">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">Buku KIR</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.inspectionBook">
                            <option :value="1">Bagus</option>
                            <option :value="0.5">Jelek</option>
                            <option :value="0">Tidak Dijumpai</option>
                        </select>
                    </div>
                </tab-content>
                <tab-content title="Kelengkapan II"
                     icon="fa fa-sun-o">
                    <div class="text-center">
                        <label>Ban Cadangan</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.spareTire">
                            <option :value="1">Bagus</option>
                            <option :value="0.5">Jelek</option>
                            <option :value="0">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">Lampu Besar Jauh Kanan</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.headLightRight">
                            <option :value="1">Bagus</option>
                            <option :value="0.5">Jelek</option>
                            <option :value="0">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">Lampu Besar Jauh Kiri</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.headLightLeft">
                            <option :value="1">Bagus</option>
                            <option :value="0.5">Jelek</option>
                            <option :value="0">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">Lampu Plat</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.platLight">
                            <option :value="1">Bagus</option>
                            <option :value="0.5">Jelek</option>
                            <option :value="0">Tidak Dijumpai</option>
                        </select>
                    </div>
                </tab-content>
                <tab-content title="Kelengkapan III"
                     icon="fa fa-toggle-off">
                    <div class="text-center">
                        <label>Lampu tanda belok kanan depan</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.frontFlaserLightRight">
                            <option :value="1">Bagus</option>
                            <option :value="0.5">Jelek</option>
                            <option :value="0">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">Lampu tanda belok kiri depan</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.frontFlaserLightLeft">
                            <option :value="1">Bagus</option>
                            <option :value="0.5">Jelek</option>
                            <option :value="0">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">Lampu tanda belok kanan belakang</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.rearFlaserLightRight">
                            <option :value="1">Bagus</option>
                            <option :value="0.5">Jelek</option>
                            <option :value="0">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">Lampu tanda belok kiri belakang</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.rearFlaserLightLeft">
                            <option :value="1">Bagus</option>
                            <option :value="0.5">Jelek</option>
                            <option :value="0">Tidak Dijumpai</option>
                        </select>
                    </div>
                </tab-content>
                <tab-content title="Kelengkapan IV"
                     icon="fa fa-cog">
                    <div class="text-center">
                        <label>Lampu rem kanan</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.stopLightRight">
                            <option :value="1">Bagus</option>
                            <option :value="0.5">Jelek</option>
                            <option :value="0">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">Lampu rem kiri</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.stopLightLeft">
                            <option :value="1">Bagus</option>
                            <option :value="0.5">Jelek</option>
                            <option :value="0">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">Lampu mundur kanan</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.backupLightRight">
                            <option :value="1">Bagus</option>
                            <option :value="0.5">Jelek</option>
                            <option :value="0">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">Lampu mundur kiri</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.backupLightLeft">
                            <option :value="1">Bagus</option>
                            <option :value="0.5">Jelek</option>
                            <option :value="0">Tidak Dijumpai</option>
                        </select>
                    </div>
                </tab-content>
                <tab-content title="Kelengkapan V"
                     icon="fa fa-road">
                    <div class="text-center">
                        <label>Lampu bahaya</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.hazardLight">
                            <option :value="1">Bagus</option>
                            <option :value="0.5">Jelek</option>
                            <option :value="0">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">Klakson</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.horn">
                            <option :value="1">Bagus</option>
                            <option :value="0.5">Jelek</option>
                            <option :value="0">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">Sabuk pengaman depan</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.safetyBeltFront">
                            <option :value="1">Bagus</option>
                            <option :value="0.5">Jelek</option>
                            <option :value="0">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">Sabuk pengaman belakang</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.safetyBeltBack">
                            <option :value="1">Bagus</option>
                            <option :value="0.5">Jelek</option>
                            <option :value="0">Tidak Dijumpai</option>
                        </select>
                    </div>
                </tab-content>
                <tab-content title="Kelengkapan VI"
                     icon="fa fa-fire-extinguisher">
                    <div class="text-center">
                        <label>Rem Tangan</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.handBreake">
                            <option :value="1">Bagus</option>
                            <option :value="0.5">Jelek</option>
                            <option :value="0">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">Kaca spion dalam</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.cabinMirror">
                            <option :value="1">Bagus</option>
                            <option :value="0.5">Jelek</option>
                            <option :value="0">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">racun api</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.fireExtiungiser">
                            <option :value="1">Bagus</option>
                            <option :value="0.5">Jelek</option>
                            <option :value="0">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">tali kipas</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.fanBelt">
                            <option :value="1">Bagus</option>
                            <option :value="0.5">Jelek</option>
                            <option :value="0">Tidak Dijumpai</option>
                        </select>
                    </div>
                </tab-content>
                <tab-content title="Kelengkapan VII"
                     icon="fa fa-industry">
                    <div class="text-center">
                        <label>Dongkrak</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.jack">
                            <option :value="1">Bagus</option>
                            <option :value="0.5">Jelek</option>
                            <option :value="0">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">tangkai dongkrak</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.jackHandle">
                            <option :value="1">Bagus</option>
                            <option :value="0.5">Jelek</option>
                            <option :value="0">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">kunci roda</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.tireWrech">
                            <option :value="1">Bagus</option>
                            <option :value="0.5">Jelek</option>
                            <option :value="0">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">Segitiga pengaman</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.triangle">
                            <option :value="1">Bagus</option>
                            <option :value="0.5">Jelek</option>
                            <option :value="0">Tidak Dijumpai</option>
                        </select>
                    </div>
                </tab-content>
                <tab-content title="Kelengkapan VIII"
                     icon="fa fa-hourglass-start">
                    <div class="text-center">
                        <label>Kaca spion kanan</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.cutterMirrorRight">
                            <option :value="1">Bagus</option>
                            <option :value="0.5">Jelek</option>
                            <option :value="0">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">kaca spion kiri</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.cutterMirrorLeft">
                            <option :value="1">Bagus</option>
                            <option :value="0.5">Jelek</option>
                            <option :value="0">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">oli mesin</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.engineOil">
                            <option :value="1">Bagus</option>
                            <option :value="0.5">Jelek</option>
                            <option :value="0">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">air radiator</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.radiatorCooling">
                            <option :value="1">Bagus</option>
                            <option :value="0.5">Jelek</option>
                            <option :value="0">Tidak Dijumpai</option>
                        </select>
                    </div>
                </tab-content>
                <tab-content title="Kelengkapan IX"
                     icon="fa fa-life-ring">
                    <div class="text-center">
                        <label>minyak rem</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.brakeOil">
                            <option :value="1">Bagus</option>
                            <option :value="0.5">Jelek</option>
                            <option :value="0">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">air pembersih kaca</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.wiperWater">
                            <option :value="1">Bagus</option>
                            <option :value="0.5">Jelek</option>
                            <option :value="0">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">air battery</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.liquidBAttery">
                            <option :value="1">Bagus</option>
                            <option :value="0.5">Jelek</option>
                            <option :value="0">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">AC</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.airConditioner">
                            <option :value="1">Bagus</option>
                            <option :value="0.5">Jelek</option>
                            <option :value="0">Tidak Dijumpai</option>
                        </select>
                    </div>
                </tab-content>
                 <tab-content title="Kelengkapan X"
                     icon="fa fa-shield">
                    <div class="text-center">
                        <label>pengukur tekanan ban</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.tirePreasureTester">
                            <option :value="1">Bagus</option>
                            <option :value="0.5">Jelek</option>
                            <option :value="0">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">tekanan ban depan kanan & kiri</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.tirePreasureFront">
                            <option :value="1">Bagus</option>
                            <option :value="0.5">Jelek</option>
                            <option :value="0">Tidak Dijumpai</option>
                        </select>
                        <label class="pt-3">tekanan ban belakang kanan & kiri</label>
                        <select class="form-control form-control-sm" placeholder="P3K" v-model="selected.tirePreasureRear">
                            <option :value="1">Bagus</option>
                            <option :value="0.5">Jelek</option>
                            <option :value="0">Tidak Dijumpai</option>
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
            selected: {},
            tecnicians: [],
            eligibilityStandards: 0
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
                    const { 
                        engineOil, //oli mesin
                        radiatorCooling, // air radiator
                        brakeOil, // minyak rem
                        liquidBAttery, //air aki
                        airConditioner, //ac
                        tirePreasureFront, //ban
                        tirePreasureRear, //ban
                        firstAid, // p3k
                        frontPlate, //plat
                        rearPlate, //plat
                        headLightRight, // lampu besar
                        headLightLeft, // lampu besar
                        stopLightRight, //lampu rem
                        stopLightLeft, //lampu rem
                        hazardLight, // lmapu hati2
                        horn, //klakson
                        safetyBeltFront, //sabuk pengaman
                        safetyBeltBack, //sabuk pengaman
                        handBreake, // rem tangan
                        jack, // dongkrak
                        tireWrech, // kunci roda
                        triangle, // segitiga bahaya
                        cutterMirrorRight, // Spion Luar Kiri dan Kanan
                        cutterMirrorLeft, // Spion Luar Kiri dan Kanan
                        cabinMirror, // Spion Dalam
                        rearFlaserLightRight, // lampu sein
                        frontFlaserLightLeft, // lampu sein
                      
                    } = this.selected
                    // const oil = this.criretia.find((item) => item.alias === 'W1').initialWeight
                    const tire = (tirePreasureFront + tirePreasureRear) / 2
                    const plate = (frontPlate + rearPlate) / 2
                    const headLight = (headLightRight + headLightLeft) / 2
                    const stopLight = (stopLightRight + stopLightLeft) / 2
                    const safetyBelt = (safetyBeltFront + safetyBeltBack) / 2
                    const cutterMirror = (cutterMirrorRight + cutterMirrorLeft) / 2 
                    const flaserLight = (rearFlaserLightRight + frontFlaserLightLeft) / 2
                    const w1 = engineOil * this.criretia.find((item) => item.alias === 'W1').initialWeight
                    const w2 = radiatorCooling * this.criretia.find((item) => item.alias === 'W2').initialWeight
                    const w3 = brakeOil * this.criretia.find((item) => item.alias === 'W3').initialWeight
                    const w4 = liquidBAttery * this.criretia.find((item) => item.alias === 'W4').initialWeight
                    const w5 = airConditioner * this.criretia.find((item) => item.alias === 'W5').initialWeight
                    const w6 = tire * this.criretia.find((item) => item.alias === 'W6').initialWeight
                    const w7 = firstAid * this.criretia.find((item) => item.alias === 'W7').initialWeight
                    const w8 = plate * this.criretia.find((item) => item.alias === 'W8').initialWeight
                    const w9 = headLight * this.criretia.find((item) => item.alias === 'W9').initialWeight
                    const w10 = stopLight * this.criretia.find((item) => item.alias === 'W10').initialWeight
                    const w11 = hazardLight * this.criretia.find((item) => item.alias === 'W11').initialWeight
                    const w12 = horn * this.criretia.find((item) => item.alias === 'W12').initialWeight
                    const w13 = safetyBelt * this.criretia.find((item) => item.alias === 'W13').initialWeight
                    const w14 = handBreake * this.criretia.find((item) => item.alias === 'W14').initialWeight
                    const w15 = jack * this.criretia.find((item) => item.alias === 'W15').initialWeight
                    const w16 = tireWrech * this.criretia.find((item) => item.alias === 'W16').initialWeight
                    const w17 = triangle * this.criretia.find((item) => item.alias === 'W17').initialWeight
                    const w18 = cutterMirror * this.criretia.find((item) => item.alias === 'W18').initialWeight
                    const w19 = cabinMirror * this.criretia.find((item) => item.alias === 'W19').initialWeight
                    const w20 = flaserLight * this.criretia.find((item) => item.alias === 'W20').initialWeight
                    const accum = []
                    accum.push(w1,w2,w3,w4,w5,w6,w7,w8,w9,w10,w11,w12,w13,w14,w15,w16,w17,w18,w19,w20)

                    const reducer = (accumulator, currentValue) => accumulator + currentValue;
                    const result = accum.reduce(reducer)
                    // console.log('tire', tire);
                    // console.log(accum);
                    // console.log(result);
                    // console.log(this.selected);


                    // let data ={
                    //     remTangan: handBreake,
                    //     minyakRem: brakeOil,
                    //     oliMesin: engineOil,
                    //     airRadiator: radiatorCooling,
                    //     AC: airConditioner,
                    //     klakson: horn,
                    //     tekananBanDepan: tirePreasureFront,
                    //     tekananBanBelakang: tirePreasureRear
                    // }
                  
                    // let more = Object.values(data)
                    // let temp = []
                    // const reducer = (accumulator, currentValue) => accumulator + currentValue;
                    // more.forEach(function(el){
                    //     if(el === 3){
                    //         el = good
                    //     } else if(el === 2){
                    //         el = bad
                    //     } else {
                    //         el = not
                    //     }
                    //     temp.push(el)
                    // }) 
                    // let calc = temp.reduce(reducer)/8
                    // let result = calc.toFixed(1)

                    if(result >= this.eligibilityStandards ){
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
                        
                    } else if(result < this.eligibilityStandards) {
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
                    this.$router.replace('/admin/result')
                })
                .catch(err =>{
                    console.log(err);
                })
            }
        },

        getTechnician(){
            this.$axios({
                url: `/api/users/all`,
                method: `get`,
                headers: {
                    token: localStorage.getItem('token')
                }
            })
            .then(response=>{
                this.tecnicians = response.data
            })
            .catch(err =>{
                console.log(err);
            })
        },

        getCriteria(){
            this.$axios({
                url: `/api/criteria`,
                method: `get`,
                    headers: {
                        token: localStorage.getItem('token')
                    }
                })
            .then(response=>{
                const value = response.data.find((item) => item.alias === 'kelayakan jalan').initialWeight;
                this.eligibilityStandards = value 
                this.criretia = response.data
            })
            .catch(err =>{
                console.log(err);
            })
        },
    },

    computed: {
        ...mapState(['listBus'])
    },

    mounted() {
        this.$store.dispatch('getBus')
        this.getTechnician()
        this.getCriteria()
    },
  
  

}
</script>

<style scoped>




</style>
