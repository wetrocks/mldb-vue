<template>
  <div>
    <input v-model="siteName" placeholder="site name">
    <input v-model="beachName" placeholder="beach name">
    <input v-model="beachCode" placeholder="beach code">
    <input v-model="countryCode" placeholder="country code">
    <button @click="saveData">
      Save
    </button>
    <h1>{{ count }}  created </h1>
    <table>
      <tr>
        <th>Name</th>
        <th>Beach Name</th>
        <th>Beach Code</th>
        <th>Country</th>
        <th>Created</th>
        <th>User</th>
      </tr>
      <tr v-for="site in sites" :key="site.id">
        <td>
          <b-link :to="'site/' + site.id">
            {{ site.name }}
          </b-link>
        </td>
        <td> {{ site.beachName }} </td>
        <td> {{ site.beachCode }} </td>
        <td> {{ site.countryCode }} </td>
        <td> {{ site.createTimestamp }} </td>
        <td> {{ site.createdBy }} </td>
      </tr>
    </table>
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
  },
  methods: {
    saveData () {
      const newSite = {
        name: this.siteName,
        beachName: this.beachName,
        beachCode: this.beachCode,
        countryCode: this.countryCode
      }

      this.$store.dispatch('sites/createSite', newSite)

      this.siteName = null
    }
  }
}
</script>

<style>

</style>
