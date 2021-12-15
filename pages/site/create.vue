<template>
 <div>
    <h3>Create a Site</h3>
    <v-card>
      <v-card-title>Site Identification</v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="3">
                <v-text-field label="Site Name" v-model=siteName ></v-text-field>
            </v-col>
            <v-col cols="3">
              <v-text-field label="Country" v-model=countryCode ></v-text-field>
            </v-col>
            <v-col cols="3">
                <v-text-field label="Beach Code" v-model=beachCode ></v-text-field>
            </v-col>
            <v-col cols="3">
              <v-text-field label="Beach Name" v-model=beachName ></v-text-field>
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
                <v-text-field label="Width @ mean spring low tide" v-model=lowTideWidth ></v-text-field>
            </v-col>
            <v-col cols="3">
              <v-text-field label="Width @ mean spring high tide" v-model=highTideWidth ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="3">
                <v-text-field label="Length" v-model=beachLength ></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field label="Back of Beach (example dunes)" v-model=beachBack ></v-text-field>
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
                <v-text-field label="Coordinates Start 50M" v-model=startGPS ></v-text-field>
            </v-col>
            <v-col cols="3">
                <v-text-field label="Coordinates End 50M" v-model=endGPS ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="3">
                <v-text-field label="Coordinates Quadrant 1" v-model=quadrant1 ></v-text-field>
            </v-col>
            <v-col cols="3">
               <v-text-field label="Coordinates Quadrant 2" v-model=quadrant2 ></v-text-field>
            </v-col>
            <v-col cols="3">
                <v-text-field label="Coordinates Quadrant 3" v-model=quadrant3 ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
          <v-col cols="3">
                <v-text-field label="Coordinates System Used" v-model=coordinationSystem ></v-text-field>
            </v-col>
            <v-col cols="3">
                <v-text-field label="Date Measured" v-model=dateGPSPositionMeasured ></v-text-field>
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
                <v-text-field label="Prevailing currents off the beach" v-model=prevailingCurrent ></v-text-field>
            </v-col>
            <v-col cols="3">
                <v-text-field label="Prevailing winds" v-model=prevailingWinds ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="8">
                <v-text-field label="When you look from the beach to the sea, what direction is the beach facing?" v-model=beachDirection></v-text-field>
            </v-col>
          </v-row>
          <v-row>
          <v-col cols="7">
                <v-text-field label="Type of beach material (% coverage, e.g.: 40% sand, 60% pebbles)" v-model=beachMaterial></v-text-field>
            </v-col>
          </v-row>
          <v-row>
          <v-col cols="3">
                <v-text-field label="Beach Slope (e.g. slope 20%)" v-model=beachTopography></v-text-field>
            </v-col>
            <v-col cols="3">
                <v-text-field label="Beach Curvature" v-model=beachCurvature></v-text-field>
            </v-col>
            <v-col cols="3">
                <v-text-field label="Horizontal Profile" v-model=horizontalBeachProfile></v-text-field>
            </v-col>
          </v-row>
          <v-row>
          <v-col cols="7">
                <v-text-field label="Are there any objects in the sea (e.g. a pier) that influence the currents?" v-model=seaObjects></v-text-field>
            </v-col>
          </v-row>
          <v-row>
          <v-col cols="2">
                <v-text-field label="Major Beach Usage" v-model=majorUsage></v-text-field>
            </v-col>
            <v-col cols="5">
                <v-text-field label="Estimated person of person visits per year" v-model=beachVisitsPerYear></v-text-field>
            </v-col>
            <v-col cols="3">
                <v-text-field label="Access to the Beach" v-model=beachAccess></v-text-field>
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
      countryCode: null
    }
  },
  methods: {
    saveData () {
      const newSite = {
        name: this.siteName,
        beachName: this.beachName,
        beachCode: this.beachCode,
        countryCode: this.countryCode
      }
      console.log(newSite)
      this.$store.dispatch('sites/createSite', newSite)
    }
  }
}
</script>
