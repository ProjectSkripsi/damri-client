<template>
  <div>
    <navbar/>
    <div class="container content mt-5 rows">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <card>
                        <div id="pdf">
                            <header class="clearfix">
                                <div class="row">
                                    <div class="col-sm-2 mt-md">
                                        <div class="ib">
                                            <img src="/img/litha.png" height="40px" width='180px' alt="Damri" />
                                        </div>
                                    </div>
                                    <div class="col-sm-8 mt-md text-center">
                                        <h5>Pemeriksaan/Inspeksi Kendaraan Bermotor</h5>
                                        <p class="vechile"><i>Vechile Inspection</i></p>                            
                                    </div>
                                    <div class="col-sm-2 mt-md">
                                        <div class="text-right">
                                            <img src="/img/K3.png" height="70px" alt="K3" />
                                        </div>
                                    </div>
                                </div>
                            </header><hr>
                            <div class="row">
                                <div class="col-md-3">
                                    Date / Tanggal
                                </div>
                                <div class="col-md-5">
                                    : <u>{{ moment(equip.updatedAt).format('LL') }}</u>
                                </div> 
                            </div>
                            <div class="row">
                                <div class="col-md-3">
                                    Police No / No Polisi
                                </div>
                                <div class="col-md-5">
                                    : <u>{{equip.policeNo}}</u>
                                </div> 
                            </div>
                            <div class="row">
                                <div class="col-md-3">
                                    Odometer / Kilometer
                                </div>
                                <div class="col-md-5">
                                    : -
                                </div> 
                            </div>
                            <div class="row">
                                <div class="col-md-3">
                                    Vechile Type / Jenis Kendaraan
                                </div>
                                <div class="col-md-5">
                                    : <u> {{equip.vechileType}} </u>
                                </div> 
                            </div>
                            <div class="row">
                                <div class="col-md-3">
                                    Hasil Pemeriksaan
                                </div>
                                <div class="col-md-5">
                                    : <u> {{equip.result}} </u>
                                </div> 
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-md-4">
                                    <b>Equipment</b>
                                </div>
                                <div class="col-md-2">
                                    <b>Condition</b>
                                </div> 
                                <div class="col-md-4">
                                    <b>Equipment</b>
                                </div>
                                <div class="col-md-2">
                                    <b>Condition</b>
                                </div> 
                            </div>
                            <div class="row mt-4">
                                <div class="col-md-4">
                                    1. Goverment License / SIM:
                                </div>
                                <div class="col-md-2">
                                    Bagus 
                                </div> 
                                <div class="col-md-4">
                                    17. Hand Brake / Rem Tangan:
                                </div>
                                <div class="col-md-2">
                                    <a v-show="equip.handBreake === 1">Bagus</a>
                                    <a v-show="equip.handBreake === 0.5">Jelek</a>
                                    <a v-show="equip.handBreake === 0">Tidak Dijumpai</a>
                                </div> 
                            </div>
                            <div class="row mt-2 mt-1">
                                <div class="col-md-4">
                                    2. STNK:
                                </div>
                                <div class="col-md-2">
                                    Bagus 
                                </div> 
                                <div class="col-md-4">
                                    18. Fire Extinguisher/ Racun Api:
                                </div>
                                <div class="col-md-2">
                                    <a v-show="equip.fireExtiungiser === 1">Bagus</a>
                                    <a v-show="equip.fireExtiungiser === 0.5">Jelek</a>
                                    <a v-show="equip.fireExtiungiser === 0">Tidak Dijumpai</a>
                                </div> 
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-4">
                                    3. First Aid/ P3K:
                                </div>
                                <div class="col-md-2">
                                    <a v-show="equip.firstAid === 1">Bagus</a>
                                    <a v-show="equip.firstAid === 0.5">Jelek</a>
                                    <a v-show="equip.firstAid === 0">Tidak Dijumpai</a>
                                </div> 
                                <div class="col-md-4">
                                    19. Cabin Mirror / Kaca Spion Dalam:
                                </div>
                                <div class="col-md-2">
                                    <a v-show="equip.cabinMirror === 1">Bagus</a>
                                    <a v-show="equip.cabinMirror === 0.5">Jelek</a>
                                    <a v-show="equip.cabinMirror === 0">Tidak Dijumpai</a>
                                </div> 
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-4">
                                    4. Front Plate / Plat No. Depan:
                                </div>
                                <div class="col-md-2">
                                    <a v-show="equip.frontPlate === 1">Bagus</a>
                                    <a v-show="equip.frontPlate === 0.5">Jelek</a>
                                    <a v-show="equip.frontPlate === 0">Tidak Dijumpai</a>
                                </div> 
                                <div class="col-md-4">
                                    20. Jack / Dongkrak:
                                </div>
                                <div class="col-md-2">
                                    <a v-show="equip.jack === 1">Bagus</a>
                                    <a v-show="equip.jack === 0.5">Jelek</a>
                                    <a v-show="equip.jack === 0">Tidak Dijumpai</a>
                                </div> 
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-4">
                                    &nbsp;&nbsp;&nbsp;- Rear Plate / Plat No. Belakang:
                                </div>
                                <div class="col-md-2">
                                    <a v-show="equip.jackHandle === 1">Bagus</a>
                                    <a v-show="equip.jackHandle === 0.5">Jelek</a>
                                    <a v-show="equip.jackHandle === 0">Tidak Dijumpai</a>
                                </div> 
                                <div class="col-md-4">
                                    21. Jack Handle / Tangkai Dongkrak:
                                </div>
                                <div class="col-md-2">
                                    <a v-show="equip.jack === 1">Bagus</a>
                                    <a v-show="equip.jack === 0.5">Jelek</a>
                                    <a v-show="equip.jack === 0">Tidak Dijumpai</a>
                                </div> 
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-4">
                                    5. Inspection Book / Buku KIR(Pick-Up):
                                </div>
                                <div class="col-md-2">
                                    <a v-show="equip.inspectionBook === 1">Bagus</a>
                                    <a v-show="equip.inspectionBook === 0.5">Jelek</a>
                                    <a v-show="equip.inspectionBook === 0">Tidak Dijumpai</a>
                                </div> 
                                <div class="col-md-4">
                                    22. Tire Wrech / Kunci Roda:
                                </div>
                                <div class="col-md-2">
                                    <a v-show="equip.tireWrech === 1">Bagus</a>
                                    <a v-show="equip.tireWrech === 0.5">Jelek</a>
                                    <a v-show="equip.tireWrech === 0">Tidak Dijumpai</a>
                                </div> 
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-4">
                                    6. Spare Tire / Ban Cadangan:
                                </div>
                                <div class="col-md-2">
                                    <a v-show="equip.spareTire === 1">Bagus</a>
                                    <a v-show="equip.spareTire === 0.5">Jelek</a>
                                    <a v-show="equip.spareTire === 0">Tidak Dijumpai</a>
                                </div> 
                                <div class="col-md-4">
                                    23. Fan Belt / Tali Kipas:
                                </div>
                                <div class="col-md-2">
                                    <a v-show="equip.fanBelt === 1">Bagus</a>
                                    <a v-show="equip.fanBelt === 0.5">Jelek</a>
                                    <a v-show="equip.fanBelt === 0">Tidak Dijumpai</a>
                                </div> 
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-5">
                                    7. Head Light or High Beam / Lampu Besar Jauh
                                </div>
                                <div class="col-md-1">
                                    
                                </div> 
                                <div class="col-md-4">
                                    24. Triangle / Segitiga Pengaman:
                                </div>
                                <div class="col-md-2">
                                    <a v-show="equip.triangle === 1">Bagus</a>
                                    <a v-show="equip.triangle === 0.5">Jelek</a>
                                    <a v-show="equip.triangle === 0">Tidak Dijumpai</a>
                                </div> 
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-4 pl-5">
                                    - Right / Kanan:
                                </div>
                                <div class="col-md-2">
                                    <a v-show="equip.headLightRight === 1">Bagus</a>
                                    <a v-show="equip.headLightRight === 0.5">Jelek</a>
                                    <a v-show="equip.headLightRight === 0">Tidak Dijumpai</a>
                                </div> 
                                <div class="col-md-4">
                                    25. Cuter Mirror / Kaca Spion:
                                </div>
                                <div class="col-md-2">
                                </div> 
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-4 pl-5">
                                    - Left / Kiri:
                                </div>
                                <div class="col-md-2">
                                    <a v-show="equip.headLightLeft === 1">Bagus</a>
                                    <a v-show="equip.headLightLeft === 0.5">Jelek</a>
                                    <a v-show="equip.headLightLeft === 0">Tidak Dijumpai</a>
                                </div> 
                                <div class="col-md-4 pl-5">
                                    - Right / Kanan:
                                </div>
                                <div class="col-md-2">
                                    <a v-show="equip.cutterMirrorRight === 1">Bagus</a>
                                    <a v-show="equip.cutterMirrorRight === 0.5">Jelek</a>
                                    <a v-show="equip.cutterMirrorRight === 0">Tidak Dijumpai</a>
                                </div> 
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-5">
                                    8. Head Light or Low Beam / Lampu Besar Dekat
                                </div>
                                <div class="col-md-1">
                                    
                                </div> 
                                <div class="col-md-4 pl-5">
                                    - Left / Kiri:
                                </div>
                                <div class="col-md-2">
                                    <a v-show="equip.cutterMirrorLeft === 1">Bagus</a>
                                    <a v-show="equip.cutterMirrorLeft === 0.5">Jelek</a>
                                    <a v-show="equip.cutterMirrorLeft === 0">Tidak Dijumpai</a>
                                </div> 
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-4 pl-5">
                                    - Right / Kanan:
                                </div>
                                <div class="col-md-2">
                                    Bagus
                                </div> 
                                <div class="col-md-4">
                                    26. Engine Oil / Oli Mesin :
                                </div>
                                <div class="col-md-2">
                                    <a v-show="equip.engineOil === 1">Bagus</a>
                                    <a v-show="equip.engineOil === 0.5">Jelek</a>
                                    <a v-show="equip.engineOil === 0">Tidak Dijumpai</a>
                                </div> 
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-4 pl-5">
                                    - Left / Kiri:
                                </div>
                                <div class="col-md-2">
                                    Bagus
                                </div> 
                                <div class="col-md-4">
                                    27. Radiator Cooling Water / Air Radiator :
                                </div>
                                <div class="col-md-2">
                                    <a v-show="equip.radiatorCooling === 1">Bagus</a>
                                    <a v-show="equip.radiatorCooling === 0.5">Jelek</a>
                                    <a v-show="equip.radiatorCooling === 0">Tidak Dijumpai</a>
                                </div> 
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-5">
                                    9. Front Flaser Light / Lampu Tanda Belok Depan
                                </div>
                                <div class="col-md-1">
                                    
                                </div> 
                                <div class="col-md-4">
                                    28. Brake Oil / Minyak Rem :
                                </div>
                                <div class="col-md-2">
                                    <a v-show="equip.brakeOil === 1">Bagus</a>
                                    <a v-show="equip.brakeOil === 0.5">Jelek</a>
                                    <a v-show="equip.brakeOil === 0">Tidak Dijumpai</a>
                                </div> 
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-4 pl-5">
                                    - Right / Kanan:
                                </div>
                                <div class="col-md-2">
                                    <a v-show="equip.frontFlaserLightRight === 1">Bagus</a>
                                    <a v-show="equip.frontFlaserLightRight === 0.5">Jelek</a>
                                    <a v-show="equip.frontFlaserLightRight === 0">Tidak Dijumpai</a>
                                </div> 
                                <div class="col-md-4">
                                    29. Wiper Water / Air Pembersih Kaca :
                                </div>
                                <div class="col-md-2">
                                    <a v-show="equip.wiperWater === 1">Bagus</a>
                                    <a v-show="equip.wiperWater === 0.5">Jelek</a>
                                    <a v-show="equip.wiperWater === 0">Tidak Dijumpai</a>
                                </div> 
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-4 pl-5">
                                    - Left / Kiri:
                                </div>
                                <div class="col-md-2">
                                     <a v-show="equip.frontFlaserLightLeft === 1">Bagus</a>
                                    <a v-show="equip.frontFlaserLightLeft === 0.5">Jelek</a>
                                    <a v-show="equip.frontFlaserLightLeft === 0">Tidak Dijumpai</a>
                                </div> 
                                <div class="col-md-4">
                                    30. Battray Liquid / Air Battery :
                                </div>
                                <div class="col-md-2">
                                    <a v-show="equip.liquidBAttery === 1">Bagus</a>
                                    <a v-show="equip.liquidBAttery === 0.5">Jelek</a>
                                    <a v-show="equip.liquidBAttery === 0">Tidak Dijumpai</a>
                                </div> 
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-5">
                                    10. Rear Flaser Light / Lampu Tanda Belok Belakang
                                </div>
                                <div class="col-md-1">
                                    
                                </div> 
                                <div class="col-md-4">
                                    31. Air Conditioner / AC :
                                </div>
                                <div class="col-md-2">
                                    <a v-show="equip.airConditioner === 1">Bagus</a>
                                    <a v-show="equip.airConditioner === 0.5">Jelek</a>
                                    <a v-show="equip.airConditioner === 0">Tidak Dijumpai</a>
                                </div> 
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-4 pl-5">
                                    - Right / Kanan:
                                </div>
                                <div class="col-md-2">
                                    <a v-show="equip.rearFlaserLightRight === 1">Bagus</a>
                                    <a v-show="equip.rearFlaserLightRight === 0.5">Jelek</a>
                                    <a v-show="equip.rearFlaserLightRight === 0">Tidak Dijumpai</a>
                                </div> 
                                <div class="col-md-4">
                                    32. Tire Preaseure Tester :
                                </div>
                                <div class="col-md-2">
                                    <a v-show="equip.tirePreasureTester === 1">Bagus</a>
                                    <a v-show="equip.tirePreasureTester === 0.5">Jelek</a>
                                    <a v-show="equip.tirePreasureTester === 0">Tidak Dijumpai</a>
                                </div> 
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-4 pl-5">
                                    - Left / Kiri:
                                </div>
                                <div class="col-md-2">
                                     <a v-show="equip.rearFlaserLightLeft === 1">Bagus</a>
                                    <a v-show="equip.rearFlaserLightLeft === 0.5">Jelek</a>
                                    <a v-show="equip.rearFlaserLightLeft === 0">Tidak Dijumpai</a>
                                </div> 
                                <div class="col-md-4">
                                    33. Tire Preaseure / Tekanan Ban 
                                </div>
                                <div class="col-md-2"> 
                                </div> 
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-5">
                                    11. Brake or Stop Light / Lampu Rem
                                </div>
                                <div class="col-md-1">
                                    
                                </div> 
                                <div class="col-md-4 pl-5">
                                    - Front Right & Left / Depan Kanan & Kiri
                                </div>
                                <div class="col-md-2">
                                     <a v-show="equip.tirePreasureFront === 1">Bagus</a>
                                    <a v-show="equip.tirePreasureFront === 0.5">Jelek</a>
                                    <a v-show="equip.tirePreasureFront === 0">Tidak Dijumpai</a>
                                </div> 
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-4 pl-5">
                                    - Right / Kanan:
                                </div>
                                <div class="col-md-2">
                                    <a v-show="equip.stopLightRight === 1">Bagus</a>
                                    <a v-show="equip.stopLightRight === 0.5">Jelek</a>
                                    <a v-show="equip.stopLightRight === 0">Tidak Dijumpai</a>
                                </div> 
                                <div class="col-md-4 pl-5">
                                    - Rear Right & Left / Belakang Kanan & Kiri
                                </div>
                                <div class="col-md-2">
                                    <a v-show="equip.tirePreasureRear === 1">Bagus</a>
                                    <a v-show="equip.tirePreasureRear === 0.5">Jelek</a>
                                    <a v-show="equip.tirePreasureRear === 0">Tidak Dijumpai</a>
                                </div> 
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-4 pl-5">
                                    - Left / Kiri:
                                </div>
                                <div class="col-md-2">
                                     <a v-show="equip.stopLightLeft === 1">Bagus</a>
                                    <a v-show="equip.stopLightLeft === 0.5">Jelek</a>
                                    <a v-show="equip.stopLightLeft === 0">Tidak Dijumpai</a>
                                </div> 
                                <div class="col-md-4">
                                    34. Others / Lain-lain: 
                                </div>
                                <div class="col-md-2"> 
                                    <a>{{equip.others}}</a>
                                </div> 
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-5">
                                    12. Beck-Up Light / Lampu Mundur
                                </div>
                                <div class="col-md-1"> 
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-4 pl-5">
                                    - Right / Kanan:
                                </div>
                                <div class="col-md-2">
                                    <a v-show="equip.backupLightRight === 1">Bagus</a>
                                    <a v-show="equip.backupLightRight === 0.5">Jelek</a>
                                    <a v-show="equip.backupLightRight === 0">Tidak Dijumpai</a>
                                </div> 
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-4 pl-5">
                                    - Left / Kiri:
                                </div>
                                <div class="col-md-2">
                                    <a v-show="equip.backupLightLeft === 1">Bagus</a>
                                    <a v-show="equip.backupLightLeft === 0.5">Jelek</a>
                                    <a v-show="equip.backupLightLeft === 0">Tidak Dijumpai</a>
                                </div> 
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-4">
                                    13. Vechile No. Light / Lampu Plat No.
                                </div>
                                <div class="col-md-2">
                                    <a v-show="equip.platLight === 1">Bagus</a>
                                    <a v-show="equip.platLight === 0.5">Jelek</a>
                                    <a v-show="equip.platLight === 0">Tidak Dijumpai</a>
                                </div> 
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-4">
                                    14. Hazard Light / Lampu Bahaya:
                                </div>
                                <div class="col-md-2">
                                    <a v-show="equip.hazardLight === 1">Bagus</a>
                                    <a v-show="equip.hazardLight === 0.5">Jelek</a>
                                    <a v-show="equip.hazardLight === 0">Tidak Dijumpai</a>
                                </div> 
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-4">
                                    15. Horn / Klakson:
                                </div>
                                <div class="col-md-2">
                                    <a v-show="equip.horn === 1">Bagus</a>
                                    <a v-show="equip.horn === 0.5">Jelek</a>
                                    <a v-show="equip.horn === 0">Tidak Dijumpai</a>
                                </div> 
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-5">
                                    16. Safety Belt / Sabuk Pengaman
                                </div>
                                <div class="col-md-1"> 
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-4 pl-5">
                                    - Front / Depan:
                                </div>
                                <div class="col-md-2">
                                    <a v-show="equip.safetyBeltFront === 1">Bagus</a>
                                    <a v-show="equip.safetyBeltFront === 0.5">Jelek</a>
                                    <a v-show="equip.safetyBeltFront === 0">Tidak Dijumpai</a>
                                </div> 
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-4 pl-5">
                                    - Back / Belakang:
                                </div>
                                <div class="col-md-2">
                                    <a v-show="equip.safetyBeltBack === 1">Bagus</a>
                                    <a v-show="equip.safetyBeltBack === 0.5">Jelek</a>
                                    <a v-show="equip.safetyBeltBack === 0">Tidak Dijumpai</a>
                                </div> 
                            </div><hr>
                            <div class="row mt-2">
                                <div class="col-md-3">
                                    Inspection Periode
                                </div>
                                <div class="col-md-3">
                                    : -
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-3">
                                    Color Code
                                </div>
                                <div class="col-md-5">
                                    : -
                                </div>
                                <div class="col-md-4">
                                    Legend
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-3">
                                    Inspected By
                                </div>
                                <div class="col-md-5">
                                    User/Driver
                                </div>
                                <div class="col-md-4">
                                    Bagus : Good / Tersedia
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-3">
                                   
                                </div>
                                <div class="col-md-5">
                                   
                                </div>
                                <div class="col-md-4">
                                    Jelek : Bad / Rusak
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-3">
                                    
                                </div>
                                <div class="col-md-5">
                                    
                                </div>
                                <div class="col-md-4">
                                    Tidak Dijumpai : Not Avaible / Tidak Tersedia
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-3">
                                    <u>{{inspectedBy}}</u>
                                </div>
                                <div class="col-md-5">
                                    <u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </u>
                                </div>
                                <div class="col-md-4">
                                </div>
                            </div>
                          

                            <div class="row mt-4 ml-1 mb-2">
                                <div class="image-area mr-4 mt-4" v-for="bust in equip.imageUrl" :key=bust._id> 
                                    <img :src=bust.url  alt="Preview"  class="center-block rounded">
                                   
                                </div>       
                            
                            </div>
                        </div> 
                    </card>
                   
                </div>
            </div>
        </div>
    </div>
    <Footer />
  </div>

</template>

<script>
import Card from 'src/components/Cards/Card.vue'
 import Navbar from '../../layout/Navbar.vue';
import Footer from '../../layout/Footer.vue';
export default {
    components: {
        Card,
        Navbar,
        Footer
    },
    data() {
        return {
            inspectId: this.$route.params.id,
            equip: [],
            inspectedBy: ''
        }
    },

    methods: {
      getResult(){
        this.$axios({
          url: `/api/bus/${this.inspectId}`,
          method: `get`,
          headers: {
              token: localStorage.getItem('token')
          }
        })
        .then(response =>{
          
          this.inspectedBy = response.data.inspectionBy.name
          this.equip = response.data
        })
        .catch((err) => {
          console.log(err);
        })
      },
      print() {
        this.$htmlToPaper('pdf');
      },

    },

    mounted() {
        this.getResult()
    },


}
</script>

<style scoped>
.vechile{
    font-size: 14px
}

  .rows {
    padding-bottom: 100px;
  }


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
