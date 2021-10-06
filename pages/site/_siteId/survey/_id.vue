<template>
  <div>
    <SurveyInfo v-bind:survey=currentSurvey></SurveyInfo>
    <SurveyLitterTabs v-bind:litterItems=currentSurvey.litterItems></SurveyLitterTabs>
    <p>{{ currentSurvey }}</p>
    <button @click="saveSurvey">Save</button>
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
  computed: {
    currentSurvey () {
      return this.$store.state.surveys.currentSurvey
    }
  },
  async fetch () {
    const site = this.siteId
    const survey = this.id
    const surveyParams = { siteId: site, surveyId: survey }

    await this.$store.dispatch('surveys/loadCurrentSurvey', surveyParams)
  },
  methods: {
    async saveSurvey (event) {
      const accessToken = await this.$auth.strategy.token.get()

      const surveyUrl = `http://localhost:5000/site/${this.siteId}/survey/{$this.id}`

      await this.$axios.put(surveyUrl, this.currentSurvey, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
        .then((response) => {
          console.log(response.data)
        })
        .catch(function (error) {
          console.log('foooooooo')
          console.log(error)
        })
    }
  }
}
</script>

<style>

</style>
