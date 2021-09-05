<template>
  <div>
    <div>
      <p>
        <input v-model="siteName" placeholder="site name">
        <button v-on:click="saveData">Save</button>
      </p>

      <button @click="$fetch">Refresh</button>
      <table>
        <tr>
          <th>Name</th>
          <th>Created</th>
        </tr>
        <tr v-for="site in sites" :key="site.id">
          <td> {{ site.name }} </td>
          <td> {{ site.createTimestamp }} </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      siteName: null,
      sites: []
    }
  },
  async fetch () {
    const accessToken = await this.$auth.strategy.token.get()

    this.sites = await this.$axios.get('http://localhost:5000/api/site', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then(response => response.data)
  },
  methods: {
    async saveData () {
      const accessToken = await this.$auth.strategy.token.get()

      console.log(this.siteName)

      const newSite = {
        Name: this.siteName
      }

      this.$axios
        .post('http://localhost:5000/api/site', newSite, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        })
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          this.err = error
        })
    }
  }
}
</script>

<style>

</style>
