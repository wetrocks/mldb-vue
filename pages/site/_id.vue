<template>
  <div>
    <div v-if="site">
      <h1>Showing site {{ site.name }}</h1>
      <p> Created at: {{ site.createTimestamp }} </p>
      <div>
        <b-button v-b-modal="'surveyform-modal'">Create new survey</b-button>
        <b-modal id="surveyform-modal">
          <b-form @submit.prevent="onSubmit">
            <b-form-group label="Survey coordinator:" label-for="input-coordinator">
              <b-form-input id="input-coordinator" v-model="form.coordinator" type="text" placeholder="Survey coordinator" required></b-form-input>
            </b-form-group>
            <b-form-group label="Survey date:" label-for="input-date">
              <b-form-input id="input-date" v-model="form.surveyDate" type="date" required></b-form-input>
            </b-form-group>
            <b-form-group label="Volunteer count:" label-for="input-count">
              <b-form-input id="input-count" v-model="form.volunteerCount" type="number" step="1"></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button>
          </b-form>
        </b-modal>
        <p>Surveys</p>
        <ul>
          <li v-for="survey in site.surveys" :key="survey.id">
            <b-link :to="'/site/' + site.id + '/survey/' + survey.id">
              {{ survey.id }}
            </b-link>
            {{ survey.date }}
            {{ survey.coordinator }}
          </li>
        </ul>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  asyncData ({ params }) {
    const id = params.id
    return { id }
  },
  data () {
    return {
      site: null,
      surveys: [],
      email: null,
      form: {
        coordinator: null,
        surveyDate: null,
        volunteerCount: 1
      }
    }
  },
  async fetch () {
    const accessToken = await this.$auth.strategy.token.get()

    const siteUrl = `http://localhost:5000/site/${this.id}`

    this.site = await this.$axios.get(siteUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then((response) => {
        return response.data
      })
  },
  methods: {
    async onSubmit (event) {
      event.preventDefault()

      const accessToken = await this.$auth.strategy.token.get()

      const siteUrl = `http://localhost:5000/site/${this.id}/survey`

      await this.$axios.post(siteUrl, this.form, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
        .then((response) => {
          this.surveys.push(response.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style>

</style>
