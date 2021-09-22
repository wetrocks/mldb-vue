<template>
  <div>
    <input v-model="coordinator" placeholder="coordinator">
    <input type="date" v-model="date" placeholder="date">
    <input type="number" step="1" v-model="count" placeholder="count">

     <input type="time" placeholder="Start Time">

      <button v-on:click="saveData">Save</button>
      <hr />
      <h1>Surveys</h1>
      <button @click="$fetch">Refresh</button>
      Here are my surveys
    <div>
        <table>
            <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Volunteer Count</th>
            </tr>
            <tr v-for="survey in info" :key="survey.id">
                <td> {{survey.coordinator}} </td>
                <td> {{survey.date}} </td>
                <td> {{survey.volunteerCount}} </td>
            </tr>
        </table>
    </div>
    <hr />
    <div>{{ info }}</div>
    <div>error: {{ err }}</div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      info: null,
      err: null,
      coordinator: null,
      date: null,
      count: null
    }
  },
  async fetch () {
    const accessToken = await this.$auth.strategy.token.get()

    this.info = await this.$axios.get('http://localhost:5000/api/survey', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then(response => response.data)
  },
  methods: {
    async saveData () {
      const accessToken = await this.$auth.strategy.token.get()

      const newSurvey = {
        coordinator: this.coordinator,
        date: this.date,
        count: this.count
      }

      this.$axios
        .post('http://localhost:5000/api/survey', newSurvey, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        })
        .then((response) => {
          this.info.push(response.data)
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
