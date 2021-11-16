<template>
  <b-row>
    <template v-if="$fetchState.pending">
      <b-spinner label="loading"></b-spinner>Loading...
    </template>
    <template v-else-if="$fetchState.error">
      Error while fetching data
    </template>
    <template v-else>
      <b-col v-for="site in first3Sites" :key="site.id" cols="3">
        <SiteCard v-bind:site=site></SiteCard>
      </b-col>
      <b-col cols="3">
        <b-card title="All Sites"  @click="$router.push({ name: 'site' })">
          <b-card-text>All other sites</b-card-text>
        </b-card>
      </b-col>
    </template>
  </b-row>
</template>

<script>
export default {
  async fetch () {
    await this.$store.dispatch('sites/loadSites')
  },
  fetchDelay: 500,
  computed: {
    first3Sites () {
      const allSites =  this.$store.state.sites.siteList

      return allSites.slice(0,3)
    },
    count () {
      return this.$store.state.sites.siteList.length
    }
  },
}
</script>
