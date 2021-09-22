<template>
  <div>
      <SurveyInfo v-bind:survey=survey></SurveyInfo>
      <SurveyLitterTabs></SurveyLitterTabs>
  </div>
</template>

<script>
export default {
  asyncData ({ params }) {
    const id = params.id
    const siteId = params.siteId
    return { id, siteId }
  },
  data () {
    return {
      survey: null
    }
  },
  async fetch () {
    const accessToken = await this.$auth.strategy.token.get()

    const siteUrl = `http://localhost:5000/site/${this.siteId}/survey/${this.id}`

    this.survey = await this.$axios.get(siteUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then((response) => {
        console.log(response.data)
        return response.data
      })
  }
}
</script>

<style>

</style>
