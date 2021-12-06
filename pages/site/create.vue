<template>
<div>
    <h2>Create a Site</h2>
    <v-app id="inspire">
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step
          :complete="e1 > 1"
          step="1">
          Site Info
        </v-stepper-step>
      </v-stepper-header>
        <v-divider></v-divider>
        <v-stepper-items>
        <v-stepper-content step="1">
            <v-row>
               <v-col><v-text-field label="Site Name"></v-text-field></v-col>
            </v-row>
            <v-row>
               <v-col><v-text-field label="Beach Code"></v-text-field></v-col>
               <v-col><v-text-field label="Beach Name"></v-text-field></v-col>
               <v-col><v-text-field label="Country Code"></v-text-field></v-col>
          </v-row>
          <v-btn
            color="primary"
            @click="e1 = 2">
            Continue
          </v-btn>
          <v-btn text>
            Cancel
        </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-app>
</div>
</template>

<script>
export default {
  saveData () {
    const newSite = {
      name: this.siteName,
      beachName: this.beachName,
      beachCode: this.beachCode,
      countryCode: this.countryCode
    }
    this.$store.dispatch('sites/createSite', newSite)
  }
}
</script>
