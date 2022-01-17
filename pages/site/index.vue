<template>
  <div>
    <input v-model="siteName" placeholder="site name">
    <button @click="saveData">
      Sav
    </button>
    <h1>{{ count }}  created </h1>
    <table>
      <tr>
        <th>Name</th>
        <th>Created</th>
        <th>User</th>
      </tr>
      <tr v-for="site in sites" :key="site.id">
        <td>
          <NuxtLink :to="'site/' + site.id">
            {{ site.name }}
          </NuxtLink>
        </td>
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
      siteName: null
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
        name: this.siteName
      }

      this.$store.dispatch('sites/createSite', newSite)

      this.siteName = null
    }
  }
}
</script>

<style>

</style>
