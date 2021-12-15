<template>
 <div>
    <h3>Create a Site</h3>
    <v-card>
      <v-card-title>Site Identification</v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="3">
                <v-text-field label="Site Name" v-model=siteName required></v-text-field>
            </v-col>
            <v-col cols="3">
              <v-text-field label="Country" v-model=countryCode required></v-text-field>
            </v-col>
            <v-col cols="3">
                <v-text-field label="Beach Code" v-model=beachCode required></v-text-field>
            </v-col>
            <v-col cols="3">
              <v-text-field label="Beach Name" v-model=beachName required></v-text-field>
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
                <v-text-field label="Width @ mean spring low tide" v-model=lowTideWidth required></v-text-field>
            </v-col>
            <v-col cols="3">
              <v-text-field label="Width @ mean spring high tide" v-model=highTideWidth required></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="3">
                <v-text-field label="Length" v-model=beachLength required></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field label="Back of Beach (example dunes)" v-model=beachBack required></v-text-field>
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
                <v-text-field label="Coordinates Start 50M" v-model=startGPS required></v-text-field>
            </v-col>
            <v-col cols="3">
                <v-text-field label="Coordinates End 50M" v-model=endGPS required></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="3">
                <v-text-field label="Coordinates Quadrant 1" v-model=quadrant1 required></v-text-field>
            </v-col>
            <v-col cols="3">
               <v-text-field label="Coordinates Quadrant 2" v-model=quadrant2 required></v-text-field>
            </v-col>
            <v-col cols="3">
                <v-text-field label="Coordinates Quadrant 3" v-model=quadrant3 required></v-text-field>
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
