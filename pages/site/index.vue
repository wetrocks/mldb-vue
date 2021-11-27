<template>
<div id="app">
  <v-app id="inspire">
    <v-card>
      <v-card-title>
        <v-text-field
          v-model="search"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="sites"
        class="elevation-1"
        item-key="name"
        :search="search"
      >
     </v-data-table>
    </v-card>
  </v-app>
</div>
</template>

<script>
export default {
  data () {
    return {
      search: '',
      headers: [
        { text: 'Site Name', value: 'name' },
        { text: 'Beach Name', value: 'beachName' },
        { text: 'Beach Code', value: 'beachCode' },
        { text: 'Country Code', value: 'countryCode' }
      ]
    }
  },
  async fetch () {
    await this.$store.dispatch('sites/loadSites')
  },
  computed: {
    sites () {
      return this.$store.state.sites.siteList
    },
    count () {
      return this.$store.state.sites.siteList.length
    }
  }
}
</script>
