<template>
  <div>
      <p v-if="$auth.loggedIn">
        Now that you're authenticated, you can <a @click="$auth.logout ()" class="link">log out</a>
      </p>
      <p v-else>
        You're not authenticated yet. Maybe you want to <a @click="$auth.loginWith('auth0')" class="link">sign in</a> and see what happens?
      </p>

      <div v-if="$auth.loggedIn">
        <b-container>
          <b-row>
            <b-col>My sites</b-col>
          </b-row>
          <MySitesRow></MySitesRow>
          <b-row>
            <b-col>My recent surveys</b-col>
          </b-row>
        </b-container>
      </div>

      <b-container v-else>
      <b-row>
        <b-col>
          <b-card title="Kg of litter collected">
             <canvas id="myChart"></canvas>
          </b-card>
        </b-col>
        <b-col>Card here</b-col>
        <b-col>Card here</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
 // import Chart from 'chart.js/auto'

export default {
  head() {
    return {
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/chart.js'
        }
      ],
    }
  },
  data () {
    return {
      chartData: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
        ],
        datasets: [{
          label: 'My First dataset',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [0, 10, 5, 2, 20, 30, 45],
        }]
      }
    }
  },
  mounted () {

    // const mychart = new Chart(
    //   document.getElementById('myChart'),
    //   {
    //     type: 'line',
    //     data: this.chartData,
    //     options: {}
    //   }
    // );

    // console.log(mychart);
  },
}
</script>

<style>

</style>
