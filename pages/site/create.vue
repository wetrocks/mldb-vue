<template>
 <div>
    <h3>Create a Site</h3>
    <v-card>
      <v-card-title>Site Identification</v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="4">
                <v-text-field label="Site Name" v-model=siteName required></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field label="Country" v-model=countryCode required></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">
                <v-text-field label="Beach Code" v-model=beachCode required></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field label="Beach Name" v-model=beachName required></v-text-field>
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
