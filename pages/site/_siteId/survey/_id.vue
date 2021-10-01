<template>
  <div>
    <SurveyInfo v-bind:survey=survey></SurveyInfo>
    <SurveyLitterTabs v-bind:litterItems=survey.litterItems></SurveyLitterTabs>
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
      survey: Object
    }
  },
  async fetch () {
    const accessToken = await this.$auth.strategy.token.get()

    const siteUrl = `http://localhost:5000/site/${this.siteId}/survey/dto/${this.id}`

    this.survey = await this.$axios.get(siteUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then((response) => {
        console.log(response.data)
        return response.data
      })

    this.$store.commit('surveys/setCurrentSurvey', this.survey)
  }
}
</script>

<style>

</style>
