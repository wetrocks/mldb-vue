<template>
 <div>
    <h3>Create a Site</h3>
    <v-card>
      <v-card-title>Site Identification</v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="3">
                <v-text-field dense label="Site Name" v-model=siteName ></v-text-field>
            </v-col>
            <v-col cols="3">
              <v-text-field dense label="Country" v-model=countryCode ></v-text-field>
            </v-col>
            <v-col cols="3">
                <v-text-field dense label="Beach Code" v-model=beachCode ></v-text-field>
            </v-col>
            <v-col cols="3">
              <v-text-field dense label="Beach Name" v-model=beachName ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
    <v-spacer></v-spacer>
    <v-card>
    <v-card-title>Beach Information</v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="3">
                <v-text-field dense label="Width @ mean spring low tide" v-model=lowTideWidth ></v-text-field>
            </v-col>
            <v-col cols="3">
              <v-text-field dense label="Width @ mean spring high tide" v-model=highTideWidth ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="3">
                <v-text-field dense label="Length" v-model=beachLength ></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field dense label="Back of Beach (example dunes)" v-model=beachBack ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
    <v-card>
    <v-card-title>GPS Location</v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="3">
                <v-text-field dense label="Coordinates Start 50M" v-model=startGPS ></v-text-field>
            </v-col>
            <v-col cols="3">
                <v-text-field dense label="Coordinates End 50M" v-model=endGPS ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="3">
                <v-text-field dense label="Coordinates Quadrant 1" v-model=quadrant1 ></v-text-field>
            </v-col>
            <v-col cols="3">
               <v-text-field dense label="Coordinates Quadrant 2" v-model=quadrant2 ></v-text-field>
            </v-col>
            <v-col cols="3">
                <v-text-field dense label="Coordinates Quadrant 3" v-model=quadrant3 ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
          <v-col cols="3">
                <v-text-field dense label="Coordinates System Used" v-model=coordinationSystem ></v-text-field>
            </v-col>
            <v-col cols="3">
                <v-text-field dense label="Date Measured" v-model=dateGPSPositionMeasured ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
     </v-card>
    <v-card>
    <v-card-title>Beach Stats</v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="4">
                <v-text-field dense label="Prevailing currents off the beach" v-model=prevailingCurrent ></v-text-field>
            </v-col>
            <v-col cols="3">
                <v-text-field dense label="Prevailing winds" v-model=prevailingWinds ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="8">
                <v-text-field dense label="When you look from the beach to the sea, what direction is the beach facing?" v-model=beachDirection></v-text-field>
            </v-col>
          </v-row>
          <v-row>
          <v-col cols="7">
                <v-text-field dense label="Type of beach material (% coverage, e.g.: 40% sand, 60% pebbles)" v-model=beachMaterial></v-text-field>
            </v-col>
          </v-row>
          <v-row>
          <v-col cols="3">
                <v-text-field dense label="Beach Slope (e.g. slope 20%)" v-model=beachTopography></v-text-field>
            </v-col>
            <v-col cols="3">
                <v-text-field dense label="Beach Curvature" v-model=beachCurvature></v-text-field>
            </v-col>
            <v-col cols="3">
                <v-text-field dense label="Horizontal Profile" v-model=horizontalBeachProfile></v-text-field>
            </v-col>
          </v-row>
          <v-row>
          <v-col cols="7">
                <v-text-field dense label="Are there any objects in the sea (e.g. a pier) that influence the currents?" v-model=seaObjects></v-text-field>
            </v-col>
          </v-row>
          <v-row>
          <v-col cols="2">
                <v-text-field dense label="Major Beach Usage" v-model=majorUsage></v-text-field>
            </v-col>
            <v-col cols="5">
                <v-text-field dense label="Estimated # of person visits per year" v-model=beachVisitsPerYear></v-text-field>
            </v-col>
            <v-col cols="3">
                <v-text-field dense label="Access to the Beach" v-model=beachAccess></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
    <v-card>
    <v-card-title>Please use official data only for the following questions</v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="4">
                <v-text-field dense label="What is the distance to the nearest town:"  v-model=nearestTown></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field dense label="What is the position of the town in relation to the survey area:" v-model=townPosition></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
                <v-text-field dense label="What is the (seasonal) population size of this town:"  v-model=townPopulation></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
                <v-text-field dense label="Is there any development behind the beach:"  v-model=behindBeachDev></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
                <v-text-field dense label="Are there food and / or drink outlets on the beach:"  v-model=foodOnBeach></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="8">
                <v-text-field dense label="What is the distance from the survey are to the food / drink outlet (km):" v-model=foodDistance></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="3">
                <v-text-field dense label="Present all year round:"  v-model=foodYearRound></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field dense label="Position of food / drink outlet in relation to the survey area:" v-model=foodPosition></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="7">
                <v-text-field dense label="What is the distance from the beach to the nearest shipping lane (km):"  v-model=nearestShippingLane></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
                <v-text-field dense label="What is the estimated traffic density (# of ships per year):" v-model=shippingLaneDensity></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
    <v-btn
        @click="saveData"
        rounded
        color="primary"
        dark>Create Site
    </v-btn>
  </div>
</template>

<script>
export default {
  data () {
    return {
      siteName: null,
      beachName: null,
      beachCode: null,
      countryCode: null,
      lowTideWidth: null,
      highTideWidth: null,
      beachLength: null,
      beachBack: null,
      startGPS: null,
      endGPS: null,
      quadrant1: null,
      quadrant2: null,
      quadrant3: null,
      coordinationSystem: null,
      dateGPSPositionMeasured: null,
      prevailingCurrent: null,
      prevailingWinds: null,
      beachDirection: null,
      beachMaterial: null,
      beachTopography: null,
      beachCurvature: null,
      horizontalBeachProfile: null,
      seaObjects: null,
      majorUsage: null,
      beachVisitsPerYear: null,
      beachAccess: null
    }
  },
  methods: {
    saveData () {
      const newSite = {
        name: this.siteName,
        beachName: this.beachName,
        beachCode: this.beachCode,
        countryCode: this.countryCode,
        lowTideWidth: this.lowTideWidth,
        highTideWidth: this.highTideWidth,
        beachLength: this.beachLength,
        beachBack: this.beachBack,
        startGPS: this.startGPS,
        endGPS: this.endGPS,
        quadrant1: this.quadrant1,
        quadrant2: this.quadrant2,
        quadrant3: this.quadrant3,
        coordinationSystem: this.coordinationSystem,
        dateGPSPositionMeasured: this.dateGPSPositionMeasured,
        prevailingCurrent: this.prevailingCurrent,
        prevailingWinds: this.prevailingWinds,
        beachDirection: this.beachDirection,
        beachMaterial: this.beachMaterial,
        beachTopography: this.beachTopography,
        beachCurvature: this.beachCurvature,
        horizontalBeachProfile: this.horizontalBeachProfile,
        seaObjects: this.seaObjects,
        majorUsage: this.majorUsage,
        beachVisitsPerYear: this.beachVisitsPerYear,
        beachAccess: this.beachAccess
      }
      console.log(newSite)
      this.$store.dispatch('sites/createSite', newSite)
    }
  }
}
</script>
