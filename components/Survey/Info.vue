<template>
  <div>
    <div v-if="survey">
      <b-link :to="'/site/' + survey.siteId">Back to site page </b-link>
      <b-container>
        <b-row>
          <b-col>Date: {{ survey.surveyDate }}</b-col>
          <b-col>Coordinator: {{ survey.coordinator }}</b-col>
        </b-row>
        <b-row>
          <b-col>Start Time: {{ survey.startTime }}</b-col>
          <b-col>Total Kg: {{ survey.totalKg }}</b-col>
        </b-row>
      </b-container>
    </div>
    <div v-else>
      <p> No survey to display </p>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'survey'
  ]
}
</script>

<style>

</style>
